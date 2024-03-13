"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var fs = require("fs");
const mysql = require("mysql2/promise");
var CDatabase = /** @class */ (function () {
    function CDatabase() {
    }
    CDatabase.prototype.createDatabaseTables = function () {
        // DBに接続する設定情報
        mysql.createConnection({
            host: "mysql",
            user: "root",
            password: "tagamiroot",
            database: "tagami_db",
        })
            .then(function (con) {
                console.log("接続完了");
                return con.query("CREATE TABLE person (name VARCHAR(10) NOT NULL, age int NOT NULL)");
            })
            .then(function (result) {
                console.log("テーブルが作成されました");
                console.log(result);
            })
            .catch(function (err) {
                console.log(err);
            });

    };
    return CDatabase;
}());
exports.default = CDatabase;
