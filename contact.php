<?php
		// php code for sending email

    // only process POST reqeusts
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // get the form fields and remove whitespace
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        // ceck that data was sent to the mailer
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // set a 400 (bad request) response code and exit
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // set the recipient email address
        $recipient = "antonio.zdelican@gmail.com";

        // set the email subject
        $subject = "New contact from $name";

        // build the email content
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";

        // build the email headers
        $email_headers = "From: $name <$email>";

        // send the email
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // set a 200 (okay) response code
            http_response_code(200);
            echo "Thanks! Your message has been sent.";
        } else {
            // set a 500 (internal server error) response code
            http_response_code(500);
            echo "Oops! Something went wrong, please try again.";
        }

    } else {
        // not a POST request, set a 403 (forbidden) response code
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>