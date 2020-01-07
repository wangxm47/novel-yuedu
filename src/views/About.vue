<template>
    <div class="about">
        <Book bookName="剑来" bookImageSrc="https://img.zhaishuyuan.com/bookpic/s17278.jpg" bookResource="https://www.zhaishuyuan.com/book/17278"
            readChapter="100"></Book>
    </div>
</template>
<script>
    import Book from '../components/book.vue'
    export default {
        name: 'about',
        components: {
            Book
        }
    }
</script>
