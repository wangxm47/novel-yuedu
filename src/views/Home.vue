<template>
    <div class="home">
        <div class='aside wrapper-padding'>
            <Aside />
        </div>
        <div class="books wrapper-padding" @scroll="scrollBook">
            
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import Book from '@/components/Book.vue'
    import Aside from '@/components/aside.vue'
    export default {
        name: 'home',
        components: {
            // Book,
            Aside
        },
        methods: {
            scrollBook(event) {
                var scrollHeight = event.target.scrollHeight;
                var scrollTop = event.target.scrollTop;
                var clientHeight = event.target.clientHeight;
                if(scrollHeight-scrollTop-clientHeight < 1){
                    console.log("滚到底了");
                }
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
