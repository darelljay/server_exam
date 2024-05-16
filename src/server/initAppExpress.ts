import bodyParser from "body-parser"
import { Express } from "express"
import { userRoute } from "../routes/userRoutes";
export const initAppExpress = (app:Express) =>{
    app.use(bodyParser.json());
    const busnissRoute = new userRoute();
    app.use("/user",busnissRoute.router);
}   