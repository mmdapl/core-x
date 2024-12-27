const mysql = require('mysql2/promise')

/**
 * 创建数据库
 */
async function createDataBase({ host, userName, password, database, port }) {
  // 创建一个数据库连接
  const con = await mysql.createConnection({
    host: host ?? 'localhost',
    port: port ?? 3306,
    user: userName,
    password,
  })

  try {
    const sql = `CREATE DATABASE IF NOT EXISTS ${database} default charset utf8 COLLATE utf8_general_ci`
    await con.connect()
    await con.execute(sql)

    // 断开连接
    await con.end()
  }
  catch (e) {
    // 断开连接
    con.destroy()
    throw e
  }
}

module.exports = {
  createDataBase,
}
