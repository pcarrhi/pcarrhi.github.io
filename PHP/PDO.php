<?php
 
//PDO

const ERROR_LOG_FILE="error_file";
 
function connect_db($host, $username, $passwd, $port, $db)
{   
    try {
        $connection = new PDO("mysql:host=$host; dbname=$db; port=$port", $username, $passwd);
        
       // $query2 = "INSERT INTO users (username, password, email, admin) VALUES ('Fab', '123456', 'email2@email.com', '0');
       // $connection->exec($query2);
      
    }
    catch (PDOException $e)
    {
        $e->getMessage();
        error_log($e, 3, ERROR_LOG_FILE);
        echo "PDO ERROR:" .$e. "storage in" . ERROR_LOG_FILE;
    }
    return $connection;
}

//$database_connection = connect_db("localhost","root", NULL, 3306,"pool_php_rush");


?>
