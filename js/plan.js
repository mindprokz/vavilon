(function(){
    var all_plans_svg = document.querySelectorAll('.plan_elem polygon'),
        img_collection = document.querySelectorAll('img[alt="plan_"]'),
        img_src = [
            //1
            {
                flat : '3',
                square : 100.5,
                link : 'img\\blocks_1\\block_1_big.png',
                catalog : 'img\\blocks_1\\catalog_9.pdf'
            },
            //2
            {
                flat : '2',
                square : 81.9,
                link : 'img\\blocks_1\\block_2_big.png',
                catalog : 'img\\blocks_1\\catalog_17.pdf'
            },
            //3
            {
                flat : '2',
                square : 81.9,
                link : 'img\\blocks_1\\block_3_big.png',
                catalog : 'img\\blocks_1\\catalog_7.pdf'
            },
            //4
            {
                flat : '3',
                square : 100.4,
                link : 'img\\blocks_1\\block_4_big.png',
                catalog : 'img\\blocks_1\\catalog_6.pdf'
            },
            //5
            {
                flat : '3',
                square : 109.2,
                link : 'img\\blocks_1\\block_5_big.png',
                catalog : 'img\\blocks_1\\catalog_5.pdf'
            },
            //6
            {
                flat : '1',
                square : 57.2,
                link : 'img\\blocks_1\\block_6_big.png',
                catalog : 'img\\blocks_1\\catalog_4.pdf'
            },
            //7
            {
                flat : '1',
                square : 49.1,
                link : 'img\\blocks_1\\block_7_big.png',
                catalog : 'img\\blocks_1\\catalog_12.pdf'
            },
            //8
            {
                flat : '1',
                square : 57.2,
                link : 'img\\blocks_1\\block_8_big.png',
                catalog : 'img\\blocks_1\\catalog_11.pdf'
            },
            //9
            {
                flat : '3',
                square : 109.2,
                link : 'img\\blocks_1\\block_9_big.png',
                catalog : 'img\\blocks_1\\catalog_2.pdf'
            },
            //10
            {
                flat : '3',
                square : 105.4,
                link : 'img\\blocks_1\\block_10_big.png',
                catalog : 'img\\blocks_1\\catalog_3.pdf'
            },
            //12
            {
                flat : '3',
                square : 127.2,
                link : '../img/blocks_1/house8_4.jpg',
                catalog : '/../img/blocks_1/house8_4_down.pdf'
            },
            //13
            {
                flat : '1',
                square : 52.9,
                link : '../img/blocks_1/house8_3.jpg',
                catalog : '/../img/blocks_1/house8_3_down.pdf'
            },
            //14
            {
                flat : '1',
                square : 52.9,
                link : '../img/blocks_1/house8_2.jpg',
                catalog : '/../img/blocks_1/house8_2_down.pdf'
            },
            //15
            {
                flat : '1',
                square : 127.2,
                link : '../img/blocks_1/house8_1.jpg',
                catalog : '/../img/blocks_1/house8_1_down.pdf'
            },
            //16
            {
                flat : '3',
                square : 107.8,
                link : '../img/blocks_1/house7_5.jpg',
                catalog : '/../img/blocks_1/house7_5_down.pdf'
            },
            //17
            {
                flat : '3',
                square : 56.5,
                link : '../img/blocks_1/house7_4.jpg',
                catalog : '/../img/blocks_1/house7_4_down.pdf'
            },
            //17
            {
                flat : '1',
                square : 48.9,
                link : '../img/blocks_1/house7_3.jpg',
                catalog : '/../img/blocks_1/house7_3_down.pdf'
            },
            //18
            {
                flat : '1',
                square : 56.5,
                link : '../img/blocks_1/house7_2.jpg',
                catalog : '/../img/blocks_1/house7_2_down.pdf'
            },
            //19
            {
                flat : '3',
                square : 107.8,
                link : '../img/blocks_1/house7_1.jpg',
                catalog : '/../img/blocks_1/house7_1_down.pdf'
            },
            //20
            {
                flat : '3',
                square : 100.5,
                link : '../img/blocks_1/house6_4.jpg',
                catalog : '/../img/blocks_1/house6_4_down.pdf'
            },
            //21
            {
                flat : '2',
                square : 82.1,
                link : '../img/blocks_1/house6_3.jpg',
                catalog : '/../img/blocks_1/house6_3_down.pdf'
            },
            //22
            {
                flat : '2',
                square : 81.8,
                link : '../img/blocks_1/house6_2.jpg',
                catalog : '/../img/blocks_1/house6_2_down.pdf'
            },
            //23
            {
                flat : '3',
                square : 100.5,
                link : '../img/blocks_1/house6_1.jpg',
                catalog : '/../img/blocks_1/house6_1_down.pdf'
            },
            //24
            {
                flat : '3',
                square : 109.2,
                link : '../img/blocks_1/house5_5.jpg',
                catalog : '/../img/blocks_1/house5_5_down.pdf'
            },
            //25
            {
                flat : '1',
                square : 57.2,
                link : '../img/blocks_1/house5_4.jpg',
                catalog : '/../img/blocks_1/house5_4_down.pdf'
            },
            //26
            {
                flat : '1',
                square : 49.1,
                link : '../img/blocks_1/house5_3.jpg',
                catalog : '/../img/blocks_1/house5_3_down.pdf'
            },
            //27
            {
                flat : '1',
                square : 57.2,
                link : '../img/blocks_1/house5_2.jpg',
                catalog : '/../img/blocks_1/house5_2_down.pdf'
            },
            //28
            {
                flat : '3',
                square : 109.2,
                link : '../img/blocks_1/house5_1.jpg',
                catalog : '/../img/blocks_1/house5_1_down.pdf'
            },
            // 29
            {
                flat : '1',
                square : 49.0,
                link : '../img/blocks_1/house1_3.jpg',
                catalog : '/../img/blocks_1/house1_3.pdf'
            },
            // 30
            {
                flat : '3',
                square : 107.8,
                link : '../img/blocks_1/house1_1.jpg',
                catalog : '/../img/blocks_1/house1_1.pdf'
            },
            // 31
            {
                flat : '1',
                square : 56.4,
                link : '../img/blocks_1/house1_2.jpg',
                catalog : '/../img/blocks_1/house1_2.pdf'
            },
            // 32
            {
                flat : '1',
                square : 56.4,
                link : '../img/blocks_1/house1_4.jpg',
                catalog : '/../img/blocks_1/house1_4.pdf'
            },
            // 33
            {
                flat : '3',
                square : 107.8,
                link : '../img/blocks_1/house1_5.jpg',
                catalog : '/../img/blocks_1/house1_5.pdf'
            },
        ];

    for (var i = 0, len = all_plans_svg.length; i < len; i++){
        (function (j) {
            all_plans_svg[i].addEventListener('mouseenter', function () {
                img_collection[j].style.opacity = 1;
            });

            all_plans_svg[i].addEventListener('mouseout', function () {
                img_collection[j].style.opacity = 0.6;
            });
        })(i);

        all_plans_svg[i].addEventListener('click', function () {
            var iterator_object = this.getAttribute('data-object');
            var wraper = document.createElement('div');
            wraper.className = 'plan_block';
            wraper.setAttribute('style','opacity: 1');
            wraper.innerHTML = '<div class="modal_plan_block animated fadeIn">  \
                <div class="info_box"> \
                <h3>План квартиры</h3> \
            <p> \
            <span class="bold">Тип:</span> '+ img_src[iterator_object].flat+'-комнатная <br> \
            <span class="bold">Площадь:</span> '+ img_src[iterator_object].square +' м2 \
            </p> \
            <a href="'/*+ location.href*/ + img_src[iterator_object].catalog +'" class="first" download> \
                <div class="clear"> \
                <div class="icon_pdf"></div> \
                <span>Скачать планировку</span> \
            </div> \
            </a> \
            <div class="line"></div> \
                <a href="img/blocks_1/catalog.pdf" class="second" download> \
                <div class="clear"> \
                <div class="icon_pdf"></div> \
                <span>Скачать все планировки</span> \
            </div> \
            </a> \
            </div> \
            <div class="closer"></div> \
                <div class="wrapper_image_plan"> \
                    <img src="'+ location.href + '\\' + img_src[iterator_object].link +'" alt=""> \
                </div> \
                </div>';
            wraper.querySelector('.plan_block .modal_plan_block .closer').addEventListener('click', function () {
                document.body.removeChild(this.parentNode.parentNode);
            });

            wraper.querySelector('.plan_block .modal_plan_block .closer').addEventListener('mouseenter', function () {
                this.parentNode.parentNode.setAttribute('style', 'opacity: .7;');
            });

            wraper.querySelector('.plan_block .modal_plan_block .closer').addEventListener('mouseleave', function () {
                this.parentNode.parentNode.setAttribute('style', 'opacity: 1;');
            });
            document.body.appendChild(wraper);

        });
    }
})();