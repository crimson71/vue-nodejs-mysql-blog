
const bcrypt = require('bcrypt')
//生成随机字符串,genSalt接收的数字越大生成的随机字符串复杂度越高

const run = async (password) => {
const salt = await bcrypt.genSalt(10)
// console.log(salt,'salt');
//对密码进行加密bcrypt.hash(明文，随机字符串)，返回加密的密码
const result = await bcrypt.hash(password,salt)
// console.log(result);
}