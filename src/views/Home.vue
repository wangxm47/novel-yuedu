<template>
    <div class="home">
        <div class='aside wrapper-padding'>
            <Aside @searching="onSearching" @noSearch="noSearchHandle" @beforesearch="beforesearchHandle" />
        </div>
        <transition name="books-fade" mode="out-in">
            <div class="books wrapper-padding" v-if="searchState=='nosearch'" key="books">
                <transition-group name="book-list" tag="div">
                    <Book v-for="(book) in books" :bookName="book.name" :bookResource="book.booksrc" :read="book.read"
                        :key="book.id" :search="false" />
                </transition-group>
            </div>
            <div class="books wrapper-padding" v-else-if="searchState=='searchend'" key="result">
                <transition-group name="book-list" tag="div">
                    <Book v-for="(book) in searchResult" :bookName="book.name" :bookResource="book.booksrc" :read="book.read"
                        :key="book.id" :search="false" />
                </transition-group>
            </div>
            <div class="loading wrapper-padding" v-else-if="searchState=='searching'" key="loading">
                <Loading size="large"></Loading>
            </div>
            <div v-else-if="searchState=='searchfail'" class="wait-loading wrapper-padding" key="fail">
                <div class="wait-loading-text">
                    搜索失败
                </div>
            </div>
            <div v-else-if="searchState=='searchnull'" class="wait-loading wrapper-padding" key="null">
                <div class="wait-loading-text">
                    搜索不到相关书籍
                </div>
            </div>
            <div v-else class="wait-loading wrapper-padding" key="wait">
                <div class="wait-loading-text">
                    等待搜索
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Book from '@/components/Book.vue'
    import Aside from '@/components/aside.vue'
    import Loading from '@/components/loading.vue'
    export default {
        name: 'home',
        components: {
            Book,
            Aside,
            Loading
        },
        data() {
            return {
                searchState: "nosearch",
                books: [],
                searchResult: []
            }
        },
        methods: {
            scrollBook(event) {
                var scrollHeight = event.target.scrollHeight;
                var scrollTop = event.target.scrollTop;
                var clientHeight = event.target.clientHeight;
                if (scrollHeight - scrollTop - clientHeight < 1) {
                    console.log("滚到底了");
                }
            },
            beforesearchHandle() {
                if (this.searchState == "nosearch") {
                    this.searchState = "beforesearch";
                }
            },
            onSearching(searchKey) {
                this.searchState = "searching";
                this.searchResult = [];
                this.$http.get("https://www.ymxxs.com/search.htm", {
                    params: {
                        keyword: searchKey
                    }
                }).then((res) => {
                    var parser = new DOMParser();
                    var doc = parser.parseFromString(res.data, "text/html");
                    var page = Array.from(doc.getElementsByClassName('number')).slice(1, -1);
                    var result = Array.from(doc.getElementsByClassName('n2')).slice(1);
                    if (result.length == 0) return null;
                    var get_arr = [];
                    for (var i = 0; i < page.length; i++) {
                        get_arr[i] = this.$http({
                            method: "get",
                            url: "https://www.ymxxs.com/search.htm",
                            params: {
                                keyword: searchKey,
                                pn: page[i].innerText
                            }
                        });
                    }
                    this.$http.all(get_arr).then(arr => {
                        arr.forEach(e => {
                            result = result.concat(Array.from(parser.parseFromString(e.data,
                                "text/html").getElementsByClassName('n2')).slice(1));
                        })
                        result = Array.from(new Set(result));
                        result.forEach((e, index) => {
                            var obj = {};
                            obj["name"] = e.innerText;
                            obj["booksrc"] = e.firstElementChild.href;
                            obj["read"] = 0;
                            obj["id"] = index;
                            if(obj["name"] == searchKey){
                                this.searchResult.unshift(obj);
                            } else{
                                this.searchResult.push(obj);
                            }
                        })
                    })
                    return result;
                }).then(result => {
                    var that = this;
                    if (result == null) {
                        setTimeout(function() {
                            that.searchState = "searchnull";
                        }, 1500);
                    } else {
                        setTimeout(function() {
                            that.searchState = "searchend";
                        }, 1500);
                    }
                }).catch(() => {
                    var that = this;
                    setTimeout(function() {
                        that.searchState = "searchfail";
                    }, 1500);
                })
            },
            noSearchHandle() {
                this.searchState = "nosearch";
                this.searchResult = [];
            }
        }
    }
</script>
<style scoped="scoped">
    .home {
        display: flex;
        min-width: 800px;
        min-height: 500px;
        height: 100%;
    }

    .wrapper-padding {
        padding: 25px 20px;
    }

    .aside {
        width: 320px;
        min-width: 320px;
        background-color: #f7f7f7;
        overflow: hidden;
    }

    .books,
    .loading,
    .wait-loading {
        flex: 1;
        display: block;
        overflow: auto;
        outline: none;
    }

    .books {
        transition: all .5s;
    }

    .book-list-enter,
    .book-list-leave-to {
        opacity: 0;
        transform: translateY(100px);
    }

    .book-list-leave-active {
        position: absolute;
        /* 
        用splice删除数组的元素，由于删除的元素经理了一个过渡，始终占据文档流的这个位置，
        因此下一个元素要等待其过渡消失后再移动过来，造成一个生硬的效果。要达到平滑过渡，
        就要在删除元素leave-active阶段用position:absolute将其移出文档流，后面的元素才
        能同时平滑过渡过来
        */
    }

    .books::-webkit-scrollbar {
        display: none;
    }

    .books-fade-enter-active,
    .books-fade-leave-active {
        transition: all .2s;
    }

    .books-fade-enter,
    .books-fade-leave-to {
        opacity: 0;
        /* transform: translateX(30px); */
    }

    .dot-large {
        width: 6px;
        height: 6px;
    }

    .wait-loading-text {
        font-size: 30px;
        font-weight: 700;
        color: #2d8cf0;
        margin-top: 50px;
        user-select: none;
    }

    .dot {
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background-color: #2d8cf0;
        display: inline-block;
        margin-right: 5px;
        animation: dotjump 1s infinite ease-in-out;
    }


    .dot:nth-child(1) {
        animation-delay: -0.5s;
    }

    .dot:nth-child(2) {
        animation-delay: -0.4s;
    }

    .dot:nth-child(3) {
        animation-delay: -0.3s;
    }

    @keyframes dotjump {

        0%,
        50%,
        100% {
            transform: translateY(0);
        }

        25% {
            transform: translateY(-6px);
        }
    }
</style>
