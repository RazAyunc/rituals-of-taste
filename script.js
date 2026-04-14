// Ждем полной загрузки страницы
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    // Скрываем прелоадер через 2 секунды
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            // Запускаем печатную машинку ПОСЛЕ исчезновения прелоадера
            startTypewriter();
        }, 800);
    }, 2000);
});

// Функция эффекта печатающейся машинки
function startTypewriter() {
    const text = "Tea Ceremony";
    const target = document.getElementById("typewriter");
    let i = 0;

    function type() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 150); // Скорость печати
        }
    }
    type();
}
