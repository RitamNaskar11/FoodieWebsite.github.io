<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname =  "user_auth";
$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
function clean_input($data)
{
  return htmlspecialchars(stripslashes(trim($data)));
}

$name     = clean_input ($_POST['name']);
$email    = clean_input ($_POST['email']);
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

// $allowed_domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];
// $domain = substr(strrchr($email, "@"), 1);
// if (!in_array($domain, $allowed_domains)) {
//   die("Email domain not allowed.");
// }

$sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $email, $password);

if ($stmt->execute()) {
    // echo "Registration successful. <a href='login.html'>Login here</a>";
} else {
    echo "Error: " . $conn->error;
}

$stmt->close();
$conn->close();
?>


<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Registration Successful</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(to right, #ff512f, #dd2476);
      color: white;
    }
    .card {
      background: #fff;
      padding: 40px;
      border-radius: 15px;
      text-align: center;
      color: #333;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
    .card h2 {
      color: #28a745;
    }
    .card a {
      display: inline-block;
      margin-top: 20px;
      text-decoration: none;
      background-color: #28a745;
      color: white;
      padding: 10px 25px;
      border-radius: 25px;
      font-weight: bold;
      transition: 0.3s;
    }
    .card a:hover {
      background-color: #218838;
    }
  </style>
</head>
<body>
  <div class='card'>
    <h2>🎉 Registration Successful!</h2>
    <p>You can now log in to your account.</p>
    <a href='login.html'>Go to Login</a>
  </div>
</body>
</html>
