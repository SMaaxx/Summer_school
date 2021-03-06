import Express from 'express';
import mongoose from 'mongoose';
import router from "./router.js";

const App = Express();
const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@products.ipe8d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

App.use(Express.json());
App.use('/api',router);

async function startApp(){
        try{
            await mongoose.connect(DB_URL, {useUnifiedTopology:true, useNewUrlParser: true});
            App.listen(3001,()=> console.log('Server is running on port 3001'));
        }catch(e){
            console.log(e)
        }
}
startApp();