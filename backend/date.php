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
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$date = $_GET['date'] ?? ''; // Safeguard for missing date

if ($date) {
    $stmt = $conn->prepare("SELECT time, delhi, date FROM loaddata WHERE date = ?");
    $stmt->bind_param("s", $date);
    $stmt->execute();
    $result = $stmt->get_result();
    
    $data = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    echo json_encode($data);
} else {
    echo json_encode(["error" => "No date provided"]);
}

$conn->close();
?>
