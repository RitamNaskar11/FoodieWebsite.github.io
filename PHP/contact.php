<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    
if (!preg_match("/^[0-9]{10}$/", $phone)) {
  die("Phone number must be 10 digits.");
}


    // Connect to your database
    $conn = new mysqli("localhost", "root", "", "contact");

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO contact (name, email, phone, message) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $name, $email, $phone, $message);

    if ($stmt->execute()) {
        echo "<script>alert('✅ Feedback message sent successfully!'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('❌ Error: Feedback not sent.'); window.history.back();</script>";
    }

    $stmt->close();
    $conn->close();
}
?>
