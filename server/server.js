const Koa = require('koa')

const app = new Koa()

const isDev = process.env.NODE_ENV === 'development'

app.use(async,(ctx,next)=>{
    try{
        console.log(`require witch path ${ctx.path}`)
        await.next()
    }catch(err){
        console.log(err)
        ctx.status=500
        if(isDev){
            ctx.body=err.message
        }else{
            ctx.body='please try again'
        }
    }
})