<template>
    <div class="home">
        <Book bookName="遮天" bookImageSrc="https://img.zhaishuyuan.com/bookpic/s204.jpg" bookResource="https://www.zhaishuyuan.com/book/204"
            readChapter="100" />
        <Book bookName="遮天" bookImageSrc="https://img.zhaishuyuan.com/bookpic/s204.jpg" bookResource="https://www.zhaishuyuan.com/book/204"
            readChapter="100" />
    </div>
</template>

<script>
    // @ is an alias to /src
    import Book from '@/components/Book.vue'

    export default {
        name: 'home',
        components: {
            Book
        }
    }
</script>
