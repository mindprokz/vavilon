$(document).ready(function() {

	$('img[data-src]').each(function(){
		$(this).attr('src', $(this).attr('data-src') );
	});

	$(".fancybox").click(function() {
		$(".fancybox").fancybox({
			maxWidth: 800,
			maxHeight: 600,
			fitToView: false,
			width: '80%',
			height: '80%',
			autoSize: false,
			closeClick: false,
			openEffect: 'fade',
			closeEffect: 'fade',
			helpers: {
				title: {
					type: 'inside'
				}
			}
		});
	});
	//$('#app').on('click',function() {
    //
	//});
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#application").submit(function() {
		var data = {
			name : document.querySelector('#application input[name="name"]').value,
			email : document.querySelector('#application input[name="email"]').value,
			telephone : document.querySelector('#application input[class="first_input"]').value
						+ document.querySelector('#application input[class="second_input"]').value
						+ document.querySelector('#application input[class="third_input"]').value,
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: data,
		}).done(function( value ) {
			$('#mail')[0].innerHTML = value;
			$('#mail').removeClass('not_visible_mail');
			$('#mail')[0].setAttribute('style', 'opacity: 1;');
			setTimeout(function() {
				$("#application").trigger("reset");
			}, 1000);
			setTimeout(function() {
				$('#mail')[0].setAttribute('style', 'opacity: 0;');
				setTimeout(function() {
					$('#mail').addClass('not_visible_mail');
				}, 500);
			}, 5000);

		});
		return false;
	});

	$("#application_2").submit(function() {
		var data = {
			name : document.querySelector('#application_2 input[name="name"]').value,
			email : document.querySelector('#application_2 input[name="email"]').value,
			telephone : document.querySelector('#application_2 input[class="first_input"]').value
						+ document.querySelector('#application_2 input[class="second_input"]').value
						+ document.querySelector('#application_2 input[class="third_input"]').value,
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: data,
		}).done(function( value ) {
			$('#mail')[0].innerHTML = value;
			$('#mail').removeClass('not_visible_mail');
			$('#mail')[0].setAttribute('style', 'opacity: 1;');
			setTimeout(function() {
				$("#application_2").trigger("reset");
			}, 1000);
			setTimeout(function() {
				$('#mail')[0].setAttribute('style', 'opacity: 0;');
				setTimeout(function() {
					$('#mail').addClass('not_visible_mail');
				}, 500);
			}, 5000);

		});
		return false;
	});

	$("#application_3").submit(function() {
		var data = {
			name : document.querySelector('#application_3 input[name="name"]').value,
			email : document.querySelector('#application_3 textarea').value,
			telephone : document.querySelector('#application_3 input[name="tel"]').value,
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: data,
		}).done(function( value ) {
			$('#mail')[0].innerHTML = value;
			$('#mail').removeClass('not_visible_mail');
			$('#mail')[0].setAttribute('style', 'opacity: 1;');
			setTimeout(function() {
				$("#application_3").trigger("reset");
			}, 1000);
			setTimeout(function() {
				$('#mail')[0].setAttribute('style', 'opacity: 0;');
				setTimeout(function() {
					$('#mail').addClass('not_visible_mail');
				}, 500);
			}, 5000);

		});
		return false;
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(document).on('click', 'a[href^=#]', function () {
		$('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top - 73 }, 1000 );
		return false;
	});
});

function initialize_main() {
	var myLatlng = new google.maps.LatLng(43.207504, 76.883809);
	var myCenterMarker = new google.maps.LatLng(43.207504, 76.883809);
	var myOptions = {
		zoom: 17,
		center: myLatlng,
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map_canvas_main"), myOptions);

	var marker = new google.maps.Marker({
		position: myCenterMarker,
		map: map,
		icon: 'img/marker.png'
	});
};
//Инициализация карты
initialize_main();

setInterval(function(){
	if(window.pageYOffset > 300){
		document.querySelector('#float_menu').classList.remove('closed_menu');
		document.querySelector('#float_menu').classList.add('opened_menu');
	}else{
		document.querySelector('#float_menu').classList.add('closed_menu');
		document.querySelector('#float_menu').classList.remove('opened_menu');
	};
},200);

var a = new Image();
a.src = 'pano/pano.jpg';