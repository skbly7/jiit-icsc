<!DOCTYPE html>
<meta charset='utf-8'> 
<html>
<head>
	<title>Siddharth Chaudhary Portfolio - Kids</title>

	<link rel="Stylesheet" type="text/css" href="css/main.css" />
	<link rel="Stylesheet" type="text/css" href="css/page.css" />
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<script src="js/modernizr.custom.63321.js"></script>
	
	<!-- the CSS for Smooth Div Scroll -->
	<link rel="Stylesheet" type="text/css" href="css/smoothDivScroll.css" />
	<link rel="Stylesheet" type="text/css" href="css/colorbox.css" />
	
	<!-- Styles for my specific scrolling content -->
	<style type="text/css">

		#makeMeScrollable
		{
			width:100%;
			height: 400px;
			position: relative;
		}
	
		#makeMeScrollable div.scrollableArea a
		{
			position: relative;
			float: left;
			margin: 0;
			padding: 5px;
			-webkit-user-select: none;
			-khtml-user-select: none;
			-moz-user-select: none;
			-o-user-select: none;
			user-select: none;
		}
	</style>

</head>

<body>

<?php include('header.php');
$img = array("images/kids/1.jpg",
"images/kids/2.jpg",
"images/kids/3.jpg",
"images/kids/4.jpg",
"images/kids/5.jpg",
"images/kids/6.jpg",
"images/kids/7.jpg",
"https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-ash3/t1.0-9/67813_631486750196041_343469095_n.jpg",
"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-ash2/t1.0-9/484724_631486766862706_2080517877_n.jpg",
"https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-frc3/t1.0-9/992878_635420566469326_1917185848_n.jpg",
"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-frc3/t1.0-9/1044372_635420906469292_29765139_n.jpg",
"https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-prn1/t1.0-9/44523_635421629802553_952541789_n.jpg",
"https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-prn1/t1.0-9/1017382_635421483135901_1647599055_n.jpg"
	);

?>	<div id="makeMeScrollable">

<?php

$i=count($img);
for($j=0;$j<$i;$j++)
{
echo '<a class="gallery" href="'.$img[$j].'"><img src="'.$img[$j].'" height=400px alt="misc image 1" id="field" /></a>';
}

?>
	</div>

	<div>
 <footer>
      </footer>
	  </div>
	<!-- LOAD JAVASCRIPT LATE - JUST BEFORE THE BODY TAG 
	     That way the browser will have loaded the images
		 and will know the width of the images. No need to
		 specify the width in the CSS or inline. -->

	<!-- jQuery library - Please load it from Google API's -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js" type="text/javascript"></script>

	<!-- jQuery UI Widget and Effects Core (custom download)
	     You can make your own at: http://jqueryui.com/download -->
	<script src="js/jquery-ui-1.8.23.custom.min.js" type="text/javascript"></script>
	
	<!-- Latest version (3.0.6) of jQuery Mouse Wheel by Brandon Aaron
	     You will find it here: http://brandonaaron.net/code/mousewheel/demos -->
	<script src="js/jquery.mousewheel.min.js" type="text/javascript"></script>

	<!-- jQuery Kinectic (1.5) used for touch scrolling -->
	<script src="js/jquery.kinetic.js" type="text/javascript"></script>

	<!-- Smooth Div Scroll 1.3 minified-->
	<script src="js/jquery.smoothdivscroll-1.3-min.js" type="text/javascript"></script>

	<!-- Colorbox -->
	<script src="js/jquery.colorbox-min.js" type="text/javascript"></script>	
	<!-- If you want to look at the uncompressed version you find it at
	     js/jquery.smoothDivScroll-1.3.js -->

	<!-- Plugin initialization -->
	<script type="text/javascript">
		// Initialize the plugin with no custom options
		$(document).ready(function () {
			// None of the options are set
			$("div#makeMeScrollable").smoothDivScroll({
				autoScrollingMode: "",
		mousewheelScrolling: "allDirections",
		manualContinuousScrolling: true

			});
	// Init colorbox
	$("#makeMeScrollable a").colorbox({ opacity:0.9 ,
	rel:'group1', maxHeight:"80%", maxWidth:"90%" });
		});
	</script>
</body>
</html>
