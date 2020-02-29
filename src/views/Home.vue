<template>
    <div class="home">
        <div class='aside wrapper-padding'>
            <Aside @searching="onSearching" />
        </div>
        <transition name="boos-fade" mode="out-in">
            <div class="books wrapper-padding" @scroll="scrollBook" v-if="search" key="books">
                <Book v-for="(book,index) in books" :bookName="book.name" :bookImageSrc="book.imgsrc" :bookResource="book.booksrc"
                    :readChapter="chap" :key="index" />
            </div>
            <div class="books wrapper-padding" @scroll="scrollBook" v-else key = "searchbooks">
                <Loading size="large"></Loading>
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
                search: true,
                books: [{
                        name: "遮天",
                        imgsrc: "https://img.zhaishuyuan.com/bookpic/s204.jpg",
                        booksrc: "https://www.zhaishuyuan.com/book/204",
                        chap: "100"
                    },
                    {
                        name: "遮天",
                        imgsrc: "https://img.zhaishuyuan.com/bookpic/s204.jpg",
                        booksrc: "https://www.zhaishuyuan.com/book/204",
                        chap: "100"
                    },
                    {
                        name: "遮天",
                        imgsrc: "https://img.zhaishuyuan.com/bookpic/s204.jpg",
                        booksrc: "https://www.zhaishuyuan.com/book/204",
                        chap: "100"
                    },
                    {
                        name: "遮天",
                        imgsrc: "https://img.zhaishuyuan.com/bookpic/s204.jpg",
                        booksrc: "https://www.zhaishuyuan.com/book/204",
                        chap: "100"
                    },
                    {
                        name: "遮天",
                        imgsrc: "https://img.zhaishuyuan.com/bookpic/s204.jpg",
                        booksrc: "https://www.zhaishuyuan.com/book/204",
                        chap: "100"
                    }
                ]
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
            onSearching(){
                this.search = false;
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

    .books {
        flex: 1;
        display: block;
        overflow: auto;
    }

    .books::-webkit-scrollbar {
        display: none;
    }
</style>
