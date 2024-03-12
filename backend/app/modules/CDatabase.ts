"use strict";

let http = require("http");
let fs = require("fs");
let mysql = require("mysql");

class CDatabase {
  constructor() {}

  createDatabaseTables() {
    // DBに接続する設定情報
    const con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "tagamiroot",
      database: "tagami_db",
    });

    con.connect((err) => {
      if (err) throw err;

      console.log("接続完了");

      con.query(
        "CREATE TABLE person (name VARCHAR(10) NOT NULL, age int NOT NULL)",
        (err, result) => {
          if (err) throw err;
          console.log("テーブルが作成されました");
          console.log(result);
        }
      );
      console.log(err);
    });
  }
}

export default CDatabase;
