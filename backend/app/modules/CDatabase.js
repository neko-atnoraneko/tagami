"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var fs = require("fs");
var mysql = require("mysql");
var CDatabase = /** @class */ (function () {
    function CDatabase() {
    }
    CDatabase.prototype.createDatabaseTables = function () {
        // DBに接続する設定情報
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "tagamiroot",
            database: "tagami_db",
        });
        con.connect(function (err) {
            if (err)
                throw err;
            console.log("接続完了");
            con.query("CREATE TABLE person (name VARCHAR(10) NOT NULL, age int NOT NULL)", function (err, result) {
                if (err)
                    throw err;
                console.log("テーブルが作成されました");
                console.log(result);
            });
            console.log(err);
        });
    };
    return CDatabase;
}());
exports.default = CDatabase;
