(function($){
	$('.slider').slick({
		dots: false,
		autoplay: true,
		infinit: true,
		autoplaySpeed: 3000,
		arrows: false

	});
	$('.slider__arrows').slick({
		dots: false,
		autoplay: false,
		infinit: true,
		arrows: true,
		fade: true,
  		cssEase: 'ease-in-out'
		
	});
	$('.slider__best').slick({
		dots: false,
		autoplay: true,
		infinit: true,
		arrows: true,
		autoplaySpeed: 4000
	});
$('.nav-toggler').on('click', function(e){
    e.preventDefault();
    $('body').toggleClass('nav-opened');
  })
    	$(".menu").on("click","a", function (event) {
        	event.preventDefault();
        	var id  = $(this).attr('href'),
           		top = $(id).offset().top;      
        	$('body,html').animate({scrollTop: top}, 1500);
        	$(this).removeClass('active');
          $('body').removeClass('nav-opened');
    	});

	$('.slick-next').addClass('active');


 var offset = $('#galery').offset().top + 100,
    sticky = $('.header');

  $(window).on('scroll', function(){
    var windowScroll = $(window).scrollTop();
    sticky.addClass('animated');
    if (windowScroll > offset) {
      sticky
      .removeClass('slideOutUp')
      .addClass('slideInDown')
      .addClass('sticky');
    } else if (windowScroll == 0){
      sticky.removeClass('slideOutUp');
    }
      else {
        if (sticky.hasClass('slideInDown')) {
          sticky
            .addClass('slideOutUp')
            .addClass('slideInDown');
            setTimeout(function(){
              sticky.removeClass('sticky');
            }, 300)
    }
    }
  })
	
    	$('.footer__social a').on('click', function (event) {
    		event.preventDefault();
    		$('.footer__social a').removeClass('active');
    		$(this).addClass('active');
    	})				
       $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
})(jQuery);
function initMap(){
	var el = document.getElementById('map');
		
	var center1 = {lat: 41.9102415, lng: 12.4947764};
	var center2 = {lat: 46, lng: 5};
	var center3 = {lat: 40, lng: 0};
	var map = new google.maps.Map(el, {
			zoom: 5,
			center: center1,
			styles: 
					[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]

		});
	var marker1 = new google.maps.Marker({
			position: center1,
			title: 'Hello, world',
			map     : map,
     		icon: '../img/marker.png'
		});
	var marker2 = new google.maps.Marker({
			position: center2,
			title: 'Hello, world',
			map     : map,
     icon: '../img/marker.png'
		});
	var marker3 = new google.maps.Marker({
			position: center3,
			title: 'Hello, world',
			map     : map,
      	icon: '../img/marker.png'
		});
}
var win = $(window);

var allMods = $(".cards .card"),
  allWraps = $(".section .item__wrap--center"),
  allLeft = $(".section__left");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});
allWraps.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});
allLeft.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
    allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
    
  });
});
win.scroll(function(event) { 
    allWraps.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
          el.addClass("come-in"); 
      }
     });
    });
win.scroll(function(event) {
  
    allLeft.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
    
  });

});