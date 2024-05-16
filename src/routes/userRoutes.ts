import { Router } from "express";
import { businessController } from "../business/business.Controller";

export class userRoute{
    public router:Router = Router();
    private businessControll:businessController
    constructor(){
        this.businessControll = new businessController;
    }

    public userRoute(){
        this.router.route("/users/:id/vocabulary/level").post(this.businessControll.getVocabularyLevel);
        this.router.route("/users/word").get(this.businessControll.postWords);
    }
}