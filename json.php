<?php
include('conn.php');

$sql = "select * from reqs";
$result = mysqli_query($conn, $sql) or die ("error".mysqli_error($conn));
$myArray = array();
    while($row = mysqli_fetch_assoc($result)) {
        $myArray[] = $row;
    }
mysqli_close($conn);


header("Content-type: application/json");
//$json = file_get_contents('json.json');



//$myArray = array("record1"=>array("College" => "Daniel Felix Ritchie", "Department" => "Engineering", "Degrees"=>"Doctoral, Master's"));
$json = json_encode($myArray);
echo $json;
?>