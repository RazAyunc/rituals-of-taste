const text = "Tea Ceremony";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}

// Запуск анимации с небольшой задержкой
window.onload = () => {
    setTimeout(typeWriter, 1500);
};
