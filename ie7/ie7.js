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
		el.innerHTML = '<span style="font-family: \'cranfont\'">' + entity + '</span>' + html;
	}
	var icons = {
		'cranfont-training-2': '&#xe913;',
		'cranfont-training-1': '&#xe914;',
		'cranfont-sport-desk': '&#xe915;',
		'cranfont-conferences': '&#xe916;',
		'cranfont-policies': '&#xe917;',
		'cranfont-learning-blog': '&#xe91a;',
		'cranfont-faq-s': '&#xe91b;',
		'cranfont-departments': '&#xe91c;',
		'cranfont-cards': '&#xe91d;',
		'cranfont-sports': '&#xe91e;',
		'cranfont-notices': '&#xe91f;',
		'cranfont-headmasters-blog': '&#xe920;',
		'cranfont-activities': '&#xe921;',
		'cranfont-jobs': '&#xe922;',
		'cranfont-pages': '&#xe923;',
		'cranfont-news': '&#xe924;',
		'cranfont-training-22': '&#xe925;',
		'cranfont-person': '&#xe900;',
		'cranfont-ocs': '&#xe901;',
		'cranfont-cranprep': '&#xe902;',
		'cranfont-cranleigh': '&#xe903;',
		'cranfont-twitter': '&#xe904;',
		'cranfont-facebook': '&#xe905;',
		'cranfont-quotation': '&#xe906;',
		'cranfont-download': '&#xe907;',
		'cranfont-image': '&#xe908;',
		'cranfont-gallery': '&#xe909;',
		'cranfont-geographic': '&#xe90a;',
		'cranfont-results': '&#xe90b;',
		'cranfont-trips': '&#xe90c;',
		'cranfont-arrow': '&#xe90d;',
		'cranfont-video': '&#xe90e;',
		'cranfont-noticeboard': '&#xe90f;',
		'cranfont-events': '&#xe910;',
		'cranfont-news2': '&#xe911;',
		'cranfont-full-crest': '&#xe926;',
		'cranfont-link': '&#xe912;',
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
		c = c.match(/cranfont-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
