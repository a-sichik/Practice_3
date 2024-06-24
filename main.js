
//слайдер
document.addEventListener('DOMContentLoaded', function() {
    const sliderCircles = document.querySelectorAll('.slider_circles_item');
    const sliderImages = document.querySelectorAll('.slider_img');
    let currentIndex = 0;

    sliderCircles.forEach((circle, index) => {
        circle.addEventListener('click', function() {
            
            sliderCircles.forEach(c => c.classList.remove('active'));
            sliderImages.forEach(img => img.classList.remove('active'));
            this.classList.add('active');
            sliderImages[index].classList.add('active');
        });
    });
});


//слайдер_кружки
document.addEventListener('DOMContentLoaded', function() {
    const sliderCircles = document.querySelectorAll('.slider_circles_item');

                sliderCircles.forEach(circle => {
                    circle.addEventListener('click', function() {
                        
                        sliderCircles.forEach(c => c.classList.remove('active'));
                        
                        this.classList.add('active');
                    });
                });
            });


  //бургер закрытие
  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        const burger = document.querySelector('.burger');
        const menu = document.querySelector('.menu');

        if (!burger.contains(event.target)) {
            menu.classList.remove('open');
        }
    });
});



