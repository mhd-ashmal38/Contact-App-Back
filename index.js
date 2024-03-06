const jsonServer=require('json-server')

const contactServer=jsonServer.create()

const middleware=jsonServer.defaults()

const router=jsonServer.router("db.json")

const port=3000

contactServer.use(middleware)
contactServer.use(router)

contactServer.listen(port,()=>{
    console.log("contact server started at port"+port);
})