const express = require('express');
const request = require('request');


const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('search');
});

app.get('/movies',(req, res)=>{
    var query = req.query.search;
    var url = 'https://www.omdbapi.com/?s=' + query + '&apikey=6d0c45ad';
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body)
            res.render('movies', {data: data});
            console.log(data);
        }
    });
});

 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Movie app started on port ${port}`));
 
