# 家庭記帳本
## Features/功能
* 使用者可以新增專屬的記帳本
* 使用者可以瀏覽記帳本的詳細資訊
* 使用者可以修改記帳本的資訊
* 使用者可以刪除記帳本的內容
* 使用者可以註冊帳號，註冊的資料包括：名字、email、密碼、確認密碼。
* 使用者也可以透過 Facebook Login 直接登入

## Environment Setup/環境建置
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
* [express-session](https://www.npmjs.com/package/express-session#resave)
* [Mongoose](https://mongoosejs.com/)
* [bcryptjs](https://www.npmjs.com/package/bcrypt)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [method-override](https://www.npmjs.com/package/method-override)
* [passport](https://www.npmjs.com/package/passport)
* [passport-facebook](http://www.passportjs.org/packages/passport-facebook/)
* [passport-local](http://www.passportjs.org/packages/passport-local/)
* [connect-flash](https://www.npmjs.com/package/connect-flash)

## Installation/專案安裝
### Clone
```
git clone 
cd 
npm install
```

### 環境變數設定
```
移除.example副檔名
修改 MONGODB_URI、FACEBOOK_ID、FACEBOOK_SECRET
```

### Run/執行專案

```
npm run dev
```
### Add Seeders/ 建立種子資料
```
npm run seed
```
若成功開啟伺服器你會看到：
```
Express server is running on http://localhost:3000
```
可以至 http://localhost:3000 查看網站
