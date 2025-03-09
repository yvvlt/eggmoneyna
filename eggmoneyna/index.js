const image = document.getElementById('image');
const container = document.querySelector('.container');

container.addEventListener('mousemove', function(e) {
    const containerRect = container.getBoundingClientRect();
    const mouseY = e.clientY - containerRect.top;
    const containerHeight = containerRect.height;

    const scale = 1 + (mouseY / containerHeight) * 0.5;  // 1배에서 최대 1.5배 확대
    image.style.transform = `scale(${scale})`;
});

container.addEventListener('mouseleave', function() {
    image.style.transform = 'scale(1)';  // 마우스가 벗어나면 원래 크기로 돌아감
});
