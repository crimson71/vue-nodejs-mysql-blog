const bcrypt = require('bcrypt')
const db = require('./connect.js')

const sqlStr = 'select * from t_users where username = ?' 
const queryUser = (username) => {
  db.modules.getConnection()
  const promise = new Promise((resolve,reject) => {
    db.modules.query(sqlStr,[username],(error,result) => {
      if(error) return reject(error)
      resolve(result) 
      
    })
    db.modules.end()
  })
  return promise
}



module.exports = {queryUser}