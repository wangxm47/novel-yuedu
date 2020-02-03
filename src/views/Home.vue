<template>
    <div class="home">
        <div class = 'aside wrapper-padding'>
            <Aside />
        </div>
        <div class="books wrapper-padding">
            <Book bookName="遮天" bookImageSrc="https://img.zhaishuyuan.com/bookpic/s204.jpg" bookResource="https://www.zhaishuyuan.com/book/204"
                readChapter="100" />
            <Book bookName="遮天" bookImageSrc="https://img.zhaishuyuan.com/bookpic/s204.jpg" bookResource="https://www.zhaishuyuan.com/book/204"
                readChapter="100" />
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Book from '@/components/Book.vue'
    import Aside from '@/components/aside.vue'
    export default {
        name: 'home',
        components: {
            Book,
            Aside
        }
    }
</script>
<style scoped="scoped">
    .home{
        display: flex;
        min-width: 800px;
        min-height: 500px;
    }
    .wrapper-padding{
        padding: 25px 20px;
    }
    .aside{
        min-width: 320px;
        background-color: #f7f7f7;
        height: 100vh;
        overflow: hidden;
    }
    .books{
        flex: 1;
    }
</style>