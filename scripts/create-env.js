const fs = require('fs')
const token = "70336848418215cfea6d7d735ddbf8c06e9571c8"
fs.writeFileSync('./.env', `token=${token}\n`)