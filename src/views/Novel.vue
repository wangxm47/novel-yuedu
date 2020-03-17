<template>
    <div class="novel" :style="{backgroundColor: myColor}">
        <div class="home" @click="goHome">
            <svg t="1584256560492" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="3776" width="32" height="32">
                <path d="M267.168 454.624v316.48h152V598.224c0-6.144 4.992-11.12 11.136-11.12h169.728c6.16 0 11.136 4.976 11.136 11.12v172.88h136V453.6l-239.36-188.848-240.64 189.856z m-48 37.872l-39.36 31.04a16 16 0 0 1-22.464-2.656l-9.904-12.56a16 16 0 0 1 2.656-22.464l347.792-274.416a16 16 0 0 1 19.84 0l347.792 274.4a16 16 0 0 1 2.656 22.48l-9.92 12.56a16 16 0 0 1-22.464 2.656l-40.624-32.048v292.48a35.136 35.136 0 0 1-35.136 35.136H254.304a35.136 35.136 0 0 1-35.136-35.136V492.496z m248 270.608h96v-128h-96v128z"
                    p-id="3777" :fill="iconColor"></path>
            </svg>
        </div>
        <div class="setting" @click="showSetting" v-clickoutside="closeSetting">
            <svg t="1584099150485" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2917"
                width="33" height="33">
                <path d="M396.72 320.592a141.184 141.184 0 0 1-99.824 15.92 277.648 277.648 0 0 0-45.344 74.576 141.216 141.216 0 0 1 37.52 95.952 141.248 141.248 0 0 1-41.728 100.32 274.4 274.4 0 0 0 49.952 86.224 141.264 141.264 0 0 1 107.168 14.176 141.216 141.216 0 0 1 63.984 79.296 274.72 274.72 0 0 0 86.816-1.92 141.248 141.248 0 0 1 66.016-86.304 141.216 141.216 0 0 1 101.856-15.488 277.648 277.648 0 0 0 41.92-76.544 141.184 141.184 0 0 1-36.128-94.4c0-34.912 12.768-67.68 34.816-92.96a274.736 274.736 0 0 0-38.192-70.032 141.264 141.264 0 0 1-105.792-14.56 141.312 141.312 0 0 1-67.168-90.912 274.4 274.4 0 0 0-92.784 0.016 141.152 141.152 0 0 1-63.088 76.64z m22.56-116.656c57.312-16 119.024-16.224 178.016 1.216a93.44 93.44 0 0 0 142.288 86.736 322.64 322.64 0 0 1 79.104 142.656 93.328 93.328 0 0 0-41.76 77.84 93.36 93.36 0 0 0 42.88 78.592 322.832 322.832 0 0 1-34.208 85.232 323.392 323.392 0 0 1-47.968 63.568 93.392 93.392 0 0 0-92.352 0.64 93.408 93.408 0 0 0-46.688 83.616 322.704 322.704 0 0 1-171.424 3.84 93.376 93.376 0 0 0-46.704-78.544 93.408 93.408 0 0 0-95.184 1.008A322.432 322.432 0 0 1 192 589.28a93.408 93.408 0 0 0 49.072-82.24c0-34.128-18.304-64-45.632-80.288a323.392 323.392 0 0 1 31.088-73.328 322.832 322.832 0 0 1 56.704-72.256 93.36 93.36 0 0 0 89.488-2.144 93.328 93.328 0 0 0 46.56-75.088z m92.208 385.28a68.864 68.864 0 1 0 0-137.76 68.864 68.864 0 0 0 0 137.76z m0 48a116.864 116.864 0 1 1 0-233.76 116.864 116.864 0 0 1 0 233.76z"
                    p-id="2918" :fill="iconColor"></path>
            </svg>
            <div class="setting-wrapper" v-if="showReadSetting" :style="{backgroundColor: myColor}">
                <h4>背景</h4>
                <div class="setting-item">
                    <div class="backgroud">
                        <div class="white" @click="changeMode('white')"></div>
                        <p>无</p>
                    </div>
                    <div class="backgroud">
                        <div class="black" @click="changeMode('black')"></div>
                        <p>夜间</p>
                    </div>
                    <div class="backgroud">
                        <div class="protect" @click="changeMode('#E6F0E6')"></div>
                        <p>护眼</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="index" @click="showBookIndex" v-clickoutside="closeBookIndex">
            <svg t="1584099803909" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3075"
                width="32" height="32">
                <path d="M343.312 374.256v-16a16 16 0 0 1 16-16h23.648a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16h-23.648a16 16 0 0 1-16-16z m100.16 0v-16a16 16 0 0 1 16-16H650.08a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16H459.472a16 16 0 0 1-16-16z m-100.16 144.704v-16a16 16 0 0 1 16-16h23.648a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16h-23.648a16 16 0 0 1-16-16z m100.16 0v-16a16 16 0 0 1 16-16H650.08a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16H459.472a16 16 0 0 1-16-16z m-100.16 144.688v-16a16 16 0 0 1 16-16h23.648a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16h-23.648a16 16 0 0 1-16-16z m100.16 0v-16a16 16 0 0 1 16-16H650.08a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16H459.472a16 16 0 0 1-16-16zM256 240v541.92h497.392V240H256z m529.392 589.92H224a16 16 0 0 1-16-16V208a16 16 0 0 1 16-16h561.392a16 16 0 0 1 16 16v605.92a16 16 0 0 1-16 16z"
                    p-id="3076" :fill="iconColor"></path>
            </svg>
            <div class="index-wrapper" v-show="showIndex" :style="{backgroundColor: myColor}">
                <h4>目录</h4>
                <div class="index-list">
                    <div class="index-item" :class="{active:index==read}" v-for="(item,index) in bookIndex" :key="index"
                        @click="goTo(index)">
                        {{item.name}}
                    </div>
                </div>
            </div>
        </div>
        <div class="back" @click="goToBack()">
            <svg t="1584096388321" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="14679" width="32" height="32">
                <path d="M538.288 198.624l-11.312-11.312a16 16 0 0 0-22.64 0L187.312 504.336a16 16 0 0 0 0 22.64L504.336 844a16 16 0 0 0 22.64 0l11.312-11.312a16 16 0 0 0 0-22.624l-294.4-294.4 294.4-294.4a16 16 0 0 0 0-22.64z"
                    p-id="14680" fill="#ffffff"></path>
            </svg>
        </div>
        <div class="content">
            <h1>{{name}}</h1>
            <transition name="text-fade" mode="out-in">
                <Loading class="loading" v-if="load" size="large"></Loading>
                <div v-else class="text">
                    <p v-for="(word,index) in text" :key="index">{{word}}</p>
                </div>
            </transition>
        </div>
        <div class="next" @click="goToNext()">
            <svg t="1584092578538" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="3898" width="32" height="32">
                <path d="M340.688 830.24l11.312 11.328a16 16 0 0 0 22.624 0L685.76 530.448a16 16 0 0 0 0-22.64L374.624 196.688a16 16 0 0 0-22.624 0l-11.312 11.312a16 16 0 0 0 0 22.624l288.496 288.496-288.496 288.512a16 16 0 0 0 0 22.624z"
                    p-id="3899" fill="#ffffff"></path>
            </svg>
        </div>
        <transition-group name="message-list" tag="div" class="message-wrapper">
            <Message v-for="(msg,index) in messages" :type="msg.type" :message="msg.message" :delay="msg.delay" :key="msg.id"
                @close="messageClose(index)"></Message>
        </transition-group>
    </div>
</template>

<script>
    import Loading from '@/components/loading.vue'
    import Message from '@/components/message.vue'
    export default {
        name: "Novel",
        components: {
            Loading,
            Message
        },
        props: ['book'],
        data() {
            return {
                bookIndex: this.book.index,
                read: this.book.read,
                load: false,
                text: [],
                messages: [],
                showIndex: false,
                showReadSetting: false,
                myColor: 'white',
                msgNum: 0
            }
        },
        computed: {
            name() {
                return this.bookIndex[this.read].name
            },
            iconColor() {
                if (this.myColor == "black") return "white";
                return 'black';
            }
        },
        methods: {
            messageClose(index) {
                this.messages.splice(index, 1);
            },
            changeMode(str) {
                if (str == "white" && this.myColor != str) {
                    this.myColor = str;
                    if (this.$store.state.mode == "night") {
                        this.$store.commit("changeMode");
                    }
                } else if (str == "black" && this.myColor != str) {
                    this.myColor = str;
                    if (this.$store.state.mode == "sun") {
                        this.$store.commit("changeMode");
                    }

                } else if (str == "#E6F0E6" && this.myColor != str) {
                    this.myColor = str;
                    if (this.$store.state.mode == "night") {
                        this.$store.commit("changeMode");
                    }
                }
                //console.log(this.myColor);
                var that = this;
                var dbRequest1 = window.indexedDB.open("setting");
                dbRequest1.onsuccess = function(event) {
                    var db = event.target.result;
                    var store = db.transaction("mySetting", 'readwrite').objectStore("mySetting");
                    store.openCursor().onsuccess = function(event) {
                        var cursor = event.target.result;
                        if (cursor) {
                            var temp = cursor.value;
                            temp.mode = that.$store.state.mode;
                            if (temp.mode == "night") {
                                temp.suncolor = temp.color;
                            } else if (temp.suncolor != that.myColor) {
                                temp.suncolor = that.myColor;
                            }
                            temp.color = that.myColor;
                            cursor.update(temp);
                            cursor.continue();
                        }
                    }
                }
            },
            getText() {
                this.text = "";
                this.load = true;
                var link = this.bookIndex[this.read].link;
                if(link[4]!="s"){
                    link = link.replace("app","https");
                }
                this.$http.get(link).then(res => {
                    var parser = new DOMParser();
                    var doc = parser.parseFromString(res.data, "text/html");
                    var text = new String(doc.getElementById('content').innerHTML);
                    text = text.replace(/^(<scr).*<\/script>/gi, '');
                    text = text.replace(/<br>/gi, '\n');
                    this.text = text.split('\n');
                    this.load = false;
                }).catch(() => {
                    this.messages.push({
                        id: this.msgNum++,
                        type: "error",
                        message: "加载失败!"
                    });
                });
                window.scrollTo(0,0);
            },
            showBookIndex() {
                this.showIndex = !this.showIndex;
            },
            closeBookIndex() {
                this.showIndex = false;
            },
            showSetting() {
                this.showReadSetting = !this.showReadSetting;
            },
            closeSetting() {
                this.showReadSetting = false;
            },
            goTo(index) {
                if (this.read == index) {
                    return;
                } else {
                    this.read = index;
                    var that = this;
                    var dbRequest = window.indexedDB.open("bookData");
                    dbRequest.onsuccess = function(event) {
                        var db = event.target.result;
                        var store = db.transaction("books", 'readwrite').objectStore("books");
                        store.openCursor().onsuccess = function(event) {
                            var cursor = event.target.result;
                            if (cursor) {
                                if (cursor.value.id == that.book.id) {
                                    var temp = cursor.value;
                                    temp.read = that.read;
                                    cursor.update(temp);
                                    return;
                                }
                                cursor.continue();
                            }
                        }
                    }
                    this.getText();
                    event.target.scrollIntoView();
                }
            },
            goToBack() {
                if (this.read == 0) {
                    return;
                } else {
                    this.read--;
                    var that = this;
                    var dbRequest = window.indexedDB.open("bookData");
                    dbRequest.onsuccess = function(event) {
                        var db = event.target.result;
                        var store = db.transaction("books", 'readwrite').objectStore("books");
                        store.openCursor().onsuccess = function(event) {
                            var cursor = event.target.result;
                            if (cursor) {
                                if (cursor.value.id == that.book.id) {
                                    var temp = cursor.value;
                                    temp.read = that.read;
                                    cursor.update(temp);
                                    return;
                                }
                                cursor.continue();
                            }
                        }
                    }
                    this.getText();
                }
            },
            goToNext() {
                if (this.read == this.bookIndex.length - 1) {
                    return
                } else {
                    this.read++;
                    var that = this;
                    var dbRequest = window.indexedDB.open("bookData");
                    dbRequest.onsuccess = function(event) {
                        var db = event.target.result;
                        var store = db.transaction("books", 'readwrite').objectStore("books");
                        store.openCursor().onsuccess = function(event) {
                            var cursor = event.target.result;
                            if (cursor) {
                                if (cursor.value.id == that.book.id) {
                                    var temp = cursor.value;
                                    temp.read = that.read;
                                    cursor.update(temp);
                                    return;
                                }
                                cursor.continue();
                            }
                        }
                    }
                    this.getText();
                }
            },
            goHome() {
                this.$router.push({
                    name: "home"
                });
            }
        },
        mounted() {
            this.getText();
            var that = this;
            var dbRequest1 = window.indexedDB.open("setting");
            dbRequest1.onsuccess = function(event) {
                var db = event.target.result;
                var store = db.transaction("mySetting", 'readwrite').objectStore("mySetting");
                store.openCursor().onsuccess = function(event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        that.myColor = cursor.value.color;
                        cursor.continue();
                    }
                }
            }
        }
    }
</script>

<style scoped="scoped">
    .novel {
        width: 100%;
        min-width: 1000px;
        min-height: 800px;
    }

    .setting-wrapper,
    .index-wrapper {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        text-align: left;
        padding: 20px 20px;
        border-radius: 20px;
        z-index: 1100;
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    }

    .setting-wrapper {
        width: 400px;
    }

    .setting-wrapper h4 {
        margin-left: 20px;
    }

    .setting-item {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        margin: 15px 0;
        font-weight: 500;
    }

    .backgroud {
        text-align: center;
        display: inline-block;
    }

    .white {
        border: 1px solid #cacaca;
        width: 50px;
        height: 30px;
        background-color: #FFFFFF;
        margin: auto;
        margin-bottom: 5px;
        cursor: pointer;
    }

    .black {
        border: 1px solid #cacaca;
        width: 50px;
        height: 30px;
        background-color: #000000;
        margin: auto;
        margin-bottom: 5px;
        cursor: pointer;
    }

    .protect {
        border: 1px solid #cacaca;
        width: 50px;
        height: 30px;
        background-color: #E6F0E6;
        margin: auto;
        margin-bottom: 5px;
        cursor: pointer;
    }

    .index-list {
        width: 400px;
        height: 200px;
        overflow: auto;
        user-select: none;
    }

    .index-list::-webkit-scrollbar {
        display: none;
    }

    .index-item {
        border-bottom: 1px solid #f2f2f2;
        padding: 10px 0;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
    }

    .active {
        color: #12a4fa;
    }

    .setting,
    .index,
    .home {
        padding: 0;
        margin: 0;
        width: 33px;
        height: 33px;
        border-radius: 50%;
    }
    
    .home{
        position: fixed;
        top: 20px;
        left: 20px;
    }

    .setting {
        position: fixed;
        top: 20px;
        left: 60px;
    }

    .index {
        position: fixed;
        top: 20px;
        left: 100px;
    }

    .index:hover,
    .setting:hover,
    .home:hover{
        background-color: rgba(31, 45, 61, .31);
    }

    .content {
        height: 100%;
        width: 800px;
        margin: auto;
        padding: 30px 40px;
        user-select: none;
        text-align: left;
        font-size: 25px;
        line-height: 1.8;
        font-family: Microsoft YaHei, PingFangSC-Regular, HelveticaNeue-Light, Helvetica Neue Light, sans-serif;
    }

    h1 {
        text-align: center;
    }

    .text {
        margin-top: 50px;
    }

    .back,
    .next {
        width: 50px;
        height: 50px;
        border: none;
        outline: 0;
        padding: 0;
        margin: 0;
        z-index: 10;
        background-color: rgba(31, 45, 61, .11);
        color: #fff;
        border-radius: 50%;
    }

    .back:hover,
    .next:hover {
        background-color: rgba(31, 45, 61, .31);
    }

    .back {
        position: fixed;
        top: 50%;
        left: 80px;
        transform: translateY(-50%);
    }

    .next {
        position: fixed;
        top: 50%;
        right: 80px;
        transform: translateY(-50%);
    }

    .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-40%, -50%);
    }

    .loading {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .message-wrapper {
        position: fixed;
        left: 50%;
        top: 4px;
        transform: translateX(-50%);
        width: 200px;
    }

    .message-list-enter,
    .message-list-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }

    .message-list-leave-active {
        position: absolute;
    }

    .text-fade-enter-active,
    .text-fade-leave-active {
        transition: all .2s;
    }

    .text-fade-enter,
    .text-fade-leave-to {
        opacity: 0;
        /* transform: translateX(30px); */
    }
</style>
