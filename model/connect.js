//数据库连接
const mysql = require('mysql')
const db = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  port:3306,
  password:'admin123',
  database:'blog'
})

exports.modules =  db
