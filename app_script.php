<?php

	if (isset($_POST['send'])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$address = $_POST['address'];
		$country = $_POST['country'];
		$city = $_POST['city'];
		$cell = $_POST['cell_number'];
		$phone = $_POST['phone_number'];
		$degree = $_POST['deg_comp'];
		$degree_title = $_POST['deg_title'];
		
$msg = '
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="ie=edge">
			<title>Document</title>
			<style> td { padding: 15px 10px; } </style>
		</head>
		<body>
			
			<table border="2" width="100%">
				<tr> <td colspan="2" ><img src="http://www.trexpert.com.pk/imgs/1.png" alt="" width="210px;"></td> </tr>
				<tr> <td colspan="2" style="text-align: center;"> <h2>JOB APPLICATION</h2> </td> </tr>
				<tr> <td colspan="2" style="text-align: center;"><b> Personal Information</b></td> </tr>
				<tr> <td width="50%">Name</td> <td>' . $name . '</td> </tr>
				<tr><td width="50%">Email</td><td>' . $email . '</td></tr>
				<tr><td colspan="2" style="text-align: center;"><b>Contact Details</b></td></tr>
				<tr><td width="50%">Address</td><td>' . $address . '</td></tr>
				<tr><td width="50%">Country</td><td>' . $country . '</td></tr>
				<tr><td width="50%">City</td><td>' . $city . '</td></tr>
				<tr><td width="50%">Cell Number</td><td>' . $cell . '</td></tr>
				<tr><td width="50%">Phone Number</td><td>' . $phone . '</td></tr>
				<tr><td colspan="2" style="text-align: center;"><b>Qualifications Details</b></td></tr>
				<tr><td width="50%">Where did you completed your degree?</td><td>' . $degree . '</td></tr>
				<tr><td width="50%">Title of your degree:</td><td>' . $degree_title . '</td></tr>
			</table>
		</body>
		</html>
';

$to = 'marsleathercorporation@gmail.com';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

$headers .= 'From: <jobs@marsleathercorporation@gmail.com>' . "\r\n";

mail($to,'JOB CV',$msg,$headers);
		
	}

?>

<script>
alert('Your Application successfully submitted');
window.location.href = "app.php";
</script>