var all_plans_svg = document.querySelectorAll('.plan_elem polygon'),
    img_collection = document.querySelectorAll('img[alt="plan_"]');

for (var i = 0, len = all_plans_svg.length; i < len; i++){
    (function (j) {
        all_plans_svg[i].addEventListener('mouseenter', function () {
            img_collection[j].style.opacity = 1;
        });

        all_plans_svg[i].addEventListener('mouseout', function () {
            img_collection[j].style.opacity = 0.3;
        });
    })(i);

    all_plans_svg[i].addEventListener('click', function () {
        var wraper = document.createElement('div');
        wraper.className = 'plan_block';
        wraper.setAttribute('style','opacity: 1');
        wraper.innerHTML = '<div class="modal_plan_block">  \
            <div class="info_box"> \
            <h3>План квартиры</h3> \
        <p> \
        <span class="bold">Тип:</span> 2-комнатная <br> \
        <span class="bold">Площадь:</span> 81,8 м2 \
        </p> \
        <a href="" class="first"> \
            <div class="clear"> \
            <div class="icon_pdf"></div> \
            <span>Скачать планировку</span> \
        </div> \
        </a> \
        <div class="line"></div> \
            <a href="" class="second"> \
            <div class="clear"> \
            <div class="icon_pdf"></div> \
            <span>Скачать все планировки</span> \
        </div> \
        </a> \
        </div> \
        <div class="closer"></div> \
            <img src="img/blocks_1/plan_1_big.png" alt=""> \
            </div>';
        wraper.querySelector('.plan_block .modal_plan_block .closer').addEventListener('click', function () {
            document.body.removeChild(this.parentNode.parentNode);
        });

        wraper.querySelector('.plan_block .modal_plan_block .closer').addEventListener('mouseenter', function () {
            this.parentNode.parentNode.setAttribute('style', 'opacity: .5;');
        });

        wraper.querySelector('.plan_block .modal_plan_block .closer').addEventListener('mouseleave', function () {
            this.parentNode.parentNode.setAttribute('style', 'opacity: 1;');
        });
        document.body.appendChild(wraper);

    });
}