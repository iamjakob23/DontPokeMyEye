<!--Don't poke my eye - game
by: Jakob
www.iamjakob.com-->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
        <title>Don't Poke My Eye</title>
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/custom.css">
        <script src="js/jquery.js"></script>
        <script src="js/pokeMain.js"></script>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <?php
        $ua = $_SERVER['HTTP_USER_AGENT'];
        $iphone = strpos($ua, "iPhone");
        $safari = strpos($ua, "Safari");
        if ($iphone == true && $safari == false) {
            echo '<style type="text/css"> div#statusbar{ 
                    background: darkgray; height: 35pt; width:950px; 
                    position:-webkit-sticky; top:0;} </style>';
        } else {
            echo '<style type="text/css"> div#sidebar{ display:none;} </style>';
        }
        ?>
    </head>
    <body>
        <!--INCLUDES THE NAVIGATION BAR-->
        <?php include 'navigation.php' ?>
        <!--MAIN BODY SECTION-->
        <div id="centerize">
            <div class="container-fluid" id="mainBody">
                <div class="panel" id="mainPanel">
                    <div class="panel-heading">
                        <h2 class="panel-title" id="panelTitle">
                            Don't Poke My Eye
                        </h2>
                    </div>
                    <div class="panel-body" id="panelBottom">
                        <div class="mainContainer">
                            <div class="col-md-12" id="leftColumn">
                                <div class="userImage" id="userImage1">
                                    <img src="img/b1.PNG">
                                </div>
                                <div class="userImage"  id="userImage2">
                                    <img src="img/b1.PNG">
                                </div>
                                <div class="userImage"  id="userImage3">
                                    <img src="img/b1.PNG">                                
                                </div>
                                <div class="compImage"  id="compImage1">
                                    <img src="img/r1.PNG">
                                </div>
                                <div class="compImage"  id="compImage2">
                                    <img src="img/r1.PNG">
                                </div>
                                <div class="compImage"  id="compImage3">
                                    <img src="img/r1.PNG">
                                </div>
                                <div class="compImage"  id="compImage4">
                                    <img src="img/r1.PNG">
                                </div>
                                <div class="compImage"  id="compImage5">
                                    <img src="img/r1.PNG">
                                </div>
                                <div id="userArrowImageR">
                                    <img src="img/arrowR.PNG">
                                </div>
                                <div id="compArrowImageL">
                                    <img src="img/arrowL.PNG">
                                </div>
                                <br/><br/><br/><br/><br/><br/><br/><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span>
                <button class="btn btn-default" id="level1">Easy</button>
                <button class="btn btn-default" id="level2">Hard</button>
                <button class="btn btn-default" id="level3">Hardest</button>
                <button class="btn btn-default" id="reset">Reset</button>
            </span>
        </div>
        <!--END OF MAIN BODY SECTION-->

        <!--INCLUDES THE FOOTER INFO-->
        <?php include 'footer.php' ?>
        <script src="https://code.jquery.com/jquery.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="/twitter-bootstrap/twitter-bootstrap-v2/js/bootstrap-tooltip.js"></script>
        <script>
            $(function()
            {
                $("#footPopover").popover();
            });
            $(function()
            {
                $("#headPopover").popover();
            });
        </script>
    </body>
</html>
