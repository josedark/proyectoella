<?php 

$maindir = "";
ini_set('display_errors', 1); 
error_reporting(E_ALL);

require_once("../conexion/config.inc.php");
require_once("../Seguridad/segurida.php");

if(empty($_POST['username']) && empty($_POST['password']))
{  
  header('Location: '.$maindir.'index.php');
  
}
else
{
  $LoginUsuario = $_POST['username'];
  $LoginPassword = $_POST['password'];
  
}
 



try{
	     if (true) {
         
        try {

            $stmt = $db->query("select * from usuario");
            


              while($row = $stmt->fetch(PDO::FETCH_ASSOC)) 
                {  
                  echo $row['idusuario'];
                  echo $row['nombrepersona'];
                  echo $row['nombreusuario'];
                  echo $row['conectado'];

                   

                };


          }catch (PDOException $e){
         echo $e->getMessage();
          
        }

       
        
        


       } else {
        

       






       }
       







    }
    catch(PDOExecption $e)
    {
      
      

       exit();
       //die("We are unable to process your request. Please try again later");
    } 

































 ?>