<?php
$xyz=array("28.582090,77.326385","28.634394,77.332351","28.663280,77.368485","28.592397,77.371843","28.578548,77.365385");
$row = 0;


if (($handle = fopen("list.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);
		$name[$row]=$data[1];
		$address[$row]=$data[2];
		$contact[$row]=$data[3];
		$email[$row]=$data[4];
		$actual[$row]=$data[5];
		$discount[$row]=$data[6];
		$star[$row]=$data[7];
		$facility[$row]=$data[8];
			$des[$row]="";
			for($j=0;$j<$star[$row];$j++)
			$des[$row]=$des[$row].'<img src="images/star.png">';
			$row++;

    }
    fclose($handle);
	}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="robots"  content="index, follow"/>
        <title>JIIT-ICSC &raquo; International Conference on Signal Processing and Communication &raquo; Speakers</title>

<!--Start meta tag..--->
<meta name="Keywords" content="ICSC,International Conference,Signal Processing and Communication,ICSC 2015"/>
<meta name="robots" content="all"/>
<meta name="googlebot" content="index,follow,archive"/>
<meta name="msnbot" content="index,follow,archive"/>
<meta name="slurp" content="index,follow,archive"/>
<meta name="author" content="Shivam Khandelwal"/> 
<meta name="language" content="EN"/> 
<meta name="document-type" content="PUBLIC"/> 
<meta name="robots" content="index,follow"/>
<meta name="publisher" content="JIIT" />
<meta name="copyright" content="JIIT" />
<meta name="language" content="en" />
<meta name="revisit-after" content="1 days" />
<!--End meta tag.-->

     <style>
       html, body, #map {
         margin: 0;
         padding: 0;
         height: 100%;
       }
     </style>
     <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
<script>
var Center=new google.maps.LatLng(18.210885,-67.140884);
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  
var properties = {
    center:Center,
    zoom:20,
  //  mapTypeId:google.maps.MapTypeId.SATELLITE
};

map=new google.maps.Map(document.getElementById("map"), properties);
directionsDisplay.setMap(map);
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var marker=new google.maps.Marker({
position:Center,
icon: iconBase + 'hschools_maps.png'
//animation:google.maps.Animation.BOUNCE,
});

marker.setMap(map);
Route();
}



  
function Route() {

var start = new google.maps.LatLng(<?php echo $xyz[$_GET['id']];?>);
var end =new google.maps.LatLng(28.6302136,77.37171739999999);
var request = {
origin:start,
destination:end,
travelMode: google.maps.TravelMode.WALKING
 };
 directionsService.route(request, function(result, status) {
if (status == google.maps.DirectionsStatus.OK) {
  directionsDisplay.setDirections(result);
} else { alert("couldn't get directions:"+status); }
});
} 
<?php
function calculate_distance($lat1, $lon1, $lat2, $lon2, $unit='K') 
{ 
  $theta = $lon1 - $lon2; 
  $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta)); 
  $dist = acos($dist); 
  $dist = rad2deg($dist); 
  $miles = $dist * 60 * 1.1515;
  $unit = strtoupper($unit);

  if ($unit == "K") {
    return ($miles * 1.609344); 
  } else if ($unit == "N") {
      return ($miles * 0.8684);
    } else {
        return $miles;
      }
}
?>
google.maps.event.addDomListener(window,'load',initialize);
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41031324-1', 'jiit.com');
  ga('send', 'pageview');

</script>
<!--End ganalytic-->

                        <link rel="shortcut icon" href="favicon.ico" />
                

        <!-- ststylesheet -->
        <link rel="stylesheet" href="style.css" type="text/css" media="all" />
		

        
		<link rel="stylesheet" type="text/css" href="lib/css/shortcode.css" />

        <!-- javascript -->

	<script type="text/javascript" src="js/engine1/jquery.js"></script>
        <script src="js/jquery.hoverIntent.js" type="text/javascript"></script>
        <script src="js/jquery.superfish.js" type="text/javascript"></script>
        <script src="js/jquery.supersubs.js" type="text/javascript"></script>
        <script src="js/jquery.mosaic.1.0.1.min.js" type="text/javascript" ></script>
        <script src="js/jquery.lightbox.js" type="text/javascript" ></script>
        <script src="js/slides.min.jquery.js" type="text/javascript" ></script>
        <script src="js/settings.slider.js" type="text/javascript"></script>
        <script src="js/mobilyblocks.js" type="text/javascript"></script>
		<script src="js/jquery.tipsy.js" type="text/javascript"></script> <!--Tooltips-->
		<script src="js/jquery.prettyPhoto.js" type="text/javascript"></script>
        <script src="js/prettyPhoto.settings.js" type="text/javascript"></script>
		<script src="js/jquery.tabs.pack.js" type="text/javascript"></script>
		<script src="js/functions.js" type="text/javascript"></script>
        <script src="lib/js/meta.js" type="text/javascript"></script>
        <script src="lib/js/actions.js" type="text/javascript"></script>


        <!-- init ajaxurl -->
        <script type="text/javascript">
            var SL_BUTTONS      = true;
            var SL_PAGINATION   = false;
            var SL_SLIDESPEED   = 600;
            var SL_PLAYSPEED    = 5000;
            var SL_EFFECT       = 'slide, fade';
            var SL_RANDOMIZE    = true;
            var SL_PAUSE        = true;
                    </script>
		    </head>
    <body  class="archive post-type-archive post-type-archive-speaker logged-in larger" style="background-color:#4bb6e6 ; background-image: url(lib/images/pattern/pattern.flowers.png);" onload="initialize();calculateRoute('Noida City Center','Jaypee Institute of Information Technology");">
	<div class="b_body" id="wrapper" >
		<div class="b_body_c">
			<!--start header -->
			<div class="b_head clearfix" id="header">
				<div class="b_page clearfix">
					<div class="branding">
						<!-- logo -->
						<div class="logo b w_300">
															<h1>
								
										<img src="2015/04/Main1145.jpg" > 
								
								</h1>
													</div>
						<!-- social links -->


						<div class="headarea">
													</div>
					</div>
				</div>

				<div class="b_page z-index clearfix">
<div id="newmenu">
						<ul ><li><a href="index.php">Home</a></li>
<li><a href="call-for-paper.php">Call For Papers</a></li>
				<!--<li class='has-sub' style="background-color:rgb(240, 221, 187);"><a href="call-for-paper.php" id='new-skbly7' style="background:url('images/icon-new.gif') no-repeat right top;">Call For Papers</a>
<ul>
<li><a href="instructions.php">Instructions to Authors of Accepted Papers</a></li>
</ul></li>-->
<li><a href="speaker.php">Keynote Speakers</a></li>
<li class='has-sub'><a href="#">Program Chairs</a>
<ul>
	<li><a href="tracking-chair.php">Track Chair</a></li>
	<li><a href="session-chair.php">Session Chair</a></li>
		
</ul></li>
<li class='has-sub'><a href="#">Committees</a>
<ul>
	<li><a href="advisory-committee.php">Advisory Committee</a></li>
<li class='has-sub'><a href="#">Technical Program Committee</a>
	<ul>
		<li><a href="tpc-members.php">TPC Members</a></li>
		<li><a href="oversight-committee.php">Oversight Committee</a></li>
	</ul>
</li>	
<li><a href="organizing-committee.php">Organizing Committee</a></li>
	
</ul>
</li>
<li class='has-sub'><a href="#">Tours</a>
	<ul>
		<li><a href="around-delhi.php">Around Delhi</a></li>
		<li><a href="outside-delhi.php">Outside Delhi</a></li>
	</ul></li>
<li><a href="contact-us.php">Reach Us</a></li>
</ul>					</div>
					


					

					<!--signup form-->
					




				</div>



                <!-- slideshow -->

				<div class="b_page clearfix">
					<div class="b w_940">
						
<?php include "slider.php" ?>						
<br/>
<marquee behavior="alternate" style="font-family:calibri;font-size:15px;margin-top:-10px;" scrollamount="2"><b><?php $homepage = file_get_contents('notice.php');echo $homepage; ?></b></marquee>

	<script type="text/javascript" src="js/engine1/slider.js"></script>
	<script type="text/javascript" src="js/engine1/script.js"></script>
					</div>
				</div>
			</div><!-- end header-->
			
			<div class="b_content clearfix" id="main">
    <!-- Start content -->
	<?php
	if(!isset($_GET['id']))
	{
	?>
    <div class="b_page clearfix">
        <div id="content">
            <div class="b w_940">
                
											<h2 class="entry-title ">Keynote Speakers</h2>
<p><h3 style="font-family : calibri; font-size : 16px;">Brief Profile of Keynote Speakers with their vast research experience in various fields are listed below :</h3></p><br /><br />
				            </div>
            <!-- left sidebar -->
            
            <div class="b w_620 category">
			<ul class="xoxo">
			<li class="widget"><div class="b_text"><ul class="sponsors images ul shortcodes">
			<?php
			for($i=0;$i<$row;$i++)
			{
             echo '<li style="margin:0;padding-bottom:0;"><h4><a class="readmore" href="hotel.php?id='.$i.'">'.$name[$i].'</a></h4>'.$des[$i].'</li>';
			 
			 echo '<li  style="margin:0;"><span  class="exc"  style="text-align: justify;">'.$address[$i].'<br />'.$contact[$i].'</span>
			 <p class="button readmore hover margin15"><a href="hotel.php?id='.$i.'">See all details<span>&nbsp;</span></a></p></li>
';
}

?>	
</li>	<br/><br/>
                            
                </ul ></div></li></ul>
        </div>

        <!-- right sidebar -->
        <div id="primary"><!--right side--><div class="b w_300"><ul class="xoxo"><li id="registration-4" class="widget"><div class="registration"><p>2015 - ICSC</p><p class="desc">March 16 - 18, 2015</p><p class="exc">Jaypee Institute of Information Technology</p><p class="button hover blue register no_float"><a href="reg.php">register for the event<span>&nbsp;</span></a></p><div class="end">&nbsp;</div><!--ads the end background--></div></li></ul></div></div>
    </div>
	<?php
	} else if(isset($_GET['id']))
{
$id=$_GET['id'];
	?>
    <div class="b_page clearfix">
        <div id="content">
            <div class="b w_940">
                
											<h2 class="entry-title "><?php echo $name[$id].$des[$id];?></h2>
<p><h3 style="font-family : calibri; font-size : 16px;">Check out it's way from Jaypee :</h3></p>
      <div id="map" style="width:100%;height:300px;"></div>		<br/><br/>	</div>
            <!-- left sidebar -->

            <div class="b w_620 category">
			<ul class="xoxo">
			<li class="widget"><div class="b_text"><ul class="sponsors images ul shortcodes">
			<?php
			/*
			for($i=0;$i<$row;$i++)
			{
             echo '<li><h4><a class="readmore" href="hotel.php?id='.$i.'">'.$name[$i].'<span class="mosaic-overlay">&nbsp;</span></a></h4><span  class="exc"  style="text-align: justify;">
			 '.$des[$i].'<br/>'.$address[$i].'<br />'.$contact[$i].'</span>
			 <p class="button readmore hover margin15"><a href="hotel.php?id='.$i.'">See all details<span>&nbsp;</span></a></p></li>
';
}

'<br />'.$contact[$id].
*/
			echo '<li style="margin:0;padding-bottom:0;"><h4>Address :  </h4></li>';
			echo '<li  style="margin:0;"><span  class="exc"  style="text-align: justify;">'.$address[$id].'</span></li>';
			echo '<li style="margin:0;padding-bottom:0;"><h4>Contact :  </h4></li>';
			echo '<li  style="margin:0;"><span  class="exc"  style="text-align: justify;">'.$contact[$id].'<br />'.$email[$id].'</span></li>';
			echo '<li style="margin:0;padding-bottom:0;"><h4>Actual Rates :  </h4></li>';
			echo '<li  style="margin:0;"><span  class="exc"  style="text-align: justify;">'.$actual[$id].'</span></li>';
			if($discount[$id]=="NULL")
			{}
			else
			{
			echo '<li style="margin:0;padding-bottom:0;"><h4>Discounted Rates :  </h4></li>';
			echo '<li style="margin:0;"><span  class="exc"  style="text-align: justify;">'.$discount[$id].'</span></li>';
			}
			if($facility[$id]=="NULL")
			{}
			else
			{
			echo '<li style="margin:0;padding-bottom:0;"><h4>Services :  </h4></li>';
			echo '<li style="margin:0;"><span  class="exc"  style="text-align: justify;">'.$facility[$id].'</span></li>';
			}
?>	
</li>	<br/><br/>
                            
                </ul ></div></li></ul>
        </div>

        <!-- right sidebar -->
        <div id="primary"><!--right side--><div class="b w_300"><ul class="xoxo"><li id="registration-4" class="widget"><div class="registration"><p>2015 - ICSC</p><p class="desc">December 12 - 14, 2015</p><p class="exc">Jaypee Institute of Information Technology</p><p class="button hover blue register no_float"><a href="reg.php">register for the event<span>&nbsp;</span></a></p><div class="end">&nbsp;</div><!--ads the end background--></div></li></ul></div></div>
    </div>
	<?php
	}
	?>
</div>

			<!-- Start footer -->
			<div class="b_body_f clearfix" id="footer">
								<div class="b_f_c" style="background: #eef0f0 url(lib/images/pattern/pattern.flowers.png);">
                   <div class="b_page clearfix footer-area">
                        <div class="b w_300">
                            <ul>
<li class="widget"><div id="text-8" class="widget_text"><h5 class="widget-title">Conference Sponsors</h5><p class="delimiter">&nbsp;</p>			<div class="textwidget"><table style="float:left;"><tr><td><center>Technical Co-Sponsor<a href="#" ><img width="104" height="111" src="2015/05/ieeesponsor.jpg" alt="IEEE Delhi Section" style="border-radius:7px;" /></a></center></td><td><center>Financial Sponsor<br>
<a href="http://www.jiit.ac.in/" ><img width="104" height="111" src="2015/03/jiit3.png" class="attachment-300xXXX" alt="Jaypee"/></a></center></td>
</tr></table></div>
		</div></li></ul>                        </div>
                        <div class="b w_300">
                            <ul>
<li class="widget"><div id="text-6" class="widget_text"><h5 class="widget-title">Register</h5><p class="delimiter">&nbsp;</p>			<div class="textwidget">Registration is now open for Academicians, Professionals, Scholars and Students.<br>
<br><center><a href="reg.php">
<img src="2015/03/registrr-300x53.png" height="45" width="230" />
</a>
</center></div>
		</div></li></ul>                        </div>
                        <div class="b w_300"> 
                            <ul>
<li class="widget"><div id="text-5" class="widget_text"><h5 class="widget-title">Contact Us</h5><p class="delimiter">&nbsp;</p>			<div class="textwidget"><p>Jaypee Institute of Information Technology</p>
<img src="2015/04/contact-us-skbly71-150x150.png" width="100" height="100" alt="JIIT" style="float:right;" />
A - 10, Sector - 62, NOIDA—201507<br>
Email: samirdev.gupta@jiit.ac.in<br>
Website: www.jiit.ac.in<br>
EPBAX No.: 0120-2400973-976,987<br>
Direct No.: 0120- 2594322<br>
Fax: 0120-2400986, 0120-2401006</div>
		</div></li></ul>                        </div>
                    </div>
                    <div class="bottom">
                        <div class="b_page clearfix">
							<div class="b w_460">
																<p class="copyright">Copyright &copy;  <a href="http://www.jiit.ac.in/" target="_blank">JIIT</a>. Designed and Developed by <a href="http://www.shivamkhandelwal.in/" target="_blank">Shivam Khandelwal</a> and <a href="http://www.yogeshvijay.com/" rel="nofollow" target="_blank">Yogesh Vijay</a></p>
							</div>
							<div class="b w_460">
								<ul id="menu-footer" class="footer-menu"><li id="menu-item-348" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-348 first"><a href="index.php">Home</a></li>
<li id="menu-item-347" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-347"><a href="call-for-paper.php">Call For Papers</a></li>
<li id="menu-item-350" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-350"><a href="reg.php">Register</a></li>
<li id="menu-item-345" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-345"><a href="get-directions.php">Get Directions</a></li>
<li id="menu-item-349" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-349"><a href="#">Top</a></li>
</ul>							</div>
                        </div>
                    </div>
				</div>
            </div>
        </div>
    </div>
</body>
</html>