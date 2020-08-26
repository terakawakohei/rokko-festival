package main

import (
   
    "os"

    "github.com/jinzhu/gorm"
)

var db *gorm.DB

func init() {
    var err error
    var datasource string
    if os.Getenv("DATABASE_URL") != "" {
        // Heroku用
datasource = "b6269a7b123b6c:c2129dd2@tcp(us-cdbr-east-02.cleardb.com:3306)/heroku_4cadff22e8acc17?parseTime=true"
    } else {
        // ローカル用
        datasource = "b6269a7b123b6c:c2129dd2@/heroku_4cadff22e8acc17?parseTime=true"
    }
    db, err = gorm.Open("mysql", datasource)
    if err != nil {
        panic("failed to connect database")
    }

    db.AutoMigrate(&Product{})
}