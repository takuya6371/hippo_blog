<template>
    <div class="container">
        <div style="height:117px;"></div>
        <div class="starter-template">
            <p class="content_title">記事リスト</p>
            <div class="card-deck">    
                <div style="width: 215px; border: 1px solid rgba(0,0,0,.125);margin: 8px;" class="" v-for="post in contents" :key="post.title">
                <nuxt-link class="header_list" v-bind:to="post.permalink">
                    <div class="card-body">
                        <img style="height: 100px;" class="card-img-top" :src="`${post.thumbnail}`">
                        <h5 class="card-title" style="font-size: 30px;">{{post.title}}</h5>
                        <div class="title_body">
                            <nuxtdown-body max="３" class="body" :body="post.body"/>
                        </div>
                    </div>
                </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            res: '',
            contents: [],
            //category: '',
        }
    },

    computed: {
        category() {
            //ローカルでstoreのstateデータを代入
            this.$store.commit('setTopFlg',false)
            this.getList(this.$store.state.blog_category1)
            return this.$store.state.blog_category1
        },
    },
    watch: {
        category(val) {
            console.log("category changed")
            this.getList(this.$store.state.blog_category1)
            return this.$store.state.blog_category1
        },
    },
    methods: {
        getContents(){
            //return this.$store.state.blog_contents
        },
        getList(category){
            axios.get(this.$store.state.blog_url+category).then((response) => {
                console.log("content:"+JSON.stringify(response.data))
                this.contents = response.data
            })
            //return this.$store.state.blog_contents
        },

    },
}
</script>

<style>
.header_list{
    color:black;
    text-decoration: none;
}
.title_body{
    text-align: left;
    height: 36px;
    color: #a9a9a9;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
}
.starter-template {
    padding: 0.5rem;
    text-align: center;
}
.img {
    height : 80px;
    weight : 20px;
}
.card-deck{
    flex-wrap: wrap;
    width: 100%;
    display: flex;
}

</style>
