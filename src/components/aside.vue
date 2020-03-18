<template>
    <div class='wrapper'>
        <h1>阅读</h1>
        <h3>读万卷书,行万里路</h3>
        <div class='search'>
            <span class="icon line"></span>
            <input placeholder="搜索书籍" v-model="searchKey" class='input line' type="text" autocomplete="off"
                @keydown.enter="searchBook()" @focus="onSearchHandle">
        </div>
        <transition name="wrapper-fade" mode="out-in">
            <div v-if="onSearch" key="search-wrapper">
                <div class='return-bookstore-wrapper'>
                    <h4>返回入口</h4>
                    <div class="return-bookstore" @click="returnBookStore">返回书架</div>
                </div>
                <div class="search-history-wrapper">
                    <h4>搜索历史</h4>
                    <h4 class="searchDelBtn" v-if="searchHistory.length!=0" @click="deleteAllSearchHistory">全部删除</h4>
                    <transition name="search-history-fade" mode="out-in">
                        <div v-if="searchHistory.length==0" class="search-history" key="nohistory">尚无搜索历史</div>
                        <transition-group v-else class="record-wrapper" name="record-list" tag="div" key="hashistory">
                            <div class="record" @click="searchRecord(record)" v-for="(record,index) in searchHistory"
                                v-bind:key="record">
                                <div class="record-svg">
                                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27">
                                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                    </svg>
                                </div>
                                <span>{{record}}</span>
                                <div class="record-cancle-svg" @click="deleteSearchHistory(index)">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                                        viewBox="0 0 24 24" style=" fill:#000000;">
                                        <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
                                    </svg>
                                </div>
                            </div>
                        </transition-group>
                    </transition>
                </div>
            </div>
            <div v-else key="history-setting-wrapper">
                <div class='history-wrapper'>
                    <h4>最近阅读</h4>
                    <div :class="{'no-history':!noHistory,history:noHistory}" @click="goToLatestBook">{{name}}</div>
                </div>
                <div class='setting-wrapper'>
                    <h4>基本设定</h4>
                    <div class="setting" @click="editBook">
                        编辑书籍
                        <transition name="button-fade">
                            <button v-if="edit" class="btn btn-primary btn-xs" @click.stop="cancelEdit">取消</button>
                        </transition>
                        <transition name="button-fade">
                            <button v-if="edit" class="btn btn-danger btn-xs" @click.stop="deleteAllBook">全部删除</button>
                        </transition>
                    </div>
                    <div class="setting" @click="changeMode">{{mode}}</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'Aside',
        props: {
            latestBook: {
                default: null,
                required: true
            },
        },
        data() {
            return {
                searchKey: "",
                searchHistory: [],
                onSearch: false
            }
        },
        computed: {
            name() {
                if (this.latestBook == null) {
                    return "尚无最近阅读记录";
                } else {
                    return this.latestBook.name;
                }

            },
            noHistory() {
                if (this.bookName == '') {
                    return false;
                }
                return true;
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
            goToLatestBook(){
              if(this.latestBook==null){
                  return;
              }else{
                  this.$router.push({
                      name: 'novel',
                      params: {
                          book: this.latestBook
                      }
                  });
              }  
            },
            onSearchHandle() {
                this.onSearch = true;
                this.$emit("beforesearch");
            },
            returnBookStore() {
                this.onSearch = false;
                this.searchKey = "";
                this.$emit("noSearch");
            },
            changeMode() {
                this.$store.commit('changeMode');
                var that = this;
                var dbRequest1 = window.indexedDB.open("setting");
                dbRequest1.onsuccess = function(event) {
                    var db = event.target.result;
                    var store = db.transaction("mySetting", 'readwrite').objectStore("mySetting");
                    store.openCursor().onsuccess = function(event) {
                        var cursor = event.target.result;
                        if (cursor) {
                            var temp = cursor.value;
                            temp.mode = that.$store.state.mode;
                            if(temp.mode == "sun" && temp.color=="black"){
                                temp.color = temp.suncolor;
                            } else if(temp.mode == "night" && temp.color!="black"){
                                temp.suncolor = temp.color;
                                temp.color = "black";
                            }
                            cursor.update(temp);
                            cursor.continue();
                        }
                    }
                }
            },
            editBook() {
                this.$store.commit('editBook');
            },
            cancelEdit() {
                this.$store.commit('cancelEdit');
            },
            deleteAllBook() {
                this.$emit("deleteAllBook");
            },
            searchBook() {
                if (this.searchKey == "") return;
                this.$emit("searching", this.searchKey);
                if (!this.searchHistory.includes(this.searchKey)) {
                    this.searchHistory.push(this.searchKey);
                    var name = this.searchKey;
                    var dbRequest = window.indexedDB.open("data");
                    dbRequest.onsuccess = function(event) {
                        var db = event.target.result;
                        var store = db.transaction("searchHistory", 'readwrite').objectStore("searchHistory");
                        store.add(name);
                    }
                }
                this.searchKey = "";
            },
            deleteAllSearchHistory() {
                this.searchHistory = [];
                var dbRequest = window.indexedDB.open("data");
                dbRequest.onsuccess = function(event) {
                    var db = event.target.result;
                    var store = db.transaction("searchHistory", 'readwrite').objectStore("searchHistory");
                    store.clear();
                }
            },
            deleteSearchHistory(index) {
                event.stopPropagation();
                var name = this.searchHistory[index];
                this.searchHistory.splice(index, 1);
                var dbRequest = window.indexedDB.open("data");
                dbRequest.onsuccess = function(event) {
                    var db = event.target.result;
                    var store = db.transaction("searchHistory", 'readwrite').objectStore("searchHistory");
                    store.openCursor().onsuccess = function(event) {
                        var cursor = event.target.result;
                        if (cursor) {
                            if (cursor.value == name) {
                                cursor.delete();
                                return;
                            }
                            cursor.continue();
                        }
                    }
                }
            },
            searchRecord(record) {
                this.searchKey = record;
                this.$emit("searching", this.searchKey);
            }
        },
        created: function() {
            var dbRequest = window.indexedDB.open("data");
            var that = this;
            dbRequest.onsuccess = function(event) {
                var db = event.target.result;
                var store = db.transaction("searchHistory", 'readwrite').objectStore("searchHistory");
                store.openCursor().onsuccess = function(event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        that.searchHistory.push(cursor.value);
                        cursor.continue();
                    }
                }
            }
            dbRequest.onupgradeneeded = function(event) {
                var db = event.target.result;
                var store;
                if (!db.objectStoreNames.contains("searchHistory")) {
                    store = db.createObjectStore("searchHistory", {
                        autoIncrement: true
                    });
                    store.createIndex("name", "name", {
                        unique: true
                    });
                }
            }
        },
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
    
    h1{
        margin-top: 0;
        padding-top: 40px;
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

    .search-history-wrapper h4 {
        display: inline-block;
    }

    .searchDelBtn {
        display: inline-block;
        margin-left: 40%;
    }

    .record {
        text-align: left;
        padding-left: 0;
        margin: 10px 0;
        font-weight: 600;
        display: flex;
        cursor: pointer;
        user-select: none;
        transition: all .5s;
    }

    .record-wrapper {
        display: block;
        overflow: auto;
        height: 400px;
    }

    .record-wrapper::-webkit-scrollbar {
        display: none;
    }

    .record-list-enter,
    .record-list-leave-to {
        opacity: 0;
        transform: translateX(300px);
    }

    .record-list-leave-active {
        position: absolute;
        /* 
        用splice删除数组的元素，由于删除的元素经理了一个过渡，始终占据文档流的这个位置，
        因此下一个元素要等待其过渡消失后再移动过来，造成一个生硬的效果。要达到平滑过渡，
        就要在删除元素leave-active阶段用position:absolute将其移出文档流，后面的元素才
        能同时平滑过渡过来
        */
    }

    .record span {
        flex: 1;
        padding-left: 10px;
    }

    .record:hover {
        background-color: #e1e0e0;
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
        margin-right: 3px;
    }

    .history-wrapper,
    .return-bookstore-wrapper {
        margin-top: 40px;
        width: 100%;
        padding: 15px 15px;
        text-align: left;
        border-top: 1px #e3e3e3 solid;
    }

    .setting-wrapper,
    .search-history-wrapper {
        width: 100%;
        text-align: left;
        padding: 15px 15px;
        border-top: 1px #e3e3e3 solid;
    }

    .wrapper-fade-enter-active,
    .wrapper-fade-leave-active {
        transition: all .2s;
    }

    .wrapper-fade-enter,
    .wrapper-fade-leave-to {
        opacity: 0;
        /* transform: translateX(30px); */
    }

    .history,
    .no-history,
    .search-history,
    .setting,
    .return-bookstore {
        padding: 8px 25px;
        font-weight: 800;
        font-size: 14px;
        cursor: pointer;
        user-select: none;
    }

    .history:hover,
    .setting:hover,
    .return-bookstore:hover {
        background-color: #e1e0e0;
    }

    .search-history-fade-enter-active,
    .search-history-fade-leave-active {
        transition: all .4s;
    }

    .search-history-fade-enter,
    .search-history-fade-leave-to {
        opacity: 0;
        transform: translateX(-300px);
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
        /* transform: translateX(30px); */
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
