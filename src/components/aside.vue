<template>
    <div class='wrapper'>
        <h1>阅读</h1>
        <h3>读万卷书,行万里路</h3>
        <div class='search'>
            <span class="icon line"></span>
            <input placeholder="搜索书籍" class='input line' type="text" autocomplete="off">
        </div>
        <div class='history-wrapper'>
            <h4>最近阅读</h4>
            <div class="history">{{name}}</div>
        </div>
        <div class='setting-wrapper'>
            <h4>基本设定</h4>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Aside',
        props: {
            latestBook: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                bookName: this.latestBook
            }
        },
        computed: {
            name() {
                if (this.bookName == '') {
                    return "尚无最近阅读记录";
                } else {
                    return this.bookName;
                }

            }
        },
    }
</script>

<style scoped="scoped">
    .wrapper {
        height: 100%;
    }

    h1,
    h4 {
        font-weight: 700;
        font-family: Baskerville, "Times New Roman", "Liberation Serif", STFangsong, FangSong, FangSong_GB2312, "CWTEX\-F", serif;
    }

    h3 {
        font-family: Baskerville, Georgia, "Liberation Serif", "Kaiti SC", STKaiti, "AR PL UKai CN", "AR PL UKai HK", "AR PL UKai TW", "AR PL UKai TW MBE", "AR PL KaitiM GB", KaiTi, KaiTi_GB2312, DFKai-SB, "TW\-Kai", serif;
        color: #7b8086;
    }

    h4 {
        color: #7b8086;
    }

    .search {
        margin-top: 35px;
        position: relative;
        width: 100%;
        padding: 0 20px;
    }
    .history-wrapper{
        margin-top: 40px;
        width: 100%;
        padding: 15px 15px;
        text-align: left;
        border-top: 1px #e3e3e3 solid;
        border-bottom: 1px #e3e3e3 solid;
    }
    .setting-wrapper{
        width: 100%;
        text-align: left;
        padding: 15px 15px;
    }
    .history{
        padding: 8px 40px;
        font-weight: 800;
        font-size: 14px;
    }
    .history:hover{
        background-color: #e1e0e0;
    }

    .input {
        border-radius: 50px;
        border-color: #e3e3e3;
        border-style: solid;
        border-width: 1px;
        padding-left: 30px;
        padding-right: 15px;
        outline: none;
        width: 100%
    }

    .line {
        line-height: 25px;
        height: 25px;
    }

    .icon {
        position: absolute;
        left: 25px;
        top: 0px;
        text-align: center;
    }

    .icon::after {
        content: '\1F50D';
    }
</style>
