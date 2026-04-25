<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $mail = new PHPMailer(true);

    try {
        // 🔧 CONFIG SMTP GMAIL
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'fehistephane@gmail.com'; // 🔴 ton Gmail
        $mail->Password = 'MOT_DE_PASSE_APP';    // 🔴 mot de passe d’application
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // 📧 DESTINATAIRE
        $mail->setFrom($email, $name);
        $mail->addAddress('fehistephane@gmail.com'); // 🔴 réception

        // CONTENU
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "
            <h3>Nouveau message AID</h3>
            <p><strong>Nom:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong><br>$message</p>
        ";

        $mail->send();
        echo "Message envoyé avec succès !";

    } catch (Exception $e) {
        echo "Erreur : {$mail->ErrorInfo}";
    }
}
?>