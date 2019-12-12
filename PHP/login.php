<?php

include_once ("PDO.php");

function login($email, $password)
{

    $email = $_POST["email"];
    $password = md5($_POST["password"]);

    if(isset($_POST["email"]) && isset($_POST["password"]))
    {
        $database_connection = connect_db("localhost","root", NULL, 3306,"pool_php_rush");
        $getHashPass = "SELECT password FROM users WHERE email = '$email';";
        $passCheck = $database_connection->query($getHashPass);
        $dbPass=NULL;

        foreach($passCheck as $value)
        {
            $dbPass = ($value['password']);
        }

        if($password == $dbPass)
        {
            session_start();
            echo "Hello";
    
        }
        else
        {
            header('Location:userform_login.html');
        }
    
    }
}

login($_POST["email"],$_POST["password"]);


?>

