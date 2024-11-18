document.getElementById('curtain').addEventListener('click', function () {
    this.classList.add('hidden');
});
const lamp = document.querySelector('.lamp');
const stageImages = document.querySelectorAll('.stage img');
let isRabbitVisible = true;

lamp.addEventListener('click', () => {
    lamp.classList.toggle('active');
    const isActive = lamp.classList.contains('active');
    stageImages.forEach(img => {
        if (isActive) {
            img.style.opacity = '1';
            if (isRabbitVisible){
                dove.style.opacity = '0';
                rabbit.style.transition = 'opacity 1s ease-in-out';
            }
            else{
                rabbit.style.opacity = '0';
                dove.style.transition = 'opacity 1s ease-in-out';
            }
            img.style.pointerEvents = 'auto';
        } else {
            img.style.opacity = '0';
            img.style.pointerEvents = 'none';
        }
    });
});
const rabbit = document.querySelector('.rabbit');
const dove = document.querySelector('.dove');

rabbit.addEventListener('click', () => {
    if (isRabbitVisible) {
        rabbit.style.transition = 'transform 0.5s ease-in-out';
        dove.style.transition = 'transform 0.5s ease-in-out, opacity 1s ease-in-out';
        rabbit.style.transform = 'translateY(100px)';
        setTimeout(() => {
            rabbit.style.opacity = '0';
            dove.style.transform = 'translateY(0)';
            dove.style.opacity = '1';
        }, 500);
        isRabbitVisible = false;
    }
});
dove.addEventListener('click', () => {
    if (!isRabbitVisible) {
        rabbit.style.transition = 'transform 0.5s ease-in-out, opacity 1s ease-in-out';
        dove.style.transition = 'transform 0.5s ease-in-out';
        dove.style.transform = 'translateY(100px)';
        setTimeout(() => {
            dove.style.opacity = '0';
            rabbit.style.transform = 'translateY(0)';
            rabbit.style.opacity = '1';
        }, 500);
        isRabbitVisible = true;
    }
});