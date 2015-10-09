$(function(){
    
    $(window).smartload(function(){
        "use strict";
        
        // Set your google maps parameters
        var $latitude = 46.3333, // If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
            $longitude = 6.4333,
            $map_zoom = 5; // Zoom setting

        // Google map custom marker icon
        var $marker_url_home = 'assets/images/home.png';
        var $marker_url_work = 'assets/images/work.png';
		var $marker_url_college = 'assets/images/college.png';
        // We define here the style of the map (https://snazzymaps.com/style/38/shades-of-grey)
        var style = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

        // Set google map options
        var map_options = {
            center: new google.maps.LatLng($latitude, $longitude),
            zoom: $map_zoom,
            panControl: true,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style
        };
        
        // Inizialize the map
        var map = new google.maps.Map(document.getElementById('google-container'), map_options);
        
        // Add a custom marker to the map				
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng($latitude, $longitude),
            map: map,
            visible: true,
            icon: $marker_url_home
        });
		
		var marker = new google.maps.Marker({
            position: new google.maps.LatLng(48.849656, 2.421724),
            map: map,
            visible: true,
            icon: $marker_url_work
        });
		
		var marker = new google.maps.Marker({
            position: new google.maps.LatLng(45.783542, 4.872748),
            map: map,
            visible: true,
            icon: $marker_url_college
        });
		
		var marker = new google.maps.Marker({
            position: new google.maps.LatLng(49.011671, 8.425081),
            map: map,
            visible: true,
            icon: $marker_url_work
        });
		
		var marker = new google.maps.Marker({
            position: new google.maps.LatLng(50.153124, 8.664404),
            map: map,
            visible: true,
            icon: $marker_url_home
        });
		
    });
});