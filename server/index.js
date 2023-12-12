const express = require('express')
const bodyParser = require('body-parser');
const dbHandler = require('./DbHandler/handler')
const app = express();
const port = 3001
app.use(bodyParser.json())
dbHandler.pool.getConnection((err,connection)=>{
        if(err) throw err;
        console.log("MySQL Connected successfully");
        dbHandler.initializeDatabase()
        .then(()=>{
                connection.release()
        })
        .catch((err)=>{
                connection.release();
                throw err;
        })
})
app.listen(port,()=>{
        console.log(`server running on http://localhost:${port}`)
})