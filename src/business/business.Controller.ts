import { businiessService } from "./business.Service";
import { Request, Response } from "express";
export class businessController extends businiessService {

  // 최저: 2.002초 최고: 2.047초 
  public getVocabularyLevel = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = this.getNumber(req.params.id);
      const result = await this.getUserVocabularyLevel(userId);
      res.send({ result });
    } catch (error) {
      console.error(error)
      res.status(400).json({ msg: error });
    } finally {
      // 작업 수행하는데 걸린 시간 찍는 코드 
      const start = Date.now()
      setTimeout(() => {
        const millis = Date.now() - start;

        console.log(`seconds elapsed = ${millis / 1000}`);
      }, 2000);
    }
  }

  public postWords = async (req: Request, res: Response): Promise<void> => {
    let { userId, word } = req.body;
    try {
      userId = this.getNumber(userId);
      await this.postUserWord(userId, word);
      res.json(true);
    } catch (error) {
      console.error(error);
      res.json(false);
    }finally{
      const start = Date.now()
  
      setTimeout(() => {
        const millis = Date.now() - start;
  
        console.log(`seconds elapsed = ${millis / 1000}`);
        // expected output: seconds elapsed = 2
      }, 2000);
    }
    }
}


