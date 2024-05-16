import { businiessService } from "./business.Service";
import { Request,Response } from "express";
export class businessController extends businiessService{
    public getVocabularyLevel = async(req:Request,res:Response):Promise<void> =>{
        const userId = this.getNumber(req.params.id);
        const result = await this.getUserVocabularyLevel(userId);
        res.send({result});
    }

    public postWords = async(req:Request,res:Response):Promise<void> =>{
        const userId = this.getNumber(req.body.id);
        const word = req.body.word;
        try {
            await this.postUserWord(userId, word);
            res.json(true);
          } catch (error) {
            res.json(false);
          }
    }
}