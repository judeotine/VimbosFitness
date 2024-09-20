<?php

$to_email = 'vimbosfitness@gmail.com';
$subject = 'Contact Form Submission';


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    
    if (empty($name) || empty($email) || empty($message)) {
        $error = 'Please fill in all required fields.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'Invalid email address.';
    } else {
        
        $headers = 'From: ' . $email . "\r\n" .
            'Reply-To: ' . $email . "\r\n" .
            'MIME-Version: 1.0' . "\r\n" .
            'Content-Type: text/html; charset=UTF-8';
        $body = '<p>Name: ' . $name . '</p>' .
            '<p>Email: ' . $email . '</p>' .
            '<p>Website: ' . $website . '</p>' .
            '<p>Message: ' . $message . '</p>';
        if (mail($to_email, $subject, $body, $headers)) {
            
            header('Location: success.html');
            exit;
        } else {
            $error = 'Error sending email. Please try again.';
        }
    }
}
?>