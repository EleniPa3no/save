<?php

if (!empty($_POST['myname'] && $_POST['myemail'] && $_POST['mysubject'] && $_POST['mytext'])){

$name = $_POST['myname'];
$email = $_POST['myemail'];
$subject = $_POST['mysubject'];
$messagei = $_POST['mytext'];


$domain = substr($email, strpos($email, '@') + 1);
     
    $headers = 'From:' .$email. "."; 
    // $headers .= 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    
	$to = 'petritlame@live.com';
	$subject = 'The subject:' .$subject. "";
	$message = '<html><body>';
    $message .= '<h3> FROM: ' .$name. '</h3>';
    $message .= '<p style="font-size:18px;">Email: ' .$email. '</p><br>';
    $message .= '<p style="font-size:18px;">Message: ' .$messagei. '</p>';
    $message .= '</body></html>';
	

if (checkdnsrr($domain) == FALSE) {
	echo "<p style='font-weight: bold; color: #cb2211'>Please enter a valid email!</p>
	";
}
else{ 

	echo "<p style='font-weight: bold; color: #cb2211;'>Your email was sent!</p>";
    mail($to, $subject, $message, $headers) or die("Error!"); 
	
}	
}

else{
	echo "<p style='font-weight: bold; color: #cb2211'>Please fill all fields!</p>";
}

?>
