<?php

if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {

    if (isset($_POST['organization']) && $_POST['organization'] != '' &&
        isset($_POST['phone']) && $_POST['phone'] != '' &&
        isset($_POST['email']) && $_POST['email'] != '' &&
        isset($_POST['website']) && $_POST['website'] != '' &&
        isset($_POST['activity']) && $_POST['activity'] != '') {

        echo 'success';

        $organization = htmlspecialchars($_POST['organization']);
        $phone = htmlspecialchars($_POST['phone']);
        $email = htmlspecialchars($_POST['email']);
        $website = htmlspecialchars($_POST['website']);
        $activity = htmlspecialchars($_POST['activity']);

        $to = 'antonprotsyuk@yandex.ru';

        $message = '
        
            Организация: '.$organization.'
            Телефон: '.$phone.'
            E-mail: '.$email.'
            Деятельность: '.$activity.'
            Сайт: '.$website.'

        ';

        $headers  = "From: antonprotsyuk@yandex.ru \r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        $subject = 'Регистрация: ' . $_POST['title'] . ' ';

        $subject = preg_replace("/(\r\n)|(\r)|(\n)/", "", $subject);
        $subject = preg_replace("/(\t)/", " ", $subject);
        $subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

        $result = mail($to, $subject, $message, $headers);

    } else {

        echo 'error';

    }

}