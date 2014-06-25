<!DOCTYPE html>
<meta charset='utf-8'> 
<html>
<head>
	<title>Siddharth Chaudhary Portfolio - Weddings</title>

	<link rel="Stylesheet" type="text/css" href="css/main.css" />
	<link rel="Stylesheet" type="text/css" href="css/page.css" />
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<script src="js/modernizr.custom.63321.js"></script>
	<link rel="Stylesheet" type="text/css" href="css/smoothDivScroll.css" />
	<link rel="Stylesheet" type="text/css" href="css/colorbox.css" />
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
$img = array("images/wedding/1.jpg","images/wedding/2.jpg","images/wedding/3.jpg","images/wedding/4.jpg","images/wedding/5.jpg","images/wedding/6.jpg","https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-prn2/t1.0-9/10170881_773000772711304_3490586867830687620_n.jpg",
	"https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-ash3/t1.0-9/1558594_773000796044635_1888519831477013003_n.jpg",
	"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-frc1/t1.0-9/10013228_773000829377965_7640053966065635301_n.jpg",
	"https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-prn1/t1.0-9/1601370_773001016044613_1757063628125066777_n.jpg",
	"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-frc3/t1.0-9/10003949_773001086044606_5592124490344338558_n.jpg",
	"https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-frc3/t1.0-9/10001395_773001279377920_9141240603277723363_n.jpg",
	"https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-frc3/t1.0-9/10154074_773001172711264_3871017207849848650_n.jpg",
	"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-prn1/t1.0-9/1235233_773001316044583_3343839402257313692_n.jpg",
	"https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-ash3/t1.0-9/1235233_773001232711258_5125885380048851571_n.jpg"
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
