<?php
$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userLink = $_POST['userLink'];
$userPhone = $_POST['userPhone'];
$userMessage = $_POST['userMessage'];
// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->CharSet = "UTF-8";
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.mail.ru';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'project1221@mail.ru';                     // SMTP username
    $mail->Password   = 'p12211991';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('project1221@mail.ru', 'Андрей');
    $mail->addAddress('andreysparrow91@rambler.ru');
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка сайта';
    $mail->Body    = "Имя пользователя: ${userName} </br>Телефон: ${userPhone} </br>Почта: ${userEmail} </br>Сообщение: ${userMessage} </br>Ссылка: ${userLink}";

    if ($mail->send()) {
      echo "OK";
        } else {
      echo "Форма не отправлена, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }

        } catch (Exception $e) {
}