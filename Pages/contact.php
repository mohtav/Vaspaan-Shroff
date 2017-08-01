<html>
<head><title>contact form</title>
</head>
<body>

  <?php


 $constants= parse_ini_file("email_config.ini");

  require '../Pages/PHPMailer-master/PHPMailerAutoload.php';

  $mail = new PHPMailer;
  $first_name = $_POST['fname'];
  $last_name = $_POST['lname'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];


  if(empty($_POST['fname']) || empty($_POST['lname']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) ){
    die();
  }

  //$mail->SMTPDebug = 3;                               // Enable verbose debug output

  $mail->isSMTP();                                      // Set mailer to use SMTP
  $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
  $mail->SMTPAuth = true;                               // Enable SMTP authentication
  $mail->Username = $constants['username'];                 // SMTP username
  $mail->Password = $constants['password'];                           // SMTP password
  $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
  $mail->Port = 587;                                    // TCP port to connect to

  $mail->setFrom($email,$first_name." ".$last_name);
  $mail->addAddress('info@vaspaanshroff.com', 'Vaspaan Shroff');     // Add a recipient
  // $mail->addAddress('ellen@example.com');               // Name is optional
  // $mail->addReplyTo('info@example.com', 'Information');
  // $mail->addCC('cc@example.com');
  // $mail->addBCC('bcc@example.com');

  // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
  // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
  $mail->isHTML(true);                                  // Set email format to HTML

  $mail->Subject = 'Message from Contact Form';
  $mail->Body    = "<html><body><table>
    <tr><td>
    First Name: ".$first_name."</td></tr>
    <tr><td>
    Last Name: ".$last_name."</td></tr>
    <tr><td>
    Email ID: ".$email."</td></tr>
    <tr><td>
    Message: ".$message." </td></tr>
    </table></body></html>";
  // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

  if(!$mail->send()) {
      echo 'Message could not be sent.';
      echo 'Mailer Error: ' . $mail->ErrorInfo;
  } else {
      echo 'We have received your email. Thank you !';
      // header("Location:index.html");
  }
?>

</body>
</html>
