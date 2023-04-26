//数据库连接
const config = require('config')
const mysql = require('mysql')
const db = mysql.createPool(config.get('db'))
exports.modules =  db
