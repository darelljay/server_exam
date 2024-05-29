import { businiessService } from "./business.Service";
import { Request, Response, NextFunction } from "express";
export class businessController extends businiessService {

  // 최저: 2.002초 최고: 2.047초 
  public getVocabularyLevel = async (req: Request, res: Response,next:NextFunction): Promise<void> => {
    try {
      const userId = this.getNumber(req.params.id);
      const result = await this.getUserVocabularyLevel(userId);
      res.send({ result });
    } catch (error) {
      console.error(error)
      res.status(400).json({ msg: error });
    }
  }
  
  // 서버 응답시간 최저: 2.003 최고 2.038
  public postWords = async (req: Request, res: Response): Promise<void> => {
    let { userId, word } = req.body;
    try {
      userId = this.getNumber(userId);
      await this.postUserWord(userId, word);
      res.json(true);
    } catch (error) {
      console.error(error);
      res.json(false);
    }
    }
}


