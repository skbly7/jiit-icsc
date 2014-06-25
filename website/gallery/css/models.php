<!DOCTYPE html>
<meta charset='utf-8'> 
<html>
<head>
	<title>Siddharth Chaudhary Portfolio - Portfolios</title>

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
$img = array("images/portfolio/1.jpg",
"images/portfolio/2.jpg",
"images/portfolio/3.jpg",
"images/portfolio/4.jpg",
"images/portfolio/5.jpg",
"images/portfolio/6.jpg",
"images/portfolio/7.jpg",
"images/portfolio/8.jpg",
"images/portfolio/9.jpg",
"https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-ash2/t1.0-9/185114_504870699524314_574829062_n.jpg",
"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-ash2/t1.0-9/487026_504366539574730_1849870803_n.jpg",
"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-frc3/t1.0-9/305791_314734048537981_885835119_n.jpg",
"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-ash2/t1.0-9/393275_314095545268498_20226581_n.jpg",
"https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-ash2/t1.0-9/383112_314240511920668_1739784773_n.jpg",
"https://scontent-a-sin.xx.fbcdn.net/hphotos-ash2/t1.0-9/377974_314734618537924_341846040_n.jpg",
"https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-ash2/t1.0-9/419674_354214827923236_1691727152_n.jpg",
"https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-frc3/t1.0-9/484946_524674107543973_615872706_n.jpg",
"https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-prn1/t1.0-9/67860_525108944167156_153701955_n.jpg",
"https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-ash4/t1.0-9/1069886_638095679535148_1351855486_n.jpg"
	);

?>	<div id="makeMeScrollable">

<?php
$i=count($img);
for($j=0;$j<$i;$j++)
{
echo '<a class="fancybox" data-fancybox-group="gallery" href="'.$img[$j].'"><img src="'.$img[$j].'" height=400px alt="misc image 1" id="field" /></a>';
}

?>
	</div>

	<div>
 <footer>
      </footer>
	  </div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js" type="text/javascript"></script>
	<script src="js/jquery-ui-1.8.23.custom.min.js" type="text/javascript"></script>
	<script src="js/jquery.mousewheel.min.js" type="text/javascript"></script>
	<script src="js/jquery.kinetic.js" type="text/javascript"></script>
	<script src="js/jquery.smoothdivscroll-1.3-min.js" type="text/javascript"></script>
	<script type="text/javascript" src="js/jquery.fancybox.js?v=2.1.5"></script>
	<link rel="stylesheet" type="text/css" href="css/jquery.fancybox.css?v=2.1.5" media="screen" />
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
			
			$('.fancybox').fancybox();
			$(".fancybox-effects-a").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});
		});	
	</script>
</body>
</html>
