<template>
    <div class="container">
<div style="height:117px;"></div>
        <div class="starter-template">
            <div class="card-deck">
            <!--
                <div style="width: 215px; border: 1px solid rgba(0,0,0,.125);margin: 8px;" class="" v-for="post in contents.contents" :key="post.contents">
                <nuxt-link class="header_list" :to="{'path':'/id/content', 'query':{'id':post.id}}">
                    <div class="card-body">
                        <img style="height: 100px;" class="card-img-top" :src="`http://localhost:1337/${post.thumbnail.url}`">
                        <h5 class="card-title" style="font-size: 30px;">{{post.title}}</h5>                
                    </div>
                </nuxt-link>
                </div>
            -->
            <p>{{category}}</p>
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
                console.log("aaa"+JSON.stringify(response.data))
            })
            //return this.$store.state.blog_contents
        },

    },
}
</script>

<style>
    .starter-template {
        padding: 3rem 1.5rem;
        text-align: center;
    }
    .img {
        height : 80px;
        weight : 20px;
    }
    
</style>
