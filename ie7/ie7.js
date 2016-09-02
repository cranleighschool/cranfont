/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-person': '&#xe900;',
		'icon-ocs': '&#xe901;',
		'icon-cranprep': '&#xe902;',
		'icon-cranleigh': '&#xe903;',
		'icon-twitter': '&#xe904;',
		'icon-facebook': '&#xe905;',
		'icon-quotation': '&#xe906;',
		'icon-download': '&#xe907;',
		'icon-image': '&#xe908;',
		'icon-gallery': '&#xe909;',
		'icon-geographic': '&#xe90a;',
		'icon-results': '&#xe90b;',
		'icon-trips': '&#xe90c;',
		'icon-arrow': '&#xe90d;',
		'icon-video': '&#xe90e;',
		'icon-noticeboard': '&#xe90f;',
		'icon-events': '&#xe910;',
		'icon-news': '&#xe911;',
		'icon-full-crest': '&#xe926;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
