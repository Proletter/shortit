const mongoose = require('mongoose');
const Url = require("../shortner/model.js")

module.exports = async function (context, req) {
    const password = process.env.MONGODB_PASSWORD
    const uri = `mongodb+srv://Shortit:${password}@shortit.c2zyd.mongodb.net/shortit?retryWrites=true&w=majority`;
    await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> context.log("connected to Mongo..."))
    .catch(err=> context.error("could not connect to db", err))
    context.log('JavaScript HTTP trigger function processed a request.');

    const {shrunkUrl} = req.query

    console.log(shrunkUrl)

    

    try {
       let result = await Url.find({ shrunkUrl: shrunkUrl});
       context.res = {
           body: result
       }
       
    } catch (error) {
        context.log(error)
    }
   
   
}