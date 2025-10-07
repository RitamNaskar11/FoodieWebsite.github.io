<?php

$host = "localhost";
$username = "root";
$password = "";
$dbname = "bookings";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

function clean_input($data)
{
  return htmlspecialchars(stripslashes(trim($data)));
}

$name = clean_input($_POST['name']);
$phone = clean_input($_POST['phone']);
$email = clean_input($_POST['email']);
$date = clean_input($_POST['date']);
$time = clean_input($_POST['time']);
$city = clean_input($_POST['city']);
$state = clean_input($_POST['state']);
$message = clean_input($_POST['message']);


if (!preg_match("/^[a-zA-Z\s]+$/", $name)) {
  die("Invalid name format.");
}
if (!preg_match("/^[a-zA-Z\s]+$/", $city)) {
  die("Invalid city format.");
}
// if (!preg_match("/^[a-zA-Z\s]+$/", $state)) {
//   die("Invalid state format.");
// }


if (!preg_match("/^[0-9]{10}$/", $phone)) {
  die("Phone number must be 10 digits.");
}





$birthYear = date('Y', strtotime($date));
$currentYear = date('Y');
$age = $currentYear - $birthYear;
if ($age < 18) {
  die("You must be at least 18 years old.");
}

$sql = "INSERT INTO table_bookings (name, phone, email, date, time, city, state, message) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssssss", $name, $phone, $email, $date, $time, $city, $state, $message);

if ($stmt->execute()) {
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Booking Successful</title>

  <!-- Auto Redirect after 5 seconds -->
  <meta http-equiv="refresh" content="5;url=index.html">

  <style>
    body {
      background: linear-gradient(to right, #f8c3b0, #f6d8c7);
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .card {
      background-color: white;
      padding: 30px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      text-align: center;
      max-width: 400px;
    }

    .card img {
      width: 60px;
      margin-bottom: 20px;
    }

    .card h1 {
      color: green;
    }

    .card p {
      color: #333;
      margin-bottom: 20px;
    }

    .home-btn {
      background-color: #f44336;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .home-btn:hover {
      background-color: #d32f2f;
    }
  </style>
</head>
<body>
  <div class="card">
    <img src="https://img.icons8.com/clouds/100/000000/checked.png" alt="Success">
    <h1>Booking Successful!</h1>
    <p>Thank you for booking with <strong>Foodie</strong>. Your table is reserved.<br>
       We look forward to serving you!</p>
    <button class="home-btn" onclick="window.location.href='index.html'">← Back to Home</button>
  </div>
</body>
</html>
