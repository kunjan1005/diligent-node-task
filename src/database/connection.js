const {Sequelize}=require('sequelize')

const db_name=process.env.DB_NAME
const db_user=process.env.DB_USER
const db_pass=process.env.DB_PASS
const db_host=process.env.DB_HOST
const db_dialect=process.env.DB_DIALECT
//database connection 
const database = new Sequelize(db_name, db_user, db_pass, {
    host: db_host,
    dialect:db_dialect,
    logging:false,
    sync:false,
  });

database.authenticate().then(()=>{
    console.log("Database connection done!")
}).catch(error=>{
    console.log("Somthing went wrong while connection",error)
})
//export connection instance
module.exports.database=database