<!DOCTYPE html>
<meta charset='utf-8'> 
<html>
<head>
	<title>2013 ICSC Gallery</title>

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
			padding-top:20px;
			height: 170px;
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
$img1 = array("1506923_709516382394966_2103238892_n.jpg",
"1508639_709500432396561_122542181_n.jpg",
"1488247_709516489061622_127556997_n.jpg",
"1511225_709516599061611_128359843_n.jpg",
"1471247_709516699061601_1264095410_n.jpg",
"1461542_709494109063860_1603546043_n.jpg",
"1486760_709493709063900_1444036116_n.jpg",
"1510973_709493842397220_577622851_n.jpg",
"1486853_709494092397195_1259320873_n.jpg",
"1461542_709494109063860_1603546043_n.jpg",
"1474514_709494562397148_1100408004_n.jpg",
"1477490_709494655730472_1510881917_n.jpg",
"1472908_709494592397145_708999458_n.jpg",
"1506022_709495055730432_1867858305_n.jpg",
"960118_709495205730417_137193118_n.jpg",
"1476052_709495129063758_782490044_n.jpg",
"1486922_709495272397077_417387168_n.jpg",
"1517687_709495699063701_1083473789_n.jpg",
"1526382_709496925730245_1957820402_n.jpg",
"1525693_709498679063403_1502644219_n.jpg",
"1476021_709498789063392_1590432780_n.jpg",
"1499625_709498929063378_673021526_n.jpg",
"1504013_709499535729984_1954365165_n.jpg",
"1499546_709499435729994_1597996554_n.jpg",
"537301_709499572396647_515289693_n.jpg"
	);
$img2 = array("1524851_709763332370271_382320467_n.jpg",
"1505656_709763425703595_427969080_n.jpg",
"1526210_709763452370259_55957968_n.jpg",
"1468594_709763492370255_434729245_n.jpg",
"1489124_709763595703578_1926814884_n.jpg",
"1485071_709763699036901_499258899_n.jpg",
"1465318_709764292370175_957036698_n.jpg",
"1524676_709764392370165_1004093216_n.jpg",
"1497794_709764389036832_603366161_n.jpg",
"1003564_709765002370104_444430362_n.jpg",
"1510667_709765562370048_2067519565_n.jpg",
"1526480_709766362369968_39276962_n.jpg",
"1525374_709767215703216_807828838_n.jpg",
"2543_709767752369829_871880212_n.jpg",
"1460039_709769172369687_240445029_n.jpg"

	);

$img3 = array("524748_709884412358163_2080967093_n.jpg",
"1526222_709884422358162_1887928944_n.jpg",
"1526344_709885279024743_446593392_n.jpg",
"1521589_709885562358048_17171545_n.jpg",
"1508643_709887615691176_1398819267_n.jpg",
"1476698_709887769024494_952636339_n.jpg",
"1479526_709887929024478_2130138914_n.jpg",
"1472793_709888145691123_1546843019_n.jpg",
"1495442_709888709024400_1530158444_n.jpg",
"1512513_709888812357723_2021080121_n.jpg",
"1526911_709888979024373_1692155559_n.jpg",
"1475823_709889295691008_1605940236_n.jpg",
"1472062_709888422357762_1960686032_n.jpg",
"1474425_709888545691083_1524372984_n.jpg"
	);

?>


<div id="makeMeScrollable">

<?php

$i=count($img1);
echo '<a class="fancybox" data-fancybox-group="gallery" href="day1.png"><img src="day1.png" height=150px alt="misc image 1" id="field" /></a>';

for($j=0;$j<$i;$j++)
{
echo '<a class="fancybox" data-fancybox-group="gallery" href="https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-prn2/t1.0-9/q71/s720x720/'.$img1[$j].'"><img src="https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-prn2/t1.0-9/q71/s200x200/'.$img1[$j].'" height=150px alt="misc image 1" id="field" /></a>';
}

?>
	</div>

<div id="makeMeScrollable">

<?php

$i=count($img2);
echo '<a class="fancybox" data-fancybox-group="gallery" href="day2.png"><img src="day2.png" height=150px alt="misc image 1" id="field" /></a>';

for($j=0;$j<$i;$j++)
{
echo '<a class="fancybox" data-fancybox-group="gallery" href="https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-prn2/t1.0-9/q71/s720x720/'.$img2[$j].'"><img src="https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-prn2/t1.0-9/q71/s200x200/'.$img2[$j].'" height=150px alt="misc image 1" id="field" /></a>';
}

?>
	</div>

<div id="makeMeScrollable">

<?php

$i=count($img3);
echo '<a class="fancybox" data-fancybox-group="gallery" href="day3.png"><img src="day3.png" height=150px alt="misc image 1" id="field" /></a>';

for($j=0;$j<$i;$j++)
{
echo '<a class="fancybox" data-fancybox-group="gallery" href="https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-prn2/t1.0-9/q71/s720x720/'.$img3[$j].'"><img src="https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-prn2/t1.0-9/q71/s200x200/'.$img3[$j].'" height=150px alt="misc image 1" id="field" /></a>';
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
	<?php include("footer.php");?>
</body>
</html>
