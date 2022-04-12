# todos
vue2+vuex+ant-design-vue+axios搭配，简单实现的一个todos管理的小demo，主要是为了熟悉vue2.0项目中使用vuex时，数据的管理和操作的规则

# 主要用到了vuex中store的如下属性：
let store = new Vuex.store({
  state: {}, //项目需要全局共享的数据
  getters: {}, //对state中的数据做包装处理，并返回包装后的数据（类似于vue中的计算属性computed中包装的数据）；
  mutations:{  //只能存放处理函数，不能放异步请求
    mHandlerName(state[,param] ) {
      //对state中的数据进行更新
    }
  }，
  actions: { //对异步请求
    aHanderName(contex[,params]) {
      //异步请求返回数据，
      //借助mutation中的方法来对state中的数据进行更新
      context.mHandlerName();
    }
  }
})

# vue中调用方法
Vue.use(Vuex);
在入口文件中引入 store, 初始化时放到vue的option中 

在子组件中使用：
1、state： 
  使用this.$store.state.xxx;
  引入vuex中的mapState方法，将state中的数据映射到computed中，如： {computed: {...mapState(['state中的key'])}}

2、getters： 
  使用this.$store.state.xxx;
  引入vuex中的mapState方法，将state中的数据映射到computed中，如： {computed: {...mapState(['state中的key'])}}
  
3、mutations:
  this.$store.commit('函数名'，参数...);
  引入vuex中的mapMutations方法，将mutation中的方法映射到methods中，如： {computed: {...mapMutations(['mutation中的key'])}}
  
4、actions:
  this.$store.dispatch('方法名'，参数...);
  引入vuex中的maptActions方法, 将action中的方法映射到methods中  如： {computed: {...mapActions([action中的key以逗号隔开])}}
  
  
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
