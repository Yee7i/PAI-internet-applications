<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <meta charset='UTF-8' />
    </head>
    <body>
        <?php
        if (isset($_GET["czas"])) {
            setcookie("czas", $_GET["czas"], time() + $_GET["czas"], "/");
        }
        echo "Zapisano cookie<br>";
         ?>

         <a href="index.php">Wróć do strony głównej</a>
    </body>
</html>
