var day_link = document.getElementById('day_link'),
    night_link = document.getElementById('night_link'),
    visible_video = document.querySelectorAll('video')[0],
    cache_vid1 = document.querySelectorAll('video')[1],
    cache_vid2 = document.querySelectorAll('video')[2];


day_link.addEventListener('click', function(e) {
    e.preventDefault();
    if( !this.classList.contains('disable') ){
        if( !this.classList.contains('active') ){
            visible_video.src = document.querySelectorAll('video')[1].src;
            visible_video.play();
            this.classList.add('active');
            this.classList.add('disable');
            night_link.classList.add('disable');
            night_link.classList.remove('active');
        }
    }
});

night_link.addEventListener('click', function(e) {
    e.preventDefault();
    if( !this.classList.contains('disable') ){
        if( !this.classList.contains('active') ){
            visible_video.src = document.querySelectorAll('video')[2].src;
            visible_video.play();
            this.classList.add('active');
            this.classList.add('disable');
            day_link.classList.add('disable');
            day_link.classList.remove('active');
        }
    }
});

visible_video.addEventListener('timeupdate', function() {
    if(visible_video.ended){
        if(visible_video.getAttribute('poster') === "http://cs622119.vk.me/v622119207/42788/tnZkX2VW4uA.jpg")
            visible_video.setAttribute('poster','http://cs622119.vk.me/v622119207/427a1/wyYFGAxJDGI.jpg');
        else
            visible_video.setAttribute('poster','http://cs622119.vk.me/v622119207/42788/tnZkX2VW4uA.jpg');
        visible_video.src = '';
        day_link.classList.remove('disable');
        night_link.classList.remove('disable');
    }
});