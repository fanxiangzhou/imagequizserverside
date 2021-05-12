require('dotenv').config();
const { pool } = require('pg');

let host = process.env.host;
let database = process.env.database;
let port = process.env.port;
let username = process.env.username;
let password = process.env.username;

let connectionString =
`postgres://${username}:${password}@${host}:${port}/${database}`;

let connection = {
    connectionString: process.env.DATABASE_URL ? process.env.DATABASE_URL :connectionString,
    ssl : {rejectUnauthorized: false}
};

const pool = new Pool(connection);

let getscores = (street,city, state, postalCode) => {
    return pool.query(`insert into imagequiz.scores(question,scores) values($1,$2) returning id`,[question,scores])
    .then(result => {console.log('the scores was out'); return result.rows[0],id;});
    
}
let getflowers = (name) =>{
    return pool.query('select flowerid from imagequiz.flowers where name like %$1%',[name])
    .then(result =>{console.log('the follower was found'); return result.rows;})
}






module.exports ={ getflowers, getscores }

