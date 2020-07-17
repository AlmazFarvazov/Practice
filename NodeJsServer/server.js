// используем библиотеку express
const express = require('express');
// создаем объект express
const app = express();
// говорим, что мы раздаем папку public
app.use(express.static('public'));
// говорим, что запускаемся на порту 3000
app.listen(3000);
console.log("Server started at 3000");
