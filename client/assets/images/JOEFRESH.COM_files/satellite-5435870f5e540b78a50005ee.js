_satellite.pushAsyncScript(function(event, target, $variables){
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');


if(_satellite.getVar("reporting-env") == 'ca'){
	ga('create', 'UA-54981048-1', 'auto');
} else if(_satellite.getVar("reporting-env") == 'us'){
  ga('create', 'UA-54981048-3', 'auto');
} else {
	ga('create', 'UA-54981048-2', 'auto');
};

ga('send', 'pageview');
});
