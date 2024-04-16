const mongoose= require ('mongoose')
mongoose.connect("mongodb+srv://nivedkrishna14:nived@cluster0.tl8t6aw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});