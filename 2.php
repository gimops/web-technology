<?php
$nam=$_GET["nam"];
$email=$_GET["email"];
$txt=$_GET["txt"];
$db_host = "localhost";
$db_name = "galiya";
$db_user = "root";
$db_pass = "root";
$db = mysqli_connect ($db_host, $db_user, $db_pass, $db_name) or die ("Невозможно подключиться к БД");
mysqli_query ($db, "SET NAMES utf8");
$sql = "INSERT INTO firsts SET nam='$nam', email='$email', txt='$txt'";
mysqli_query($db, $sql);
$res = mysqli_query($db, "SELECT * FROM firsts ORDER BY id");
$arPosts = array();
if ($res){
    while($row = mysqli_fetch_assoc($res)){
        $arPosts[] = $row;
    }   
}
foreach ($arPosts as $article): 
     echo '<br><br><div style="border: 1px solid pink"><span style="font-weight: bold; color: black;">'.$article['nam'].'</span>, '.$article['email'].'<br>';
      echo '<p>'.$article['txt'].'</p></div>';
     endforeach; 
?>