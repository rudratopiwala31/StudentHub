<?php

/* Check whether form was submitted using POST */

if ($_SERVER["REQUEST_METHOD"] == "POST") {


    /* Get form data */

    $name = $_POST["name"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $course = $_POST["course"];


    /* Remove extra spaces */

    $name = trim($name);
    $email = trim($email);
    $mobile = trim($mobile);
    $course = trim($course);


    /* Name validation */

    if ($name == "") {

        echo "<h2>Name is required.</h2>";
        echo "<a href='index.php'>Go Back</a>";
        exit;

    }


    /* Email validation */

    if ($email == "") {

        echo "<h2>Email is required.</h2>";
        echo "<a href='index.php'>Go Back</a>";
        exit;

    }


    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

        echo "<h2>Enter a valid email.</h2>";
        echo "<a href='index.php'>Go Back</a>";
        exit;

    }


    /* Mobile validation */

    if ($mobile == "") {

        echo "<h2>Mobile number is required.</h2>";
        echo "<a href='index.php'>Go Back</a>";
        exit;

    }


    if (!preg_match("/^[0-9]{10}$/", $mobile)) {

        echo "<h2>Enter a valid 10 digit mobile number.</h2>";
        echo "<a href='index.php'>Go Back</a>";
        exit;

    }


    /* Course validation */

    if ($course == "") {

        echo "<h2>Course is required.</h2>";
        echo "<a href='index.php'>Go Back</a>";
        exit;

    }


    /* Sanitize data */

    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $mobile = htmlspecialchars($mobile);
    $course = htmlspecialchars($course);


    /* Open CSV file */

    $file = fopen("students.csv", "a");


    /* Check whether file opened */

    if ($file == false) {

        echo "<h2>Error opening CSV file.</h2>";
        echo "<a href='index.php'>Go Back</a>";
        exit;

    }


    /* Create data array */

    $data = array(
        $name,
        $email,
        $mobile,
        $course
    );


    /* Write data to CSV */

    fputcsv($file, $data);


    /* Close file */

    fclose($file);


    /* Display success message */

    echo "<h2>Registration Successful!</h2>";

    echo "<p>Your data has been saved successfully.</p>";

    echo "<p><b>Name:</b> " . $name . "</p>";

    echo "<p><b>Email:</b> " . $email . "</p>";

    echo "<p><b>Mobile:</b> " . $mobile . "</p>";

    echo "<p><b>Course:</b> " . $course . "</p>";

    echo "<br>";

    echo "<a href='index.php'>Register Another Student</a>";

}

else {

    echo "<h2>Invalid Request</h2>";

    echo "<a href='index.php'>Go to Registration Form</a>";

}

?>