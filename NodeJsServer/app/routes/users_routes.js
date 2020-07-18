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
        response.send(JSON.stringify(result));
    });
};
