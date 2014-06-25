<!DOCTYPE html>
<!--[if IE 6]>
<html id="ie6" lang="en-US">
<![endif]-->
<!--[if IE 7]>
<html id="ie7" lang="en-US">
<![endif]-->
<!--[if IE 8]>
<html id="ie8" lang="en-US">
<![endif]-->
<!--[if !(IE 6) | !(IE 7) | !(IE 8)  ]><!-->
<html lang="en-US">
<!--<![endif]-->
<head>
<meta charset="UTF-8" >

<meta name="Designer" content="skbly7">
<meta name="viewport" content="width=device-width" />
<title>Siddharth Chaudhary - Home</title>
<link rel="stylesheet" type="text/css" media="all" href="css/style2.css" />
<link rel="stylesheet" type="text/css" media="all" href="css/style.css" />
<link rel="stylesheet" type="text/css" media="all" href="css/main.css" />
<link rel="stylesheet" type="text/css" media="all" href="css/page.css" />
	<link rel="Stylesheet" type="text/css" href="css/colorbox.css" />
<style>
masonry-container {
margin-top:-350px!important;
}
body {
overflow:hidden;
}
</style>
	<script src="js/modernizr.custom.63321.js"></script>
<script src="http://platform.tumblr.com/v1/share.js"></script>
<!--[if lt IE 9]>
<script src="js/html5.js" type="text/javascript"></script>
<![endif]-->

<script type='text/javascript' src='js/jquery.js'></script>
<script type='text/javascript' src='js/jquery-migrate.min.js'></script>
<script type='text/javascript' src='js/modernizr-2.6.1.min.js'></script>
<script type='text/javascript' src='js/jquery.ba-hashchange.min.js'></script>
<script type='text/javascript' src='js/jquery.cookie.js'></script>
</head>
<body>
<?php include('header2.php'); 
?>

	<div id="page-container" class="float-left">
			
<div id="container" class="home grid">
	<div class="masonry-container"></div>
	<div id="image_index">
	<?php
		$count=15;
	    $name=array("Bride","Wedding","Wedding","Wedding","Sakshi","Portfolio","Sukhna Lake, Chandigarh","Dog Click","Jama Masjid","Aziz and Iram","Sakshi","Portfolio","Kalesar National Park","Shefali","The TAJ");
		$type=array("l","h","h","v","h","h","s","h","s","l","s","s","h","h","h");
		$img=array(15,2,1,3,11,10,14,9,4,7,12,13,5,6,8);	
	
		for($i=0;$i<$count;$i++)
		{
		echo '
			<div idcel="1" class="featured '.$type[$i].'-image">
			<a class="fancybox"  data-fancybox-group="gallery" href="images/home/p'.$img[$i].'.jpg">
			<img class="project-image thumbnail '.$type[$i].'-image" src="images/home/'.$img[$i].'.jpg" >
			<div class="image-description">
			<span>'.$name[$i].'</span></div></a></div>
			';
		}
	?>
		</div>			
</div>
	<!-- jQuery library - Please load it from Google API's -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js" type="text/javascript"></script>

	<!-- jQuery UI Widget and Effects Core (custom download)
	     You can make your own at: http://jqueryui.com/download -->
	<script src="js/jquery-ui-1.8.23.custom.min.js" type="text/javascript"></script>
<script type='text/javascript' src='js/jquery.masonry.min.js'></script>
<script type='text/javascript' src='js/jquery.color.min.js'></script>
<script type='text/javascript' src='js/plugins-0.3.js'></script>
	<script type="text/javascript" src="js/jquery.fancybox.js?v=2.1.5"></script>
	<link rel="stylesheet" type="text/css" href="css/jquery.fancybox.css?v=2.1.5" media="screen" />
	<script type="text/javascript">
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
	</script>
	
<script type='text/javascript' src='js/display-0.2.js'></script>
</body>
</html>