<?php

header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "demand_data";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the selected date from POST request
$date = '$_POST['date']';

// Prepare and execute query
$sql = "SELECT AVG(temp) AS avg_temperature, MAX(delhi) AS max_peak, MIN(delhi) AS min_peak FROM loaddata WHERE date = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $date);
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_assoc();

// Return data as JSON
header('Content-Type: application/json');
echo json_encode($data);

// Close connection
$stmt->close();
$conn->close();
?>
