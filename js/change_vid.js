var day_link = document.getElementById('day_link'),
    night_link = document.getElementById('night_link'),
    visible_video = document.querySelectorAll('video')[0],
    cache_vid1 = document.querySelectorAll('video')[1],
    cache_vid2 = document.querySelectorAll('video')[2],
    cache_img_1 = document.querySelectorAll('img[alt="background"]')[0],
    cache_img_2 = document.querySelectorAll('img[alt="background"]')[1],
    adding_img,
    adding_video;


day_link.addEventListener('click', function(e) {
    e.preventDefault();
    if( !this.classList.contains('disable') ){
        if( !this.classList.contains('active') ){
            //visible_video.src = document.querySelectorAll('video')[1].src;
            visible_video.play();
            this.classList.add('active');
            this.classList.add('disable');
            night_link.classList.add('disable');
            night_link.classList.remove('active');
            adding_img = cache_img_1;
            cache_img_2.setAttribute('style', 'display:none;');
            adding_video = document.querySelectorAll('video')[2].src
        }
    }
});

night_link.addEventListener('click', function(e) {
    e.preventDefault();
    if( !this.classList.contains('disable') ){
        if( !this.classList.contains('active') ){
            //visible_video.src = document.querySelectorAll('video')[2].src;
            visible_video.play();
            this.classList.add('active');
            this.classList.add('disable');
            day_link.classList.add('disable');
            day_link.classList.remove('active');
            adding_img = cache_img_2;
            cache_img_1.setAttribute('style', 'display:none;');
            adding_video = document.querySelectorAll('video')[1].src
        }
    }
});

visible_video.addEventListener('timeupdate', function() {
    if(visible_video.ended){
        visible_video.src = '';
        day_link.classList.remove('disable');
        night_link.classList.remove('disable');
        adding_img.removeAttribute('style');
        visible_video.src = adding_video
    }
});