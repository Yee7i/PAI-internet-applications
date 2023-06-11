<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <meta charset='UTF-8' />
    </head>
    <body>
        <?php
            echo "<h1> Nasz system </h1>";

            if(isSet($_POST["Wyloguj"])){
                $_SESSION["zalogowany"] = 0;
                header("index.php");
            }
        ?>

        <form action="logowanie.php" method="post">
        Login: <input type="text" name="Login"><br>
        Hasło: <input type="password" name="Hasło"><br>
        <input type="submit" name="Zaloguj" value="Zaloguj">
        </form><br><br>

        <form action="cookie.php" method="get">
            Czas: <input type="number" name="czas"><br>
            <input type="submit" name="utworzCookie" value="Utwórz Cookie">
        </form><br><br>

        <?php
            if (iSset($_COOKIE["czas"])) {
                echo "Wartość ciasteczka: " . $_COOKIE["czas"];
            }
        ?>

    </body>
</html>
