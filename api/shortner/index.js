const mongoose = require('mongoose');
const Url = require("./model.js")
const generateRandomChars = require('./randomCharacters')



module.exports = async function (context, req) {

    
    context.log(req)

    const {url, shrunkUrl} = req.body

    let extraChars = shrunkUrl || generateRandomChars(5)

    const password = process.env.MONGODB_PASSWORD
    context.log(password)
    const uri = `mongodb+srv://Shortit:${password}@shortit.c2zyd.mongodb.net/shortit?retryWrites=true&w=majority`;
    await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> context.log("connected to Mongo..."))
    .catch(err=> context.log("could not connect to db", err))
    context.log('JavaScript HTTP trigger function processed a request.');


 
    const urlObject = new Url({
        url: url,
        shrunkUrl: extraChars
    })

    let docExists = await Url.exists({key: url});
    context.log(docExists)
    if(docExists){
        return  context.res = {
            body: docExists
        };

    }
    console.log(docExists); 
    let result;
    try {
        result = await urlObject.save()
    } catch (error) {
         context.log(error)
    }
   
    context.res = {
        body: result
    };
}