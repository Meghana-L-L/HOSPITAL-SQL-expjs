const connection = require('./dbhospital');

// Create Patient Table
connection.query(
"CREATE TABLE IF NOT EXISTS patient(pid INT PRIMARY KEY,pname VARCHAR(30),age INT,gender VARCHAR(10))",
function(err,result){
    if(err) throw err;
    console.log("Patient table created");
});

// Insert Patient Records
connection.query(
"INSERT IGNORE INTO patient VALUES(1,'sahil kumar',25,'M'),(2,'sumit kumar',28,'M'),(3,'ajay kumar',28,'M'),(4,'suhani',27,'F')",
function(err,result){
    if(err) throw err;
    console.log("Patient records inserted");
});

// Display Patient Records
connection.query(
"SELECT * FROM patient",
function(err,result){
    if(err) throw err;
    console.log("\nPatient Details");
    console.table(result);
});

// Delete Patient Record
connection.query(
"DELETE FROM patient WHERE pid=4",
function(err,result){
    if(err) throw err;
    console.log("Patient record deleted");
});