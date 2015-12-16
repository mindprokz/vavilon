// Скрипт карты
function initialize() {
    var center_map = new google.maps.LatLng(43.199335, 76.881473);

    var coords = [
        new google.maps.LatLng(43.204298, 76.893526),
        new google.maps.LatLng(43.203387, 76.892315),
        new google.maps.LatLng(43.202503, 76.891629),
        new google.maps.LatLng(43.200806, 76.892347),
        new google.maps.LatLng(43.193332, 76.886298),
        new google.maps.LatLng(43.197292, 76.894096),
        new google.maps.LatLng(43.206433, 76.895183),
        new google.maps.LatLng(43.204407, 76.895859),
        new google.maps.LatLng(43.207730, 76.900974),
        new google.maps.LatLng(43.202864, 76.902011),
        new google.maps.LatLng(43.204319, 76.901775),
        new google.maps.LatLng(43.206478, 76.893439)
    ];

    var icons_map = [
        'img/icon_map/vavilon.png',
        'img/icon_map/mega.png',
        'img/icon_map/katotk.png',
        'img/icon_map/mega.png',
        'img/icon_map/park.png',
        'img/icon_map/books.png',
        'img/icon_map/bicycle.png',
        'img/icon_map/school38.png',
        'img/icon_map/chon.png',
        'img/icon_map/kids.png',
        'img/icon_map/school.png',
        'img/icon_map/bise.png'
    ];

    var myOptions = {
        zoom: 15,
        center: center_map,
        disableDefaultUI: true,
        scrollwheel : false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var click_object = document.querySelectorAll('.map .map_contact ul li span'),
        active_animation = null,
        markers = [];


    for(var i = 0, len = coords.length; i < len; i++){

        var marker = new google.maps.Marker({
            position: coords[i],
            map: map,
            icon: icons_map[i]
        });

        //Заносим все маркеры в массив для того, что бы далее было проще к ним обращаться
        markers[i] = marker;

        (function (j) {
            click_object[i].addEventListener('click',function(){
                if(active_animation){
                    active_animation.setAnimation();
                    markers[j].setAnimation(google.maps.Animation.BOUNCE);
                    active_animation = markers[j];
                } else{
                    markers[j].setAnimation(google.maps.Animation.BOUNCE);
                    active_animation = markers[j];
                }
            });
        })(i);
    }
};
//Инициализация карты
initialize();