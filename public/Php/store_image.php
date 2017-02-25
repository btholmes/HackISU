<?php
/**
 * Created by IntelliJ IDEA.
 * User: btholmes
 * Date: 10/15/16
 * Time: 1:52 PM
 */
//require "connection.php";

//session_start();

define('DIRECTORY', './uploadedImages');


$data = file_get_contents("php://input");
$post = json_decode($data);
$image = $post->item;
$name = $post->name;
$desc = $post->description;
$id = $post->id;
$picType = $post->type;

$fileURL = DIRECTORY ."/$id.jpg";

$image = str_replace('data:image/jpeg;base64,', '', $image);
$image = str_replace('data:image/png;base64,', '', $image);
$image = str_replace('data:image/bmp;base64,', '', $image);
$image = str_replace(' ', '+', $image);


$imageData = base64_decode($image);

file_put_contents($fileURL, $imageData);
//chmod(DIRECTORY, 755);


$fileContents = file_get_contents("images.txt");
$comma = ",";

if(!$fileContents){
    $comma = "";
}


$userFile = "images.txt";
$handle = fopen($userFile, "a+");

$info = array('url' => $fileURL, 'description' => $desc, 'user' => "btholmes@iastate.edu", 'name' => $name, 'type' => $picType);

$info = json_encode($info);


//var_dump($info);

fwrite($handle, $comma . $info . "\n");

