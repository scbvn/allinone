(function() { function bxBootstrap() {
	if (!(window.bouncex&&bouncex.website)) {
		var pushedData = [];
		if(window.bouncex && bouncex.push && bouncex.length){
			pushedData = bouncex;
		}
		window.bouncex = {};
		bouncex.pushedData = pushedData;
		bouncex.website = {"id":2602,"cookie_name":"bounceClientVisit2602","domain":"allrecipes.com","ct":"bind_to_domain","uwc":1,"ally":0,"ei":0,"tcjs":"","cjs":"/*AK wrike:https://www.wrike.com/open.htm?id=267692231*/\nbouncex.on(jQuery('#signupForm'), 'submit.bx-convert', function() {\n    bouncex.setVarAndReload('conversion_type', 'registration');\n});\n\nif(window.location.href.indexOf('order/checkout/confirmation.jsp?orderId') > -1 ){\n    bouncex.setVarAndReload('conversion_type', 'purchase');\n} \n\n","force_https":false,"waypoints":false,"content_width":0,"gai":"","swids":"","ots":0,"sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":{"gdpr":0,"gmp":0,"whitelist_check":0},"burls":[{"prop":"contains","val":"?bxdisable"},{"prop":"contains","val":"/shop"}],"ple":false,"fbe":true,"mas":1,"map":1,"gar":true,"ete":0,"ettm":true,"etjs":"","dge":true,"gbi_enabled":0,"gbi":{"rblocks":null},"bpush":false,"pt":{"article":{"testmode":true,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"(jQuery('meta[property=\"og:type\"]').attr(\"content\") === \"article\" || jQuery('meta[property=\"og:type\"]').attr(\"content\") === \"recipe\" || jQuery('.byline__author').length > 0) && jQuery('.ngdialog-content:visible').length === 0;"}]]},"category":{"testmode":true,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"(function(){   var categories = ['/favorites/', '/made-it/','/collections/','/reviews/'];\n    var pathname = window.location.pathname;\n    if(jQuery('.fixed-recipe-card,.collection-card').length > 0 && window.location.pathname !== \"/\" && [\"/search/results/\"].indexOf(window.location.pathname) === -1  && jQuery('meta[property=\"og:type\"]').attr(\"content\") !== \"recipe\"){\n        return true;\n    }\n  for(var i =0; i < categories.length; i++){\n    if( pathname.indexOf(categories[i]) > -1){\n      return true;\n    }\n  }\n  return false;\n})();"}]]},"gallery":{"testmode":true,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"jQuery('.ngdialog-content:visible,.photo-viewer').length > 0;"}]]},"home":{"testmode":true,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"window.location.pathname === \"/\";"}]]},"search":{"testmode":true,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"[\"/search/results/\"].indexOf(window.location.pathname) > -1;"}]]}},"els":null,"acts":null,"vars":[{"name":"email_regform","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"(function() {\n    var regAnalytics = /AnalyticsEvent=Free%20Registration%20Completed/;\n    if (regAnalytics.test(window.location.search)) {\n        return true;\n    }\n    return null;\n})();","trigger":""},{"name":"article_section_name","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery.trim(jQuery('.breadcrumbs > li:last span').text());","trigger":""},{"name":"video_name","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('#videoTitle').text();","trigger":""},{"name":"logged_in","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"typeof window.dataLayer !== 'undefined' && typeof dataLayer.user !== 'undefined' && typeof dataLayer.user[0] !== 'undefined' && typeof dataLayer.user[0].segment !== 'undefined' && !!dataLayer.user[0].segment.isLoggedIn;","trigger":""},{"name":"ever_logged_in","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"bouncex.vars.logged_in || null;","trigger":""},{"name":"ibx_test","polling":"none","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"window.location.href.indexOf('ibx_test') >= 0 || null;","trigger":""},{"name":"recipe_id","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n    var pathname = window.location.pathname;\n    var matches = pathname.match(/\\/recipe\\/(\\d+)\\//);\n    if (matches && matches.length > 1) {\n        return matches[1];\n    }\n    return false;\n})()","trigger":"pageload"},{"name":"conversion_type","polling":"none","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":0,"mibcx":0,"te":0,"cart_rep":{"get":"","set":""},"ulpj":null,"cus":"","miw_exclude":""},"etjson":null,"osre":false,"osru":"osr.bouncex.net/v1/osr/items","checkDfp":false,"spa":0,"preinit_cjs":""}
;
		bouncex.tag = 'tag3';
		bouncex.$ = window.jQuery;
		bouncex.env = 'production';
		bouncex.restrictedTlds = {"casl":{"ca":1},"gdpr":{"ad":1,"al":1,"at":1,"ax":1,"ba":1,"be":1,"bg":1,"by":1,"xn--90ais":1,"ch":1,"cy":1,"cz":1,"de":1,"dk":1,"ee":1,"es":1,"eu":1,"fi":1,"fo":1,"fr":1,"uk":1,"gb":1,"gg":1,"gi":1,"gr":1,"hr":1,"hu":1,"ie":1,"im":1,"is":1,"it":1,"je":1,"li":1,"lt":1,"lu":1,"lv":1,"mc":1,"md":1,"me":1,"mk":1,"xn--d1al":1,"mt":1,"nl":1,"no":1,"pl":1,"pt":1,"ro":1,"rs":1,"xn--90a3ac":1,"ru":1,"su":1,"xn--p1ai":1,"se":1,"si":1,"sj":1,"sk":1,"sm":1,"ua":1,"xn--j1amh":1,"va":1,"tr":1}};
		bouncex.push = function(pushData) {
			bouncex.pushedData.push(pushData);
		}
		var script = document.createElement('script');
		script.setAttribute('src', '//assets.bounceexchange.com/assets/tags/versioned/ijs_all_modules_cjs_min_e72b93dfd21af475c90136c5f1536e7a.js');

		var scriptAttrs = [{"Key":"id","Value":"c.js"},{"Key":"async","Value":"true"},{"Key":"data-gm","Value":"0"},{"Key":"data-fire","Value":"1"},{"Key":"data-wt","Value":"0"},{"Key":"data-apikey","Value":"2^HIykD"},{"Key":"data-cb","Value":"bouncex.dg.initPostDeviceGraph"},{"Key":"data-bx","Value":"1"}];
		if (scriptAttrs) {
			for (var i = 0; i < scriptAttrs.length; i++) {
				script.setAttribute(scriptAttrs[i].Key, scriptAttrs[i].Value);
			}
		}

		document.body.appendChild(script);
	}
}
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bxBootstrap);
} else {
	bxBootstrap();
}})();