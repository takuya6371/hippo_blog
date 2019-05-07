import axios from 'axios'
export const state = () => ({
    is_top_page: true,
    blog_id: null,
    blog_contents: [],
    blog_category1: '',
    blog_category2: '',
    blog_category3: '',
    blog_contents: [],
    blog_url: '/content-api/'

  })

export const actions = {
  fetchItems({ commit,path }) {
    axios.get(blog_url+path).then((response) => {
            commit('setBlogContents', { contents: response.data })
    })
  }
}
export const mutations = {
  setTopFlg(state,flg) {
    state.is_top_page = flg
    console.log("top:"+state.is_top_page)
    },
  setBlogContents(state,contents) {
      axios.get(blog_url+path).then((response) => {
        state.blog_contents = JSON.stringify(response.data)
        state.blog_contents = JSON.parse(state.blog_contents)
        console.log("set content"+state.blog_contents)
      })
    },
    setBlogId(state,id) {
      state.blog_id = id
      console.log("blog_id:"+state.blog_id)
      },
    setBlogContens(state,post) {
      state.blog_contents = post
      console.log(state.blog_contents)
    },
    setBlogCategory1(state,category1) {
      state.blog_category1 = category1
      console.log("category1:"+state.blog_category1)
      },
    setBlogCategory2(state,category2) {
      state.blog_category2 = category2
      console.log("category2:"+state.blog_category2)
      },
    setBlogCategory3(state,category3) {
      state.blog_category3 = category3
      console.log("category3:"+state.blog_category3)
      },
    categoryClear(state) {
      state.blog_category1 = ''
      state.blog_category2 = ''
      state.blog_category3 = ''
      console.log("category clear")
    },
  }