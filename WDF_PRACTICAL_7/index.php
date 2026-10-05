<!DOCTYPE html>
<html>

<head>

    <title>Student Registration</title>

    <style>

        body {
            font-family: Arial;
            background-color: lightblue;
            text-align: center;
        }

        .box {
            width: 400px;
            background-color: white;
            margin: 50px auto;
            padding: 25px;
            border-radius: 10px;
        }

        input {
            width: 90%;
            padding: 10px;
            margin: 10px;
        }

        input[type="submit"] {
            background-color: blue;
            color: white;
            border: none;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: darkblue;
        }

    </style>

</head>

<body>

    <div class="box">

        <h1>🎓 Student Registration</h1>

        <p>Enter your details below</p>

        <form action="process.php" method="POST">

            <input
                type="text"
                name="name"
                placeholder="Enter your name"
            >

            <br>

            <input
                type="email"
                name="email"
                placeholder="Enter your email"
            >

            <br>

            <input
                type="text"
                name="mobile"
                placeholder="Enter mobile number"
            >

            <br>

            <input
                type="text"
                name="course"
                placeholder="Enter course"
            >

            <br>

            <input
                type="submit"
                value="Register"
            >

        </form>

    </div>

</body>

</html>