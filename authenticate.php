<?php

    $con = mysqli_connect('localhost', 'root', '', 'patternprotector');
    $data = json_decode(file_get_contents("php://input"), true);

    if($con)
    {
        $sql = "SELECT * FROM user where email = '" . $data['email']. "' and pattern = '" . $data['pattern'] . "'";

        $result = mysqli_query($con, $sql);

        if($row = mysqli_fetch_assoc($result))
        {
            echo $row['name'];
        }
        else
        {
            echo false;
        }
    }
    else
    {
        echo "Couldn't connect with database";
    }



?>