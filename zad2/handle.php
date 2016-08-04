<?php
$words = ['week','job','sex','girl','roof','break','glass'];

if($_POST['num']){
	$num = $_POST['num'];
	$arr = [];

	for($x = 0; $x < $num; $x++){
		$arr [] = $words[$x];
	}
	
}

echo json_encode($arr);