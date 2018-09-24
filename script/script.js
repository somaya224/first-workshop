function __showProgress(_upto, _cir_progress_id) {

    //Filter Percentage
    _upto = (_upto > 100) ? 100 : ((_upto < 0) ? 0 : _upto);

    var _progress = 0;

    var _cir_progress = document.getElementById(_cir_progress_id).getElementsByClassName("_cir_P_y")[0];
    var _text_percentage = document.getElementById(_cir_progress_id).getElementsByClassName("_cir_Per")[0];

    var _input_percentage;
    var _percentage;

    var _sleep = setInterval(_animateCircle, 25);

    function _animateCircle() {

        _input_percentage = (_upto / 100) * 382;
        _percentage = (_progress / 100) * 382;

        _text_percentage.innerHTML = _progress + '%';

        if (_percentage >= _input_percentage) {

            clearInterval(_sleep);
        } else {

            _progress++;

            _cir_progress.style.strokeDasharray = _percentage + ', 1000';
        }
    }
}

function showAllProgress() {
	var prog = [75, 100, 10, 35];
	var cir_prog = ['_cir_progress_1', '_cir_progress_2', '_cir_progress_3', '_cir_progress_4'];
	for(var i = 0; i < prog.length; i++) {
		__showProgress(prog[i], cir_prog[i]);
	}
}

function showAllProgress2() {
		var prog = [90, 50, 25];
		var cir_prog = ['_cir_progress_5', '_cir_progress_6', '_cir_progress_7'];
		for(var i = 0; i < prog.length; i++) {
			__showProgress(prog[i], cir_prog[i]);
		}
}

var tabs = document.querySelectorAll('span');
var panels = document.querySelectorAll('article');

for(i = 0; i < tabs.length; i++) {
  var tab = tabs[i];
  setTabHandler(tab, i);
}

function setTabHandler(tab, tabPos) {
  tab.onclick = function() {
    for(i = 0; i < tabs.length; i++) {
      tabs[i].className = '';
    }

    tab.className = 'active';

    for(i = 0; i < panels.length; i++) {
      panels[i].className = '';
    }

    panels[tabPos].className = 'active-panel';
    showAllProgress2();
 }
}

/* gallary */
var gallaryTabs = document.querySelectorAll('.gallery-tabs li');
var gallaryPanels = document.querySelectorAll('section');

for(x = 0; x < gallaryTabs.length; x++) {
  var gaTab = gallaryTabs[x];
  setGallery(gaTab, x);
}

function setGallery(gaTab, gaTabPos) {
  gaTab.onclick = function() {
    for(x = 0; x < gallaryTabs.length; x++) {
      gallaryTabs[x].className = '';
    }

    gaTab.className = 'active_tab';

    for(x = 0; x < gallaryPanels.length; x++) {
      gallaryPanels[x].className = '';
    }

    gallaryPanels[gaTabPos].className = 'active-gallery';
  }
}

/*// Insert Map 
function initMap () {
	//  The location of Uluru
	var location = {lat: 31.196200, lng: 29.887070};
	// The map, centered at Uluru
	var map = new google.maps.Map(
		document.getElementById("map"), {zoom: 4, center: location}
		);
		// The marker, positioned at Uluru
		var marker = new google.maps.Marker({position: location, map: map});
}*/
