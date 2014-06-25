<?php
echo '
<link href="http://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet" type="text/css">
<a href="index.php"><h1 style="color:rgba(100,100,100,0.6);margin-left:17%;font-size:32px;float:left;margin-right:3%">Siddharth Chaudhary</h1></a>
<nav style="margin-top:-10px;margin-left:29%;">
    <ul id="menu">
        <li><a href="index.php">Home</a></li>
        <li><a href="weddings.php">Weddings</a></li>
        <li><a href="#" id="special">Portfolios</a>
			<ul class="sub-menu">
            <li>
                <a href="models.php">Models</a>
            </li>
            <li>
                <a href="kids.php">Kids</a>
            </li>
            <li>
        </ul></li>
        <li><a href="about.php">About Us</a></li>
        <li><a href="contact.php">Contact Us</a></li>
    </ul>
</nav>
';
if(isset($_GET['c']))
{
echo '<hr style="margin-bottom:-35px;clear:both;"></hr>';
}
else
echo '<hr style="clear:both;margin-bottom:-50px;"></hr>';
?>