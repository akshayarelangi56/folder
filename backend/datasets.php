<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "demand_data";
$tablename = "loaddata";
$csvfile = "C:\\xampp\krishn2\htdocs\Project2\\testDataLSTM.csv";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Open the CSV file
if (($handle = fopen($csvfile, "r")) !== FALSE) {
    // Skip the header row
    $header = fgetcsv($handle);

    // Prepare SQL query
    $sql = "INSERT INTO $tablename ( date, time, temp, humidity, wind, holiday, solar, delhi) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    while (($data = fgetcsv($handle)) !== FALSE) {
        // Bind parameters and execute the query
        $stmt->bind_param("ssssssss", $data[0], $data[1], $data[2], $data[3], $data[4], $data[5], $data[6], $data[7]);
        $stmt->execute();
    }

    // Close file and connection
    fclose($handle);
    $stmt->close();
}

$conn->close();
echo "Data imported successfully!";
?>
