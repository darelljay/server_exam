import {Router} from "express";
import { businessController } from "../business/business.Controller";

export class UserRoute{
    public businessController:businessController;
    public router : Router = Router();

    constructor(){
        this.businessController = new businessController();
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.route("/users/word").get(this.businessController.postWords);
        this.router.route("/users/:id/vocabulary/level").post(this.businessController.getVocabularyLevel);

    }   
}