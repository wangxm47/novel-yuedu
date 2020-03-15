<template>
    <div class='book' @contextmenu="clickRightMouse">
        <div class='media'>
            <div class="media-left">
                <img class="media-object bookImage" :src="bookImageSrc" loading="lazy" draggable="false" />
            </div>
            <div class="media-body bookBody">
                <h3 class="media-heading title">{{bookName}}</h3>
                <h5 class="media-heading author">作者:{{author}}</h5>
                <h5 class="media-heading author" v-if="!searchState">上次阅读:{{lastreadChapter}}</h5>
                <h5 class="media-heading author" v-if="!searchState">未阅读:{{unreadChapter}}章</h5>
                <h5 class="media-heading author">最新:{{latest}}</h5>
                <div class="intro">{{introduction}}</div>
            </div>
        </div>
        <transition name="button-fade">
            <button v-if="edit" class="btn btn-danger btn-xs editButton" @click.stop="deleteBook">删除</button>
        </transition>
        <transition name="button-fade">
            <button v-if="add&&searchState" class="btn btn-success btn-xs editButton" @click.stop="addBook">添加到书架</button>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'Book',
        props: {
            bookId: {
                type: Number,
                required: true
            },
            bookName: {
                type: String,
                required: true
            },
            bookSrc: {
                type: String,
                required: true
            },
            read: {
                type: Number,
                required: true
            },
            search: {
                type: Boolean,
                required: true
            }
        },
        data: function() {
            return {
                unreadChapter: 0,
                author: "",
                lastreadChapter: "",
                bookImageSrc: "",
                latest: "",
                introduction: "",
                list: [],
                searchState: this.search,
                add: true
            }
        },
        methods: {
            addBook() {
                this.add = false;
                this.$emit("addToStore");
                this.$emit("addBookIndex",this.list,this.bookSrc);
            },
            deleteBook() {
                this.$emit("deleteFromStore");
            },
            clickRightMouse(e) {
                e.preventDefault();
            },
            parseBook(res) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(res.data, "text/html");
                var info = doc.getElementsByClassName("info")[0];
                var cover = info.getElementsByClassName("cover")[0];
                this.bookImageSrc = cover.getElementsByTagName("img")[0].src;
                this.author = info.getElementsByClassName('detail')[0].getElementsByTagName('i')[0].innerText;
                this.latest = info.getElementsByClassName('detail')[2].getElementsByTagName('i')[0].innerText;
                var desc = info.getElementsByClassName('desc')[0].innerText;
                this.introduction = desc.slice(desc.indexOf('介') + 2).trim();
                if (this.introduction.length == 0) this.introduction = "尚无简介";

                var list_href = info.getElementsByClassName('btn-info')[0].href;
                if(list_href[4]!="s"){
                    list_href = list_href.replace("app","https");
                }
                //console.log(list_href);
                this.$http.get(list_href).then(listRes => {
                    var listHtml = parser.parseFromString(listRes.data, "text/html");
                    var list =Array.from(listHtml.getElementsByClassName('col3'));
                    for (let i = 0; i < list.length; i++) {
                        if (list[i].innerText.slice(0, 3) == "第一章") {
                            list = list.slice(i);
                            break;
                        }
                    }
                    this.unreadChapter = list.length - this.read;
                    this.lastreadChapter = list[this.read].innerText;
                    list.forEach(e => {
                        var obj = {};
                        obj['name'] = e.innerText;
                        obj['link'] = e.firstElementChild.href;
                        this.list.push(obj);
                    })
                })
            }
        },
        computed: {
            edit: function() {
                if (this.search) return false;
                return this.$store.state.edit;
            }
        },
        beforeMount() {
            var src = this.bookSrc;
            if(src[4]!="s"){
                //src = src.replace("http://www.ymxxs.com","");
                src = src.replace("app","https");
            }
            //console.log(src);
            this.$http.get(src).then(res => {
                this.parseBook(res)
            }).catch(() => {
                var that = this;
                setTimeout(function() {
                    that.$http.get(that.src).then(res => {
                        that.parseBook(res)
                    })
                }, 2000)
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .book {
        padding: 20px;
        position: relative;
        user-select: none;
    }

    .book:hover {
        background-color: #d4dde6;
        box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .bookBody {
        text-align: left;
    }

    .intro {
        color: #969ba3;
        font-weight: 500;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        text-align: left;
    }

    .bookImage {
        width: 84px;
        height: 112px;
    }

    .title {
        font-weight: 700;
    }

    .author {
        color: #7b8086;
        font-weight: 700;
        display: inline-block;
        margin-right: 10px;
    }

    .editButton {
        position: absolute;
        top: 20px;
        right: 20px;
        font-weight: bold;
        outline: none;
    }

    .editButton:active {
        outline: none;
    }

    .button-fade-enter-active,
    .button-fade-leave-active {
        transition: all .3s;
    }

    .button-fade-enter,
    .button-fade-leave-to {
        opacity: 0;
        /* transform: translateY(30px); */
    }
</style>
