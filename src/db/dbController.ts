import { DB } from "./connecttion";

export class dbService {
    db: DB;

    constructor(){
        this.db = new DB();
    }
    // 리턴 타입을 몰라서 any로 했으니까 이따 알아서 바꾸셈
    public getWordCountFromDB = async(userId:any):Promise<any>=>{
        const query = `
        SELECT COUNT(*) as c
        FROM (SELECT COUNT(*) FROM user_words WHERE user_id = ${userId} GROUP BY word) as r;
      `; 
      const result = await this.db.dbQuery(query);
      return result; 
    } 

    public insertWordFromDB = async(userId:number,word:string) =>{
        const query = `
        INSERT INTO user_words (created_at, user_id, word) VALUES (NOW(), ${userId}, "${word}")
      `;
       this.db.dbQuery(query);
    }
}