<?php
            $Name = $_POST['Name'];
            $enquiry = $_POST['enquiry'];
            $Email = $_POST['Email'];
            $Phone = $_POST['Phone'];
            
            $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbName = "food";
        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
            $Select = "SELECT Email FROM contactus WHERE Email = ? LIMIT 1";
            $Insert = "INSERT INTO contactus(Name,enquiry,Email,phone) values(?, ?, ?, ?)";
            $stmt = $conn->prepare($Select);
            $stmt->bind_param("s", $Email);
            $stmt->execute();
            $stmt->bind_result($resultEmail);
            $stmt->store_result();
            $stmt->fetch();
            $rnum = $stmt->num_rows;
            if ($rnum == 0) {
                $stmt->close();
                $stmt = $conn->prepare($Insert);
                $stmt->bind_param("sssi",$Name,$enquiry,$Email,$Phone);
                if ($stmt->execute()) {
                    echo "New record inserted sucessfully.";
                }
                else {
                    echo $stmt->error;
                }
            }
            else {
                echo "Someone already registers using this email.";
            }
            $stmt->close();
            $conn->close();
        }
    