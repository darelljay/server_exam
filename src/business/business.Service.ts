import { dbService } from "../db/dbController";

export class businiessService{
    database:dbService

    constructor(){
        this.database = new dbService();
    }
    public  getNumber = (value: any)=> {
        const number = Number(value);
        if (value != null && Number.isFinite(number)) {
          return number;
        } else {
          throw new Error("Not a number");
        }
      }
      
      public getUserVocabularyLevel = async(userId: number):Promise<number>=>{
        const count = await this.database.getWordCountFromDB(userId);
        return count;
      }
      
      public postUserWord = async(userId: number, word: string)=> {
        await this.database.insertWordFromDB(userId, word);
      }
      
}
