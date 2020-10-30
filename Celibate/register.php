<?php
require 'db.php';
$sql = $conn;
function validateInput($input)
{
	global $sql;
	return $sql->real_escape_string(trim(htmlspecialchars(strip_tags($input))));
}

if (isset($_POST['notify-user'])) {
	extract($_POST);
	$email = validateInput($email);
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo json_encode("Please enter a valid email address");
	} else {
		$email_exists = $sql->query("SELECT email FROM users WHERE email = '$email'");
		if ($sql->affected_rows) {
			echo json_encode("This Email has already been registered");
		} else {
			$sql->query("INSERT INTO users (`email`) VALUES ('$email')");
			if ($sql->affected_rows) {
				echo json_encode("successful");
			}
		}
	}
}
