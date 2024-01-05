const mysql = require('mysql')
const dbConfig = require('../config/config')
const queries = require('../Querries/queries')

const pool = mysql.createPool(dbConfig);


//the function takes an sql query and optional values some values as parameters
const executeQuery = (query, values=[])=>{
    //return a new promise
    return new Promise ((resolve, reject)=>{
        //pool to connect to a database
        pool.query(query,values,(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

//create a database if none exists
const createDatabaseIfNotExists = async ()=>{
    try {
        const result = await executeQuery(queries.showDatabases);
        const DatabaseExists = result.some(db => db.Database === dbConfig.database);
        if(!DatabaseExists){
            await executeQuery(queries.createDatabase);
            console.log('database created successfully');
        }else{
            console.log("database already exists");
        }
    } catch (error) {
        throw error;
    }
}

//initialize the database
const initializeDatabase = async ()=>{
    try {
        await createDatabaseIfNotExists();
    } catch (error) {
        throw error
    }
}
module.exports ={
    pool,
    initializeDatabase
}
