<template>
    <div class="container">
        <div style="height:110px;"></div>
        <div class="starter-template">
            <p class="content_title">記事リスト</p>
            <div class="card-deck">    
                <div style="width: 180px; border: 1px solid rgba(0,0,0,.125);margin: 8px;" class="" v-for="post in contents" :key="post.title">
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
<!--
        <div class="nav_space">
            <globalnav/>
        </div>
-->
    </div>
</template>

<script>
//import axios from 'axios'
import globalnav from '~/components/globalnav.vue'
export default {
    components:{
        globalnav
    },
    //props:['app'],
    data(){
        return{
            //res: '',
            contents: [],
            //category: '',
            app: '',
        }
    },
    asyncData: async ({ app, route,store,router,nuxt }) => {
        store.commit('setTopFlg',false)
        store.commit('setTopPicFlg',false)

        //console.log(app.$content(store.state.blog_category1).getAll())
        var contents = store.state.blog_contents
        console.log(contents.length)
        if(contents.length == 0){
            contents = await app.$content("it").get("/")
            store.commit('setBlogContents',contents)
            //route.push('/')
            //window.location.reload();
            //document.location = "/"
            //router.go()
        //    console.log(contents)
        }
        console.log(app.$content("it").get(""))
        var category = store.state.blog_category1
        if(category == ''){
            console.log("category get")
            var category = route.query.id
        }
        const result = contents.filter(item => item = store.state.blog_category1)
        var matched = contents.filter(function(contents) {
            return contents.tag1.match(store.state.blog_category1);
        });
        //console.log(matched)
        //this.contents = store.state.blog_contents
        //console.log(route.query.id)
        return{
            //contents: ( await app.$content(store.state.blog_category1).getAll("")),
            contents: matched,
            //app: app,
        };
    },
    created: function() {
        //console.log("ddd")
        //this.contents = this.app.$content("").get("/")
        //axios.get('../../content/')
        //.then(response => (console.log(response)))
    },

    computed: {
        category() {
            //console.log(this.contents)
            //ローカルでstoreのstateデータを代入
            this.$store.commit('setTopFlg',false)
            //this.getList(this.$store.state.blog_category1)
            return this.$store.state.blog_category1
        },
    },
    watch: {
        category(val) {
            //console.log("category changed"+this.app)
            //console.log(this.app)
            //this.$router.push("list");
            //this.$forceUpdate();
            //this.getList(this.$store.state.blog_category1)
            //return this.$store.state.blog_category1
            var contents = this.$store.state.blog_contents
            var genre = this.$store.state.blog_category1
            var matched = contents.filter(function(contents) {
                return contents.tag1.match(genre);
            });
            this.contents = matched
        },
    },
    methods: {
        async getList(category){
            console.log(category)
            this.contents = await this.app.$content(category).get("/")
            //return await app.$content(store.state.blog_category1).get("/")
        },
        getContents(){
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
    float:left;
    width: 70%;
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
