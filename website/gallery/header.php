<?php
echo '
<a href="index.php"><h1 style="margin-left:17%;font-size:32px;font-family:\'skbly7\';float:left;margin-right:3%">Memories of 2013 JIIT-ICSC</h1></a>


';
echo "
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-50891029-1', 'siddharthchaudhary.com');
  ga('send', 'pageview');

</script>
";
if(isset($_GET['c']))
{
echo '<hr style="margin-bottom:-35px;clear:both;"></hr>';
}
else
echo '<hr style="clear:both;"></hr>';
?>