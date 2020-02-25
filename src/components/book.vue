<template>
    <div class='book' @contextmenu="clickRightMouse">
        <div class='media'>
            <div class="media-left">
                <img class="media-object bookImage" :src="bookImageSrc" loading = "lazy" draggable="false"/>
            </div>
            <div class="media-body bookBody">
                <h3 class="media-heading title">{{bookName}}</h3>
                <h5 class="media-heading author">作者:{{author}}</h5>
                <h5 class="media-heading author">上次阅读:{{lastreadChapter}}</h5>
                <h5 class="media-heading author">未阅读:{{unreadChapter}}章</h5>
                <div class="intro">冰冷与黑暗并存的宇宙深处，九具庞大的龙尸拉着一口青铜古棺，亘古长存。这是太空探测器在枯寂的宇宙中捕捉到的一幅极其震撼的画面。九龙拉棺，究竟是回到了上古，还是来到了星空的彼岸？一个浩大的仙侠世界，光怪陆离，神秘无尽。热血似火山沸腾，激情若瀚海汹涌，欲望如深渊无止境……登天路，踏歌行，弹指遮天。......</div>
            </div>
        </div>
        <transition name="button-fade">
            <button v-if="edit" class="btn btn-danger btn-xs editButton">删除</button>    
        </transition>
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
            },
        },
        data: function() {
            return {
                unreadChapter: 1000,
                author: "辰东",
                lastreadChapter: "第一百章 满地找牙",
            }
        },
        methods:{
            clickRightMouse(e){
                e.preventDefault();
            }
        },
        computed:{
            edit: function(){
                return this.$store.state.edit;
            }
        },
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
    .editButton:active{
        outline: none;
    }
    .button-fade-enter-active, .button-fade-leave-active {
      transition: all .3s;
    }
    .button-fade-enter,.button-fade-leave-to{
        opacity: 0;
        /* transform: translateY(30px); */
    }
</style>
