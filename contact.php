<?php

if (!empty($_POST['firstname'] && $_POST['lastname'] && $_POST['email'] && $_POST['phone'] && $_POST['message']  )){


		$firstname = $_POST['firstname'];
		$lastname = $_POST['lastname'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$message= $_POST['message'];

	$domain = substr($email, strpos($email, '@') + 1);
     
    $headers = 'From:' .$email. "."; 
    // $headers .= 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    
	$to = 'gjorgjiametellari@gmail.com';
	$message = 'The subject:' .$firstname. "";
	$message = '<html><body>';
    $message .= '<h3> FROM: ' .$message. '</h3>';
    $message .= '<p style="font-size:18px;">Email: ' .$email. '</p><br>';
    $message .= '<p style="font-size:18px;">Message: ' .$message. '</p>';
    $message .= '</body></html>';
	

if (checkdnsrr($domain) == FALSE) {
	echo "<p style='font-weight: bold; color: #cb2211'>Please enter a valid email!</p>
	";
}
else{ 

	echo "<p style='font-weight: bold; color: #cb2211;'>Your email was sent!</p>";
    mail($to, $message, $headers) or die("Error!"); 
	
}	
}

else{
	echo "<p style='font-weight: bold; color: #cb2211'>Please fill all fiels!</p>";
}

	
?>