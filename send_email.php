<?php
  $to_email = 'vimbosfitness@gmail.com';
  $subject = 'New Booking Request';

  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $date = $_POST['date'];
  $activity = $_POST['activity'];
  $message = $_POST['message'];

  $email_body = "Name: $name\n";
  $email_body .= "Email: $email\n";
  $email_body .= "Phone: $phone\n";
  $email_body .= "Date: $date\n";
  $email_body .= "Activity: $activity\n";
  $email_body .= "Message: $message\n";

  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  mail($to_email, $subject, $email_body, $headers);

  echo '<script>alert("Sent successfully! ");</script>';
  echo '<i class="fa fa-check-circle" style="color: orange;"></i>';
?>