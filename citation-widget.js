(function() {
	const ELEMENT_ID = '#citation';
	const CROSSCITE_URL = $url = "https://citation.crosscite.org/format?style=apa&lang=en-US&doi=";

	var doi;
	var jQuery;// Localize jQuery variable to avoid conflicts with other versions a site may be using
	var key;
	var nonce;
	var pubKey;
	var redirectUri;
	var scopes;
	var signedInIdToken;
	var size;
	var state;
	var submitUri;

	/******** Load jQuery if not present *********/
	if (window.jQuery === undefined || window.jQuery.fn.jquery !== '2.2.4') {
	    var script_tag = document.createElement('script');
	    script_tag.setAttribute("type","text/javascript");
	    script_tag.setAttribute("src",
	        "https://code.jquery.com/jquery-2.2.4.js");
	    if (script_tag.readyState) {
	      script_tag.onreadystatechange = function () { // For old versions of IE
	          if (this.readyState == 'complete' || this.readyState == 'loaded') {
	              scriptLoadHandler();
	          }
	      };
	    } else {
	      script_tag.onload = scriptLoadHandler;
	    }
	    // Try to find the head, otherwise default to the documentElement
	    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
	} else {
	    // The jQuery version on the window is the one we want to use
	    jQuery = window.jQuery;
	    init();
	}
	/******** Called once jQuery has loaded ******/
	function scriptLoadHandler() {
	    // Restore $ and window.jQuery to their previous values and store the
	    // new jQuery in our local jQuery variable
	    jQuery = window.jQuery.noConflict(true);
	    // Call our main function
		init();
	}

	function init(){
		jQuery(document).ready(function($) {
			doi = $(ELEMENT_ID).data("doi");
			//size = $(elementId).data("size");

			/*if(size=='lg'){
				$(elementId).addClass('large');
			} else {
				$(elementId).addClass('small');
			}*/

			/******* Load CSS *******/
	        /*var css_link = $("<link>", {
	            rel: "stylesheet",
	            type: "text/css",
	            href: "orcid-widget.css"
	        });
	        css_link.appendTo('head');*/

	        $.ajax({
				url: CROSSCITE_URL + encodeURIComponent(doi),
				type: 'GET'})
				.done(function(res){
					console.log(res);
					showSuccess($, res);
				}).fail(function(jqXHR, textStatus, errorThrown) {
					showError($);
					console.log(jqXHR);
					console.log(textStatus);
					console.log(errorThrown);
				});

	    });
	}
	function showSuccess($, res){
		$('<p><b>Cite this post:</b><br>' + res + '</p><p><small>Powered by the <a href="https://citation.crosscite.org/">Crosscite DOI Citation Formatter</a></small></p>').appendTo(ELEMENT_ID);
	}
	function showError($){
		$('<p>Oops, we were not able to generate a citation for this DOI</p>').appendTo(ELEMENT_ID);
	}
})();
