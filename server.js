var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var pg = require('pg');
//var pg = require('pg');
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 5000;
var pgp = require( "pg-promise" )( /*options*/ );
var db = pgp( "postgres://postgres:root@localhost/resume" ); // "postgres://username:password@host:port/database"
var dbUrl = process.env.DATABASE_URL;
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

//CORS middleware
app.use( function ( req, res, next ) {
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    next();
} );
app.get( '/portfolio', function ( req, res ) {
    
    dbUrl.any( "SELECT * FROM portfolio" )
        .then( function ( data ) {
            res.send(data);
            //console.log( "DATA:", data );
        } )
        .catch( function ( error ) {
            console.log( "ERROR:", error );
        } );
} );
/*app.get('/resume', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('SELECT * FROM portfolio', function(err, result) {
            done();
            if (err)
            { console.error(err); response.send("Error " + err); }
            else
            { response.render('/resume', {data: result.rows} ); }
        });
    });
});*/


// set the view engine to ejs
//app.set( 'view engine', 'ejs' );

// make express look in the public directory for assets (css/js/img)
app.use( express.static( __dirname + '/build' ) );

// set the home page route
app.get( '/', function ( req, res ) {
    
    // ejs render automatically looks in the views folder
    res.sendFile( path.join( __dirname, '/build', 'index.html' ) );
} );

app.listen( port, function () {
    console.log( 'Our app is running on http://localhost:' + port );
} );