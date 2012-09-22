<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<title>EasyWeather Beta</title>

<link href='http://fonts.googleapis.com/css?family=Racing+Sans+One|Stint+Ultra+Expanded' rel='stylesheet' type='text/css'>
<!--<link rel="stylesheet" href="/assets/less/fluid.less" type="text/less" media="screen" />-->
<link rel="stylesheet" href="/assets/css/fluid.css" type="text/css" media="screen" />
<!--<script data-main="/assets/js/config" src="/assets/js/libs/require.js"></script>-->
<script data-main="/assets/js/config-ck" src="/assets/js/libs/require.js"></script>
</head>

<body class="dark">
	<div id="main">
		<h1 id="siteHeader">Easy Weather</h1>
		<section>
			<div id="versionLog">
				<ul>
					<li>
						<span>0.3.4</span> Now hide Precipitation if 0mm, and "feels like" temp if matching actual, also fixed text glitch with "last updated" text
					</li>
					<li>
						<span>0.3.3</span> Isolated PHP code in /api/ folder to better seperate site
					</li>
					<li>
						<span>0.3.2</span> Adding version log, fix but with UV index
					</li>
					<li>
						<span>0.3.1</span> Adding forcast, adjusting layouts for mobile
					</li>
					<li>
						<span>0.3.0</span> Introducing location based improvments, loading weather from Weather Underground
					</li>
					<li>
						<span>0.2.1</span> Moving majority of front-end into jQuery, loading with Require.js
					</li>
					<li>
						<span>0.2.0</span> Moving site over to CodeIgniter MVC framework
					</li>
					<li>
						<span>0.1.0</span> Loading data from Weather Canada RSS feed for Halifax, NS. Parsing and displaying information on screen, using LESS to process CSS
					</li>
				</ul>
			</div>
			<div id="loading">
				<div id="floatingBarsG">
					<div class="blockG" id="rotateG_01">
					</div>
					<div class="blockG" id="rotateG_02">
					</div>
					<div class="blockG" id="rotateG_03">
					</div>
					<div class="blockG" id="rotateG_04">
					</div>
					<div class="blockG" id="rotateG_05">
					</div>
					<div class="blockG" id="rotateG_06">
					</div>
					<div class="blockG" id="rotateG_07">
					</div>
					<div class="blockG" id="rotateG_08">
					</div>
				</div>
			</div>
		</section>
		<div style="clear: both;"></div>
	</div>
</body>
</html>