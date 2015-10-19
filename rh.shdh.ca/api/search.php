<?php
   header('Content-type: application/json');

   $servername = "rhdb.shdh.ca";
   $username = "rhdb";
   $password = "_dubHacks2015*";
   $db = "resumehive";

   $conn = new mysqli($servername, $username, $password, $db);

   $searchTerm = mysqli_real_escape_string($conn, $_GET["term"]);

   if($conn->connect_error){
      die("Connection failed: " .$conn->connect_error);
   }else{
      $query = "SELECT filename, date_added, category FROM `files` ";
      $splitterms = explode(" ", $searchTerm);
      for($i = 0; $i < sizeof($splitterms); $i++){
         if($i == 0)
            $query = $query . "WHERE `fulltext` LIKE '%${splitterms[$i]}%' ";
         else
            $query = $query . "OR `fulltext` LIKE '%${splitterms[$i]}%' ";
      }
      //echo $query;
      $result = mysqli_query($conn, $query);
      $data = array();
      while($row = $result->fetch_row()){
         $array = array("name" => $row[0], "date" => $row[1], "category" => $row[2]);
         $data[] = $array;
      }
      echo json_encode(array("length" => sizeof($data), "data" => $data));
   }
?>
