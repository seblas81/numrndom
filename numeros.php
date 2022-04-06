<?php

ini_set('max_execution_time', '03');
set_time_limit(02);

//print_r($numeros);


$anteriores = [];
for ($i=0; $i<6; $i++){
    
    
         $numeros2= mt_rand(0,45);
        while (in_array($numeros2,$anteriores)) {
            $numeros= mt_rand(0,45);
        }
        
        array_push($anteriores,$numeros2);
        //echo "$numeros2" ;
        
        //echo json_encode($numeros2);
         
        }
     
       echo json_encode($anteriores);
    //print_r($anteriores);
    
?>