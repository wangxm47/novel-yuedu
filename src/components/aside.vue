<template>
    <div class='wrapper'>
        <h1>阅读</h1>
        <h3>读万卷书,行万里路</h3>
        <div class='search' v-clickoutside="closeHandle">
            <span class="icon line"></span>
            <input placeholder="搜索书籍" v-model="searchKey" class='input line' type="text" autocomplete="off"
                @keydown.enter="searchBook()" @focus="onSearch=true">
            <div class="search-history" v-if="onSearch&&searchHistory.length!=0">
                <div class="name">搜索历史</div>
                <button class="searchDelBtn" @click="deleteAllSearchHistory">全部删除</button>
                <div class="record" v-for="(record,index) in searchHistory" v-bind:key="index">
                    <div class="record-svg">
                        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27">
                            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                        </svg>
                    </div>
                    <span>{{record}}</span>
                    <div class="record-cancle-svg" @click="deleteSearchHistory(index)">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24"
                            style=" fill:#000000;">
                            <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
                        </svg>
                    </div>
                </div>
            </div>
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
                searchKey: "",
                searchHistory: this.$db.get("searchHistory").value(),
                onSearch: false
            }
        },
        watch: {
            searchHistory: function() {
                this.$db.set("searchHistory", this.searchHistory).write();
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
                if (this.$store.state.mode == "sun") {
                    return "夜间模式";
                } else {
                    return "日间模式";
                }
            },
            edit() {
                return this.$store.state.edit;
            }
        },
        methods: {
            closeHandle() {
                this.onSearch = false;
            },
            changeMode() {
                this.$store.commit('changeMode');
            },
            editBook() {
                this.$store.commit('editBook');
            },
            cancelEdit() {
                this.$store.commit('cancelEdit');
            },
            searchBook() {
                if (this.searchKey == "") return;
                this.searchHistory.push(this.searchKey);
                this.searchKey = "";
            },
            deleteAllSearchHistory() {
                this.searchHistory = [];
            },
            deleteSearchHistory(index) {
                this.searchHistory.splice(index, 1);
            }
        }
    }
</script>

<style scoped="scoped">
    .wrapper {
        height: 100%;
        user-select: none;
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

    .search-history {
        background-color: #eeeeee;
        border-radius: 10px;
        width: 70%;
        margin-top: 5px;
        position: absolute;
        left: 15%;
        overflow: hidden;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 1);
    }

    .search-history .name {
        width: 50%;
        font-weight: 700;
        text-align: center;
        display: inline-block;
    }

    .search-history .searchDelBtn {
        border: none;
        padding: 0;
        width: 50%;
        outline: none;
        font-weight: 700;
        text-align: center;
        display: inline-block;
        background-color: #eeeeee;
    }

    .search-history .searchDelBtn:active {
        background-color: #c1c1c1;
    }

    .record {
        text-align: left;
        padding-left: 18px;
        margin: 10px 0;
        font-weight: 600;
        display: flex;
    }

    .record span {
        flex: 1;
    }

    .record:hover {
        background-color: #c1c1c1;
    }

    .record-svg {
        height: 20px;
        width: 20px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 6px;
    }

    .record-cancle-svg {
        height: 20px;
        width: 20px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
    }

    .history-wrapper {
        margin-top: 40px;
        width: 100%;
        padding: 15px 15px;
        text-align: left;
        border-top: 1px #e3e3e3 solid;
        border-bottom: 1px #e3e3e3 solid;
    }

    .setting-wrapper {
        width: 100%;
        text-align: left;
        padding: 15px 15px;
    }

    .history,
    .setting {
        padding: 8px 25px;
        font-weight: 800;
        font-size: 14px;
        cursor: pointer;
        user-select: none;
    }

    .setting button {
        float: right;
        margin-right: 8px;
        outline: none;
    }

    .setting button:active {
        outline: none;
    }

    .button-fade-enter-active,
    .button-fade-leave-active {
        transition: all .3s;
    }

    .button-fade-enter,
    .button-fade-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    .history:hover,
    .setting:hover {
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
