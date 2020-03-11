<template>
    <div class="message">
        <div :class="myType"><span></span>{{myMessage}}</div>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props: {
            message: {
                type: String,
                default: ""
            },
            delay: {
                type: Number,
                default: 1.5
            },
            type: {
                type: String,
                default: "primary"
            }
        },
        computed: {
            myType() {
                if (["primary", "success", "error"].indexOf(this.type) == -1) {
                    return "primary";
                } else {
                    return this.type;
                }
            },
            myMessage() {
                if (this.message == "") {
                    if (this.type == "success") {
                        return "成功";
                    } else if (this.type == "error") {
                        return "抛出异常";
                    } else {
                        return "有一个新消息"
                    }
                } else {
                    return this.message;
                }
            },
        },
        methods:{
            close(){
                this.$emit("close");
            }
        },
        created() {
            var that = this;
            setTimeout(function(){
                that.close();
            },this.delay*1000)
        }
    }
</script>

<style scoped="scoped">
    .message {
        margin-top: 16px;
        font-size: 16px;
        z-index: 1000;
        transition: all, 0.3s;
        width: 100%;
    }

    .message div {
        border-radius: 4px;
        padding: 8px 16px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    }

    .primary {
        color: #31708f;
        background-color: #d9edf7;
        border-color: #bce8f1;
    }

    .primary span::before {
        content: "ℹ";
        margin-right: 5px;
    }

    .success {
        color: #3c763d;
        background-color: #dff0d8;
        border-color: #d6e9c6;
    }

    .success span::before {
        content: "✔";
        margin-right: 5px;
    }

    .error {
        color: #a94442;
        background-color: #f2dede;
        border-color: #ebccd1;
    }

    .error span::before {
        content: "❌";
        margin-right: 5px;
    }
</style>
