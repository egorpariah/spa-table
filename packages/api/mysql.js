import mysql from "mysql2/promise";
import bluebird from "bluebird";

export default async function (dblimit) {
  const connection = await mysql.createConnection({
    host: "remotemysql.com",
    user: "xtTzQRuo0U",
    password: "Mb1OdsFWZg",
    database: "xtTzQRuo0U",
    Promise: bluebird,
  });
  console.log("> Connection to MySQL server has been established");
  try {
    const [count] = await connection.query(
      "SELECT count(*) as numRows FROM spatable"
    );
    const numRows = count[0].numRows;

    const [result] = await connection.query(
      `SELECT * FROM spatable LIMIT ${dblimit}`
    );
    for (const item of result) {
      item.date = item.date.toISOString().split("T")[0];
    }
    return { result, numRows };
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    await connection.end();
    console.log("> Connection has been closed");
  }
}
