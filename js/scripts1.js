(function($){
	$('.slider').slick({
		dots: false,
		autoplay: true,
		infinit: true,
		autoplaySpeed: 3000,
		arrows: false

		//fade: true,
  		//cssEase: 'ease-in-out'
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
		//fade: true,
  		//cssEase: 'ease-in-out'
	});
	var isotope = $('.section__items').isotope({
  // options
  		itemSelector: '.section__item',
  		masonry:{
  			columnWidth: '.sizer',
  			gutter: '.gutter'
  		}
	});
	$(document).ready(function(){
    	$(".menu").on("click","a", function (event) {
        	event.preventDefault();
        	var id  = $(this).attr('href'),
           		top = $(id).offset().top;      
        	$('body,html').animate({scrollTop: top}, 1500);
        	$(this).removeClass('active');
    	});

    	
	});
	$('.slick-next').addClass('active');

	$('.menu__link--down').on('mouseout', function (event) {
        	//event.preventDefault();
        	
        	$(this).removeClass('active');
        	//$(this).addClass('active');
    	});
	
    	$('.footer__social a').on('click', function (event) {
    		event.preventDefault();
    		$('.footer__social a').removeClass('active');
    		$(this).addClass('active');

    	})
    	
    


				
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
