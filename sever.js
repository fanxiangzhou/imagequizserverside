const express  = require('express')

//create a server
const app = express()
const port = process.env.PORT || 4002;



//parse jason
app.use(express.json());


//data
let places =[];

app.get('/',(request,response) => {
    response.send('<h1>welcome to imagequiz services.<h1>');

});
app.get('/add/:a/:b',(request,response) => {
    let a =request.params.a;
    let b = request.params.b;
    let sum = a+b;
    response.jason(sum);

});

app.post('/place',(request,response) => {
    let name = request.body.name;
    let address = request.body.address;
    let place = {name: name, address: address};
    places.push(place);
    response.send(`the place ${name} was added successfully.`);
});

app.get('/place/:name',(request,response) => {
    let name = request.params.name;
    let place = places.find(x => x.name === name);
    places.push(place);
    if(place){
        response.jason(place);
    }else{
        response.status(404).send(`The place ${name} could not be found.`)
    }
    response.send(`the place ${name} was added successfully.`);
});

app.get('/places',(request,response) => {
    
    response.jason(places)
});
app.get('/quizzes',(request,response) => {
    
    response.jason(places)
});
app.get('/quiz/:id',(request,response) => {
    
    response.jason(places)
});
app.get('/score',(request,response) => {
    
    response.jason(places)
});
//start the server
app.listen(port, () => console.log('Listening on port ' + port))
