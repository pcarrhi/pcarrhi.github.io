<?php 

if(!isset($_SESSION['email']))
{
    header('Location:userform_login.html');
}

?>

<h1>I'm the index and I'm <?= $_SESSION['email'] ?></h1>