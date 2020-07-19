const { Pool, Client } = require('pg');
const connectionString = 'postgres://postgres:m4sl!na@localhost/aboutme';

bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
    app.get('/aboutMe', (request, response) => {
        var result = {
            "first_name": "Алмаз",
            "last_name": "Фарвазов",
            "description1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat sodales ante, sit amet lobortis tortor sodales iaculis. Morbi in semper leo. Etiam cursus arcu non erat dictum molestie. Nullam ullamcorper vulputate ante ut egestas. Nulla non elit nibh. Aliquam egestas non mauris in mollis. Proin sit amet egestas augue, id lobortis turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet metus quam. Sed commodo, turpis vel ullamcorper egestas, eros erat ultrices elit, at pellentesque mi nunc vel leo.",
            "description2": "Duis condimentum euismod imperdiet. Fusce rhoncus risus purus, suscipit pharetra nisl laoreet sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam dapibus sagittis leo, in commodo erat interdum id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc fermentum erat quis orci aliquet, vitae lacinia turpis accumsan. Aliquam ac ipsum quis justo dignissim euismod. Phasellus placerat imperdiet volutpat. Maecenas ac feugiat leo.",
            "phone": "+7 (123) 456-78-90",
            "email": "almaz.farvazov2001@gmail.com",
            "pathToPhoto": "images/profile.jpg"
        };
        response.setHeader("Content-Type", "application/json");
        response.send(JSON.stringify(result));
    });

    app.post('/aboutMe', urlencodedParser, (request, response) => {
        if(!request.body) return response.sendStatus(400);
        console.log(request.body);
        const user = request.body;
        const client = new Client({
            connectionString: connectionString,
        })
        client.connect();
        client.query('INSERT INTO applications(name, email) VALUES($1, $2)',
            [user.name, user.email], (err, res) => {
            if (err) {
                console.log(err.stack);
            } else {
                console.log(res.rows[0]);
            }
        });
        response.send('successfully registered');
    });

    app.get('/users', (request, response) => {
        if(!request.body) return response.sendStatus(400);
        console.log(request.body);
        const user = request.body;
        const client = new Client({
            connectionString: connectionString,
        })
        client.connect();
        client.query('SELECT name, email FROM applications;',
            [], (error, result) => {
                if (error) {
                    console.log(error.stack);
                } else {
                    console.log(result.rows[0]);
                }
                response.setHeader("Content-Type", "application/json");
                response.json(result.rows);
            });
    });

};
