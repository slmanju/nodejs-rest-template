 https://expressjs.com/en/advanced/best-practice-security.html#use-helmet



curl -d '{"title":"", "description":""}' -H "Content-Type: application/json" -X POST http://localhost:3000/notes
curl -d '{"title":"A note", "description":"A fun note"}' -H "Content-Type: application/json" -X POST http://localhost:3000/notes