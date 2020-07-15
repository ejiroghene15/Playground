<?php
header("Access-Control-Allow-Origin: *");
define("HOST", "localhost");
define("DB_USER", "id14347489_root");
define("DB_PASSWORD", "-!M96PQ=lv9zJ@bL");
define("DATABASE", "id14347489_celibate");

$sql = new mysqli(HOST, DB_USER, DB_PASSWORD, DATABASE);
if ($sql->connect_errno) {
	echo "Could not connect to database";
}

function validateInput($input)
{
	global $sql;
	return $sql->real_escape_string(trim(htmlspecialchars(strip_tags($input))));
}

if (isset($_POST['notify-user'])) {
	extract($_POST);
	$email = validateInput($email);
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo "Please enter a valid email address";
	} else {
		$email_exists = $sql->query("SELECT email FROM users WHERE email = '$email'");
		if ($sql->affected_rows) {
			echo "This Email has already been registered";
		} else {
			$sql->query("INSERT INTO users (`email`) VALUES ('$email')");
			if ($sql->affected_rows) {
				echo "successful";
			}
		}
	}
}
