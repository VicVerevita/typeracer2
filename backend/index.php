<?php

    include 'connection.php';

    $conn = OpenCon();

    $recUser = $_POST['username'];

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    else{
        $sql = "INSERT INTO request (Username, Highscore)
        VALUES ('$recUser')";

        if(mysqli_query($conn, $sql)){
            echo "Your request has been submited!";
        }
        else{
            echo "Error: ". $sql ."<br>". $conn->error;
        }
        CloseCon($conn);
    }

?>