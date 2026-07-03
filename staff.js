const connection = require('./dbhospital');

// Create Staff Table
connection.query(
"CREATE TABLE IF NOT EXISTS staff(eid INT PRIMARY KEY,ename VARCHAR(30),age INT,gender VARCHAR(10))",
function(err,result){
    if(err) throw err;
    console.log("Staff table created");
});

// Insert Staff Records
connection.query(
"INSERT IGNORE INTO staff VALUES(101,'amit',18,'M'),(102,'suketu',19,'M'),(103,'divin',45,'M')",
function(err,result){
    if(err) throw err;
    console.log("Staff records inserted");
});

// Display Staff Records
connection.query(
"SELECT * FROM staff",
function(err,result){
    if(err) throw err;
    console.log("\nStaff Details");
    console.table(result);
});

// Delete Staff Record
connection.query(
"DELETE FROM staff WHERE eid=103",
function(err,result){
    if(err) throw err;
    console.log("Staff record deleted");

    connection.end();
});