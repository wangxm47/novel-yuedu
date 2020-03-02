'use strict'

import {
    app,
    protocol,
    BrowserWindow,
    Menu,
    globalShortcut
} from 'electron'
import {
    createProtocol,
    installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{
    scheme: 'app',
    privileges: {
        secure: true,
        standard: true
    }
}])

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1400,
        height: 800,
        minWidth: 1000,
        minHeight: 700,
        frame: true,
        titleBarStyle: 'hidden',
        webPreferences: {
            webSecurity: false,
            nodeIntegration: true
        }
    })

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
        if (!process.env.IS_TEST) win.webContents.openDevTools()
    } else {
        createProtocol('app')
        // Load the index.html when not in development
        win.loadURL('app://./index.html/')
    }

    win.on('closed', () => {
        win = null
    })
    createMenu()
}

// 设置菜单栏
function createMenu() {
    // darwin表示macOS，针对macOS的设置
    if (process.platform === 'darwin') {
        const template = [{
            label: 'App Demo',
            submenu: [{
                    role: 'about'
                },
                {
                    role: 'quit'
                }
            ]
        }]
        let menu = Menu.buildFromTemplate(template)
        Menu.setApplicationMenu(menu)
    } else {
        // windows及linux系统
        Menu.setApplicationMenu(null)
    }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
    if (isDevelopment && !process.env.IS_TEST) {
        // Install Vue Devtools
        // Devtools extensions are broken in Electron 6.0.0 and greater
        // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
        // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
        // If you are not using Windows 10 dark mode, you may uncomment these lines
        // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
        // try {
        //   await installVueDevtools()
        // } catch (e) {
        //   console.error('Vue Devtools failed to install:', e.toString())
        // }

    } else {
        try {
            await installVueDevtools()
        } catch (e) {
            console.error('Vue Devtools failed to install:', e.toString())
        }
    }

    createWindow()
    globalShortcut.register('Ctrl+F12', () => {
        if (win != null) {
            win.webContents.openDevTools();
        }
    })

    // 检测快捷键是否注册成功 true是注册成功
    let isRegister = globalShortcut.isRegistered('Ctrl+F12')
    console.log(isRegister, "F12")
})

// 退出的时候取消全局快捷键
app.on('will-quit', () => {
    globalShortcut.unregister('Ctrl+F12')
})


// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', data => {
            if (data === 'graceful-exit') {
                app.quit()
            }
        })
    } else {
        process.on('SIGTERM', () => {
            app.quit()
        })
    }
}
