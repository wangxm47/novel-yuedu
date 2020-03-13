<template>
    <div class="novel">
        <div class="setting">
            <svg t="1584099150485" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2917"
                width="33" height="33">
                <path d="M396.72 320.592a141.184 141.184 0 0 1-99.824 15.92 277.648 277.648 0 0 0-45.344 74.576 141.216 141.216 0 0 1 37.52 95.952 141.248 141.248 0 0 1-41.728 100.32 274.4 274.4 0 0 0 49.952 86.224 141.264 141.264 0 0 1 107.168 14.176 141.216 141.216 0 0 1 63.984 79.296 274.72 274.72 0 0 0 86.816-1.92 141.248 141.248 0 0 1 66.016-86.304 141.216 141.216 0 0 1 101.856-15.488 277.648 277.648 0 0 0 41.92-76.544 141.184 141.184 0 0 1-36.128-94.4c0-34.912 12.768-67.68 34.816-92.96a274.736 274.736 0 0 0-38.192-70.032 141.264 141.264 0 0 1-105.792-14.56 141.312 141.312 0 0 1-67.168-90.912 274.4 274.4 0 0 0-92.784 0.016 141.152 141.152 0 0 1-63.088 76.64z m22.56-116.656c57.312-16 119.024-16.224 178.016 1.216a93.44 93.44 0 0 0 142.288 86.736 322.64 322.64 0 0 1 79.104 142.656 93.328 93.328 0 0 0-41.76 77.84 93.36 93.36 0 0 0 42.88 78.592 322.832 322.832 0 0 1-34.208 85.232 323.392 323.392 0 0 1-47.968 63.568 93.392 93.392 0 0 0-92.352 0.64 93.408 93.408 0 0 0-46.688 83.616 322.704 322.704 0 0 1-171.424 3.84 93.376 93.376 0 0 0-46.704-78.544 93.408 93.408 0 0 0-95.184 1.008A322.432 322.432 0 0 1 192 589.28a93.408 93.408 0 0 0 49.072-82.24c0-34.128-18.304-64-45.632-80.288a323.392 323.392 0 0 1 31.088-73.328 322.832 322.832 0 0 1 56.704-72.256 93.36 93.36 0 0 0 89.488-2.144 93.328 93.328 0 0 0 46.56-75.088z m92.208 385.28a68.864 68.864 0 1 0 0-137.76 68.864 68.864 0 0 0 0 137.76z m0 48a116.864 116.864 0 1 1 0-233.76 116.864 116.864 0 0 1 0 233.76z"
                    p-id="2918"></path>
            </svg>
        </div>
        <div class="index">
            <svg t="1584099803909" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="3075" width="32" height="32">
                <path d="M343.312 374.256v-16a16 16 0 0 1 16-16h23.648a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16h-23.648a16 16 0 0 1-16-16z m100.16 0v-16a16 16 0 0 1 16-16H650.08a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16H459.472a16 16 0 0 1-16-16z m-100.16 144.704v-16a16 16 0 0 1 16-16h23.648a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16h-23.648a16 16 0 0 1-16-16z m100.16 0v-16a16 16 0 0 1 16-16H650.08a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16H459.472a16 16 0 0 1-16-16z m-100.16 144.688v-16a16 16 0 0 1 16-16h23.648a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16h-23.648a16 16 0 0 1-16-16z m100.16 0v-16a16 16 0 0 1 16-16H650.08a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16H459.472a16 16 0 0 1-16-16zM256 240v541.92h497.392V240H256z m529.392 589.92H224a16 16 0 0 1-16-16V208a16 16 0 0 1 16-16h561.392a16 16 0 0 1 16 16v605.92a16 16 0 0 1-16 16z"
                    p-id="3076"></path>
            </svg>
        </div>
        <div class="back">
            <svg t="1584096388321" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="14679" width="32" height="32">
                <path d="M538.288 198.624l-11.312-11.312a16 16 0 0 0-22.64 0L187.312 504.336a16 16 0 0 0 0 22.64L504.336 844a16 16 0 0 0 22.64 0l11.312-11.312a16 16 0 0 0 0-22.624l-294.4-294.4 294.4-294.4a16 16 0 0 0 0-22.64z"
                    p-id="14680" fill="#ffffff"></path>
            </svg>
        </div>
        <div class="content">
            <h1>{{name}}</h1>
            <transition name="text-fade" mode="out-in">
                <Loading v-if="load" size="large"></Loading>
                <div v-else class="text">
                    <p v-for="(word,index) in text" :key="index">{{word}}</p>
                </div>
            </transition>
        </div>
        <div class="next">
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
                messages: []
            }
        },
        computed: {
            name() {
                return this.bookIndex[this.read].name
            }
        },
        methods: {
            getText() {
                this.text = "";
                this.load = true;
                this.$http.get(this.bookIndex[this.read].link).then(res => {
                    var parser = new DOMParser();
                    var doc = parser.parseFromString(res.data, "text/html");
                    var text = new String(doc.getElementById('content').innerHTML);
                    text = text.replace(/^(<scr).*<\/script>/gi, '');
                    text = text.replace(/<br>/gi, '\n');
                    this.text = text.split('\n');
                    this.load = false;
                })
            }
        },
        mounted() {
            this.getText();
        }
    }
</script>

<style scoped="scoped">
    .novel {
        width: 100%;
        height: 100%;
        min-width: 1000px;
        min-height: 800px;
    }

    .setting,
    .index {
        padding: 0;
        margin: 0;
        width: 33px;
        height: 33px;
        border-radius: 50%;
    }

    .setting {
        position: fixed;
        top: 20px;
        left: 20px;
    }

    .index {
        position: fixed;
        top: 20px;
        left: 60px;
    }

    .index:hover,
    .setting:hover {
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
