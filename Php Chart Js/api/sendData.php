<?php
header('Access-Control-Allow-Origin: *'); 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "linedb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$team = $_POST['team'];
$score= $_POST['score'];

$sql = "INSERT INTO line (team, score)
VALUES ('$team','$score')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>