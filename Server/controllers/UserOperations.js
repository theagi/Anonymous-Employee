let bcrypt = require('bcrypt');
let mysql = require('mysql2');
let db = require('../DB');
let constants = require('../Constants');

encryptPassword = async (plainText,res) =>{
    
}

exports.newcandidate = (req,res) =>{
    let first = req.body.first;
    let last = req.body.last;
    let email = req.body.email;
    let pass = req.body.password;
    //first we gotta search and see if the database contains an instance of this user
    //if it doesn't, we can add. if it does, send an error.

    let query = 'SELECT * FROM candidates WHERE Email = ?';
    db.pool.query(query,[email],(err,results) =>{
        if(err){
            res.status(500).send('Oops, error on our end. Sorry!')
        }else{
            if(results.length > 0){
                res.status(409);
                res.send('User Already Exists.');
            }else{
                query = 'INSERT INTO candidates VALUES(?,?,?,?)';
                bcrypt.hash(pass,constants.SALT_ROUNDS)
                .then((hash) => {
                    db.pool.query(query,[first,last,email,hash]);
                    res.send('Registered');
                })
                .catch(e => res.send(500));
            }
        }
    });
}