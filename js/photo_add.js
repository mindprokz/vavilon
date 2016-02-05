(function (){
    var photo_src_arr = [
        'img/vid/1.jpg',
        'img/vid/7.jpg',
        'img/vid/8.jpg',
        'img/vid/9.jpg',
        'img/vid/2.jpg',
        'img/vid/5.jpg',
        'img/vid/3.jpg',
        'img/vid/4.jpg',
    ];

    for (var i = 0, len = document.querySelectorAll('.photo_choose').length; i < len; i++){
        (function (j) {
            document.querySelectorAll('.photo_choose')[i].addEventListener('click', function (){
                var wraper = document.createElement('div');
                wraper.className = 'choice_image_block';
                wraper.innerHTML = '<div class="wrapper  animated fadeIn"><div class="wrapper_for_center"><div class="wrapper_for_closer"><div class="image_closer"></div> </div> <img src="'+photo_src_arr[j]+'" alt=""></div></div>'
                document.body.appendChild(wraper);

                document.querySelector('.wrapper_for_closer').addEventListener('click', function () {
                    var a = document.querySelector('.wrapper_for_closer');
                    document.body.removeChild(a.parentNode.parentNode.parentNode);
                });

                document.querySelector('.wrapper_for_closer').addEventListener('mouseenter', function () {
                    var a = document.querySelector('.wrapper_for_closer');
                    a.parentNode.parentNode.parentNode.setAttribute('style', 'opacity: .7;');
                });

                document.querySelector('.wrapper_for_closer').addEventListener('mouseleave', function () {
                    var a = document.querySelector('.wrapper_for_closer');
                    a.parentNode.parentNode.parentNode.setAttribute('style', 'opacity: 1;');
                });

            });
        })(i);
    }
})();

