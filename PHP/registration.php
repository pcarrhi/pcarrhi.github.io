<?php

include_once ("PDO.php");
include_once ("User.php");
 

session_start();


function userParametersCheck($name, $email, $password, $password_confirmation)
{
    $result = true; 

    if($name)
    {
        $database_connection = connect_db("localhost","root", NULL, 3306,"pool_php_rush");
        $check_username_query = "SELECT * FROM users WHERE username = $name";
        $username_query = $database_connection->query($check_username_query);

 

        if($username_query->rowCount() > 0)
        {
            $result = FALSE;
        }  
    }

    if($email)
    {
        $database_connection = connect_db("localhost","root", NULL, 3306,"pool_php_rush");
        $check_email_query = "SELECT * FROM users WHERE email = '$email'";
        $email_query = $database_connection->query($check_email_query);

 

        if($email_query->rowCount() > 0)
        {
            $result = FALSE;
        }
    }


    if($password != $password_confirmation)
    {
        $result = FALSE;
    }
    return $result;

}

 

$name = $_POST["name"];
$email = $_POST["email"];
$password = md5($_POST["password"]);
$password_confirmation = md5($_POST["password_confirmation"]);
$admin= false;

 

if(userParametersCheck($name, $email, $password, $password_confirmation)==TRUE)
{
    $user = new User($name, $password, $email, $admin);
    $_SESSION['email'] = $email;
}

 

?>