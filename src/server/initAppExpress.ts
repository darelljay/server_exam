import bodyParser from "body-parser"
import { Express } from "express"
import { UserRoute } from "../routes/userRoutes";
import { DB } from "../db/connecttion";
export const initAppExpress = async(app:Express): Promise<void> =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    try{
      const database = new DB();
      await database.DBConnection();
      
      console.log("mysql database Connection Established Succsesfully")
    }catch(error){  
        console.error("failed to Connect to mysql database",error);
    }
    const userRoute = new UserRoute();
    app.use("/",userRoute.router);
}