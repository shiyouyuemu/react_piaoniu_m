const Koa = require("koa")
const app = new Koa()
const myRouter = require("./router/index")
const proxy = require("koa-server-http-proxy")
const Router = require("koa-router")
const router = new Router()

// router.use(myRouter.routes())
app.use(proxy(
    "/app",{
        target:"https://api.piaoniu.com",
        pathRewrite:{
            '^/app':''
        },
        changeOrigin:true
    }
))
// app.use(router.routes())

app.listen(3000,()=>{
    console.log("server 3000 is listening!")
})