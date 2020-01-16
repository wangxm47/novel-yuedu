<template>
    <div class='wrapper'>
        <h1>阅读</h1>
        <h3>读万卷书,行万里路</h3>
        <div class = 'search'>
            <span class="icon line"></span>
            <input placeholder="搜索书籍" class ='input line' type="text" autocomplete="off">
        </div>
        <div class = 'history'>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Aside',
    }
</script>

<style scoped="scoped">
    .wrapper{
        height: 100%;
    }
    h1 {
        font-weight: 700;
        font-family: Baskerville, "Times New Roman", "Liberation Serif", STFangsong, FangSong, FangSong_GB2312, "CWTEX\-F", serif;
    }

    h3 {
        font-family: Baskerville, Georgia, "Liberation Serif", "Kaiti SC", STKaiti, "AR PL UKai CN", "AR PL UKai HK", "AR PL UKai TW", "AR PL UKai TW MBE", "AR PL KaitiM GB", KaiTi, KaiTi_GB2312, DFKai-SB, "TW\-Kai", serif;
        color: #7b8086;;
    }
    .search{
        margin-top: 35px;
        position: relative;
        width: 100%;
        padding: 0 20px;
    }
    .input{
        border-radius: 50px;
        border-color: #e3e3e3;
        border-style: solid;
        border-width: 1px;
        padding-left: 30px;
        padding-right: 15px;
        outline: none;
        width: 100%
    }
    .line{
        line-height: 25px;
        height: 25px;
    }
    .icon{
        position: absolute;
        left: 25px;
        top: 0px;
        text-align: center;
    }
    .icon::after{
        content: '\1F50D';
    }
</style>
