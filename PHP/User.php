<?php

 

include_once ("PDO.php");

 

class User
{
    public function __construct($username, $password, $email, $admin = NULL)
    {
        $this->name = $username;
        $this->password = $password;
        $this->email = $email;
        $this->admin = $admin;

 

        $database_connection = connect_db("localhost","root", NULL, 3306,"pool_php_rush");
        $query = "INSERT INTO users (username, password, email, admin) VALUES ('$username', '$password', '$email', 0);"; //WHERE NOT EXISTS 
        $database_connection->query($query);
        
    }

 

    //GETTER ---------------------------------------------------

 

    public function getName()
    {
        return $this->name;
    }

 

    public function getMail()
    {
        return $this->email;
    }
}

 

?>