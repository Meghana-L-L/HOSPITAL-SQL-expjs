const connection = require('./dbhospital');

// Create Doctor Table
connection.query(
"CREATE TABLE IF NOT EXISTS doctor(did INT PRIMARY KEY,dname VARCHAR(30),age INT,gender VARCHAR(10))",
function(err,result){
    if(err) throw err;
    console.log("Doctor table created");
});

// Insert Doctor Records
connection.query(
"INSERT IGNORE INTO doctor VALUES(202,'dr.patel',45,'M'),(203,'dr.shah',29,'M')",
function(err,result){
    if(err) throw err;
    console.log("Doctor records inserted");
});

// Display Doctor Records
connection.query(
"SELECT * FROM doctor",
function(err,result){
    if(err) throw err;
    console.log("\nDoctor Details");
    console.table(result);
});

// Delete Doctor Record
connection.query(
"DELETE FROM doctor WHERE dname='dr.shah'",
function(err,result){
    if(err) throw err;
    console.log("Doctor record deleted");
});