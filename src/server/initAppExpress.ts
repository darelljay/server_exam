import bodyParser from "body-parser"
import { Express } from "express"
import { UserRoute } from "../routes/userRoutes";
export const initAppExpress = (app:Express): void =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));

    const userRoute = new UserRoute();
    app.use("/",userRoute.router);
}   