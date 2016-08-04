<?php
$numArray = new Array(10);

for($x = 0; $x < 10; $x++){
	$numArray[$x] = mt_rand(0,15);
}

echo json_encode($numArray);

?>