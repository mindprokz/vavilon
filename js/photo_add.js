var photo_src_arr = [
    'http://lorempixel.com/600/600',
    'http://lorempixel.com/600/600',
    'http://lorempixel.com/600/600',
    'http://lorempixel.com/600/600',
    'http://lorempixel.com/600/600',
    'http://lorempixel.com/600/600',
    'http://lorempixel.com/600/600',
    'http://lorempixel.com/600/600',
];

for (var i = 0, len = document.querySelectorAll('.photo_choose').length; i < len; i++){
    (function (j) {
        document.querySelectorAll('.photo_choose')[i].addEventListener('click', function (){
            var wraper = document.createElement('div');
            wraper.className = 'choice_image_block';
            wraper.innerHTML = '<div class="wrapper"><div class="wrapper_for_center"><div class="wrapper_for_closer"><div class="image_closer"></div> </div> <img src="'+photo_src_arr[j]+'" alt=""></div></div>'
            document.body.appendChild(wraper);

            document.querySelector('.wrapper_for_closer').addEventListener('click', function () {
                var a = document.querySelector('.wrapper_for_closer');
                document.body.removeChild(a.parentNode.parentNode.parentNode);
            });

            document.querySelector('.wrapper_for_closer').addEventListener('mouseenter', function () {
                var a = document.querySelector('.wrapper_for_closer');
                a.parentNode.parentNode.parentNode.setAttribute('style', 'opacity: .5;');
            });

            document.querySelector('.wrapper_for_closer').addEventListener('mouseleave', function () {
                var a = document.querySelector('.wrapper_for_closer');
                a.parentNode.parentNode.parentNode.setAttribute('style', 'opacity: 1;');
            });

        });
    })(i);
}

