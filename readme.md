 # Node.js REST Templete - Note Taking Application

Build a Node.js REST API template using industry standard practices.

Libraries:
* express
* dotenv
* helmet
* cors
* morgan
* joi
* celebrate
* bcrypt
* jsonwebtoken
* await-to-js
* nodemon

## Usage

```

curl -H "Content-Type: application/json" -X POST -d '{ "title":"A note", "description":"A fun note" }' http://localhost:3000/notes

curl -H "Content-Type: application/json" -X POST -d '{ "username": "Admin", "password": "admin", "role": "Admin" }' http://localhost:3000/users


```

```
{
  "username":"Admin",
  "password":"$2b$10$XCwtkfcLlhKSjT3q8iFu6ePItukQriFehj2ui9fO2ZZOR2/IsKMoy",
  "role":"Admin",
  "created":"2023-12-26T06:52:36.726Z",
  "updated":"2023-12-26T06:52:36.726Z",
  "_id":"658a783408587fad89072ce6",
  "__v":0
}

```

## References
https://expressjs.com/en/advanced/best-practice-security.html#use-helmet