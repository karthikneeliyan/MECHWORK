<?php
require_once 'PHPMailerAutoload.php';
error_reporting(E_ERROR | E_PARSE);
     // define variables and set to empty values
     $name = $email = $phone = $profile = $website = "";
         
     if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = test_input($_POST['name']);
        $email = test_input($_POST['email']);
        $phone = test_input($_POST["phone"]);
      
        
     }
     
     function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
     }

    $email_body = "Dear Team,<br><br>" . $name .
        " has requested for industrial visit. Below are the details,<br><br>" .
        "<b>Email Id:</b> " . $email . "<br><br>" .
        "<b>Contact:</b> " . $phone . "<br><br>" .
    "";
    sendMail($email, false, $email_body);
    sendMail($email, true, "Thank you for registering industrial visit. </b>For more details contact : themechwork@gmail.com");



function sendMail($email_id, $is_customerCopy, $email_body)
{
    $mail = new PHPMailer;
    $mail->SMTPDebug = 3;
    $mail->isSMTP();
    $mail->Host = 'sg3plcpnl0008.prod.sin3.secureserver.net';
    $mail->SMTPAuth = true;
    $mail->Username = 'sathishcp3691'; // This was my GoDaddy cPanel username
    $mail->Password = 'Password@123'; // And my GoDaddy cPanel password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    if ($is_customerCopy ) {
     $mail->setFrom('sg3plcpnl0008.prod.sin3.secureserver.net', 'The Mech Work');
        $mail->addAddress($email_id); // Add a recipient, Name is optional
        $mail->Body = $email_body;
    } else {
        $mail->setFrom('sg3plcpnl0008.prod.sin3.secureserver.net', 'Industrial Visit Request');
        $mail->addAddress('themechwork@gmail.com');
        if(is_array($_FILES)) {
            $mail->AddAttachment($_FILES['profile']['tmp_name'],$_FILES['profile']['name']); 
        }
        $mail->Body = $email_body;
    }
   
    $mail->isHTML(true);


    $mail->Subject = 'Industrial Visit';
    
    $myObj = new stdClass();
    if (!$mail->send()) {
        $myObj->flag = "failed";
        $myObj->code = 0000;
       // echo 'Mailer Error: ' . $mail->ErrorInfo;
       
    } else {
      
        $myObj->flag = "success";
    $myObj->code = 1000;
    }
    if(!$is_customerCopy)
    {
        echo json_encode($myObj);
        return json_encode($myObj);
    }
   
}
?>