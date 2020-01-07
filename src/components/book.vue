<template>
    <div>
        <div class="bookImage">
            <img class="image" :src="bookImageSrc" />
            <span class="chapterNum">{{unreadChapter}}</span>
        </div>
        <div id="name">{{bookName}}</div>
    </div>
</template>

<script>
    export default {
        name: 'Book',
        props: {
            bookName: {
                type: String,
                required: true
            },
            bookImageSrc: {
                type: String,
                required: true
            },
            bookResource: {
                type: String,
                required: true
            },
            readChapter: {
                type: String,
                required: true
            }
        },
        data: function() {
            return {
                unreadChapter: 100
            }
        },
        mounted: function() {
            console.log("mounted")
        }
    }
</script>

<style scoped="scoped">
    .image {
        width: 100px;
        height: 120px;
        display: block;
        padding: 4px;
        margin-bottom: 5px;
        line-height: 1.42857143;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        -webkit-transition: border .2s ease-in-out;
        -o-transition: border .2s ease-in-out;
        transition: border .2s ease-in-out;
    }

    .chapterNum {
        font-family: Monospaced Number;
        line-height: 1;
        vertical-align: middle;
        position: absolute;
        -webkit-transform: translateX(50%);
        transform: translateX(50%);
        top: -10px;
        right: 0;
        height: 18px;
        border-radius: 10px;
        min-width: 10px;
        background: #ed4014;
        border: 1px solid transparent;
        color: #fff;
        line-height: 18px;
        text-align: center;
        padding: 0 3px;
        font-size: 12px;
        white-space: nowrap;
        -webkit-transform-origin: -10% center;
        transform-origin: -10% center;
        z-index: 10;
        box-shadow: 0 0 0 1px
    }

    .bookImage {
        position: relative;
        display: inline-block;
    }

    #name {
        font-weight: 700;
    }
</style>
