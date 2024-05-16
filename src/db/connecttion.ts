import "dotenv/config" 
import mysql from "mysql2/promise";
export class DB{
    public DBConnection = async():Promise<any> =>{
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_DATABASE
        });
        try {
          return connection;
        } catch (error) {
           throw new Error(`Error at connection.ts: ${error.message}`); 
        }finally{
            await connection.end();
        }
    } 

    public dbQuery = async(query:string):Promise<any> =>{
        try{
            const conn = await this.DBConnection();
            const [results] = await conn.query(query);

            return results;
        }catch(error){
            throw new Error(`Error at connection.ts.dbQuery(): ${error}`);
        }
        
    }
}
