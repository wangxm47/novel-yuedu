<template>
    <div class='wrapper'>
        <h1>阅读</h1>
        <h3>读万卷书,行万里路</h3>
        <div class='search'>
            <span class="icon line"></span>
            <input placeholder="搜索书籍" v-model="searchKey" class='input line' type="text" autocomplete="off" @keydown.enter="searchBook()">
        </div>
        <div class='history-wrapper'>
            <h4>最近阅读</h4>
            <div class="history">{{name}}</div>
        </div>
        <div class='setting-wrapper'>
            <h4>基本设定</h4>
            <div class="setting" @click="editBook">
                编辑书籍
                <transition name="button-fade">
                    <button v-if="edit" class="btn btn-primary btn-xs" @click.stop="cancelEdit">取消</button>
                </transition>
                <transition name="button-fade">
                    <button v-if="edit" class="btn btn-danger btn-xs">全部删除</button>
                </transition>
            </div>
            <div class="setting" @click="changeMode">{{mode}}</div>
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
                bookName: this.latestBook,
                searchKey: ""
            }
        },
        computed: {
            name() {
                if (this.bookName == '') {
                    return "尚无最近阅读记录";
                } else {
                    return this.bookName;
                }

            },
            mode() {
                if (this.$store.state.mode == "sun"){
                    return "夜间模式";
                } else{
                    return "日间模式";
                }
            },
            edit(){
                return this.$store.state.edit;
            }
        },
        methods:{
            changeMode(){
                this.$store.commit('changeMode');
            },
            editBook(){
                this.$store.commit('editBook');
            },
            cancelEdit(){
                this.$store.commit('cancelEdit');
            },
            searchBook(){
                if(this.searchKey=="") return;
                var that = this;
                this.$http.get("./source.json").then((response)=>{
                    return response.data.searchUrl;
                }).then((searchUrl)=>{
                    this.$http.get(searchUrl+that.searchKey).then((response)=>{
                        console.log(response.data);
                    })
                });
                
            }
        }
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
    .history,.setting{
        padding: 8px 25px;
        font-weight: 800;
        font-size: 14px;
        cursor: pointer;
        user-select: none;
    }
    .setting button{
        float: right;
        margin-right: 8px;
        outline: none;
    }
    .setting button:active{
        outline: none;
    }
    .button-fade-enter-active, .button-fade-leave-active {
      transition: all .3s;
    }
    .button-fade-enter,.button-fade-leave-to{
        opacity: 0;
        transform: translateX(30px);
    }
    .history:hover,.setting:hover{
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
