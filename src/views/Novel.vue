<template>
    <div>
        <router-link to="/">回到书架</router-link>
        <h1>{{book.name}}</h1>
        <h1>{{book.booksrc}}</h1>
    </div>
</template>

<script>
    export default{
        name: "Novel",
        props:['book'],
        data(){
            return {
                bookIndex: []
            }
        },
        created() {
            this.$http.get(this.book.booksrc).then(res => {
                var parser = new DOMParser();
                var doc = parser.parseFromString(res.data, "text/html");
                var info = doc.getElementsByClassName("info")[0];
                var list_href = info.getElementsByClassName('btn-info')[0].href;
                this.$http.get(list_href).then(listRes => {
                    var listHtml = parser.parseFromString(listRes.data,"text/html");
                    var list = listHtml.getElementsByClassName('col3');
                    for(let i = 0; i < list.length; i++){
                        if(list[i].innerText.slice(0,3)=="第一章"){
                            this.lastreadChapter = list[i].innerText;
                        }
                    }
                })
            })
        }
    }
</script>

<style>
</style>
