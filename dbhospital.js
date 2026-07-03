const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'info123',
    database: 'hospital2'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL");

    // ===========================
    // PATIENT
    // ===========================

    connection.query(
        "CREATE TABLE IF NOT EXISTS patient(pid INT PRIMARY KEY,pname VARCHAR(30),age INT,gender VARCHAR(10))",
        function (err, result) {
            if (err) throw err;
            console.log("Patient table created");
        }
    );

    connection.query(
        "INSERT IGNORE INTO patient VALUES(1,'sahil kumar',25,'M'),(2,'sumit kumar',28,'M'),(3,'ajay kumar',28,'M'),(4,'suhani',27,'F')",
        function (err, result) {
            if (err) throw err;
            console.log("Patient records inserted");
        }
    );

    connection.query(
        "SELECT * FROM patient",
        function (err, result) {
            if (err) throw err;
            console.log("\nPatient Details");
            console.table(result);
        }
    );

    connection.query(
        "DELETE FROM patient WHERE pid=4",
        function (err, result) {
            if (err) throw err;
            console.log("Patient record deleted");
        }
    );

    // ===========================
    // DOCTOR
    // ===========================

    connection.query(
        "CREATE TABLE IF NOT EXISTS doctor(did INT PRIMARY KEY,dname VARCHAR(30),age INT,gender VARCHAR(10))",
        function (err, result) {
            if (err) throw err;
            console.log("Doctor table created");
        }
    );

    connection.query(
        "INSERT IGNORE INTO doctor VALUES(202,'dr.patel',45,'M'),(203,'dr.shah',29,'M')",
        function (err, result) {
            if (err) throw err;
            console.log("Doctor records inserted");
        }
    );

    connection.query(
        "SELECT * FROM doctor",
        function (err, result) {
            if (err) throw err;
            console.log("\nDoctor Details");
            console.table(result);
        }
    );

    connection.query(
        "DELETE FROM doctor WHERE dname='dr.shah'",
        function (err, result) {
            if (err) throw err;
            console.log("Doctor record deleted");
        }
    );

    // ===========================
    // STAFF
    // ===========================

    connection.query(
        "CREATE TABLE IF NOT EXISTS staff(eid INT PRIMARY KEY,ename VARCHAR(30),age INT,gender VARCHAR(10))",
        function (err, result) {
            if (err) throw err;
            console.log("Staff table created");
        }
    );

    connection.query(
        "INSERT IGNORE INTO staff VALUES(101,'amit',18,'M'),(102,'suketu',19,'M'),(103,'divin',45,'M')",
        function (err, result) {
            if (err) throw err;
            console.log("Staff records inserted");
        }
    );

    connection.query(
        "SELECT * FROM staff",
        function (err, result) {
            if (err) throw err;
            console.log("\nStaff Details");
            console.table(result);
        }
    );

    connection.query(
        "DELETE FROM staff WHERE eid=103",
        function (err, result) {
            if (err) throw err;
            console.log("Staff record deleted");

            connection.end();
        }
    );
});