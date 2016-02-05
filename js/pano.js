(function() {
    document.querySelector('.pano').addEventListener('click', function() {
        var wraper = document.createElement('div');
            wraper.className = 'pano_wrap';
            wraper.innerHTML = '<div class="wrap_window  animated fadeIn">\
            <div class="wrapper_for_closer">\
            <div class="image_closer"></div>\
            </div>\
            <iframe src="pano/index.html" frameborder="0"></iframe>\
            </div>'
        document.body.appendChild(wraper);

        document.querySelector('.pano_wrap .wrapper_for_closer').addEventListener('click', function () {
            document.body.removeChild(this.parentNode.parentNode);
        });

        document.querySelector('.pano_wrap .wrapper_for_closer').addEventListener('mouseenter', function () {
            console.log(this);
            this.parentNode.parentNode.setAttribute('style', 'opacity: .7;');
        });

        document.querySelector('.pano_wrap .wrapper_for_closer').addEventListener('mouseleave', function () {
            this.parentNode.parentNode.setAttribute('style', 'opacity: 1;');
        });
    });

    // Скрипт открывающий видео
    // используется fancybox
    //document.querySelector('.section2 .button').addEventListener('click', function() {
    //    var wraper = document.createElement('div');
    //    wraper.className = 'pano_wrap';
    //    wraper.innerHTML = '<div class="wrap_window  animated fadeIn">\
    //        <div class="wrapper_for_closer">\
    //        <div class="image_closer"></div>\
    //        </div>\
    //        <iframe src="https://www.youtube.com/embed/5KnUm8eZUqM?autoplay=1" frameborder="0"></iframe>\
    //        </div>'
    //    document.body.appendChild(wraper);
    //
    //    document.querySelector('.pano_wrap .wrapper_for_closer').addEventListener('click', function () {
    //        document.body.removeChild(this.parentNode.parentNode);
    //    });
    //
    //    document.querySelector('.pano_wrap .wrapper_for_closer').addEventListener('mouseenter', function () {
    //        console.log(this);
    //        this.parentNode.parentNode.setAttribute('style', 'opacity: .7;');
    //    });
    //
    //    document.querySelector('.pano_wrap .wrapper_for_closer').addEventListener('mouseleave', function () {
    //        this.parentNode.parentNode.setAttribute('style', 'opacity: 1;');
    //    });
    //});
})();