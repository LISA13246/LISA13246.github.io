<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
   
   require 'phpmailer/src/Exception.php';
   require 'phpmailer/src/PHPMailer.php';

   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';
   $mail->setLanguage('ru', 'phpmailer/language/');
   $mail->isHTML(true);

   //Кому отправить
   $mail->addAddress('FitnessGumMsk@yandex.ru');

   //Тема письма
   $mail->Subject = 'Новое письмо!!!';

   //Тело письма
    $body = '<h1>Встречайте Супер письмо!</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong>'.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body.='<p><strong>Телефон:</strong>'.$_POST['phone'].'</p>';
    }
    if(trim(!empty($_POST['massege']))){
        $body.='<p><strong>Сообщение:</strong>'.$_POST['massege'].'</p>';
    }

    $mail->Body = $body;

    //Отправка
    if(!$mail->send()) {
        $mas = 'Ошибка';
    }else{
        $mas = 'данные отправлены';
    }

    $responce = ['massage' => $mas];
    header('Content-type: application/json');
    echo json_encode($responce);
?>



