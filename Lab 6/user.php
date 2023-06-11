<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <meta charset='UTF-8' />
    </head>
    <body>

        <?php
            if ($_SESSION["zalogowany"] != 1) 
            {
                header("Location: index.php");
            }

            echo "Użytkownik: " . $_SESSION["zalogowanyImie"] . "<br>";
        ?>

        <form action="index.php" method="post">
            <input type="submit" value="Wyloguj">
        </form><br>

        <form action='user.php' method='POST' enctype='multipart/form-data'>
            <input type="file" name="upload" value="Wybierz plik">
            <input type="submit" value="Upload">
        </form><br>

        <?php
        if (isset($_FILES["upload"])) {
            $currentDir = getcwd();
            $fileType = $_FILES["upload"]["type"];
            if ($_FILES["upload"]["name"] != "" &&
            ($fileType == 'image/png' || $fileType == 'image/jpeg' ||
            $fileType == 'image/PNG' || $fileType == 'image/JPEG')){
                move_uploaded_file($_FILES["upload"]["tmp_name"], $currentDir."/cherry.png");
                    echo "Zdjęcie zostało załadowane na serwer";
            }
        }
        ?>
        <img src="cherry.png" alt="Nie ma zdjęcia">
    </body>
</html>
