import { businiessService } from "./business.Service";
import { Request, Response } from "express";
export class businessController extends businiessService {
  public getVocabularyLevel = async (req: Request, res: Response): Promise<void> => {
    console.log(req.params)
    const userId = this.getNumber(req.params.id);
    const result = await this.getUserVocabularyLevel(userId);
    res.send({ result });
  }

  public postWords = async (req: Request, res: Response): Promise<void> => {
    const { userId, word } = req.body;
    
    console.log(typeOf(userId));

    if(typeOf(Number(userId)) !== Number)  res.json(false);
    
    try {
      await this.postUserWord(userId, word);
      res.json(true);
    } catch (error) {
      res.json(false);
    }

    const start = Date.now()
	
    setTimeout(() => {
      const millis = Date.now() - start;
  
      console.log(`seconds elapsed = ${millis / 1000}`);
      // expected output: seconds elapsed = 2
    }, 2000);
  }
}

function typeOf(userId: any): any {
  throw new Error("Function not implemented.");
}
