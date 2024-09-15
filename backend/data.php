<?php
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');

// Database connection
$host = "localhost";
$user = "root";
$password = "";
$database = "demand_data";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$date = $_GET['date'];

$sql = "SELECT AVG(temp) as average_temperature, MAX(delhi) as max_peak, MIN(delhi) as min_peak FROM data_sets WHERE date = '$date'";
$result = $conn->query($sql);

$data = [];

if ($result->num_rows > 0) {
    $data = $result->fetch_assoc();
}

echo json_encode($data);

$conn->close();
?>
