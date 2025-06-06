// Функция, которая будет показывать сообщение при нажатии на кнопку
function showMessage() {
    alert("Привет! Ты нажал кнопку.");
}

// Функция для установки яркости фона в зависимости от времени
function adjustBackgroundBrightness() {
    const hour = new Date().getHours(); // Получаем текущий час

    let brightness;
    if (hour >= 6 && hour < 12) {
        // Утро (6 AM - 12 PM) - яркость высокая
        brightness = 1.5;
    } else if (hour >= 12 && hour < 18) {
        // Днем (12 PM - 6 PM) - нормальная яркость
        brightness = 1;
    } else if (hour >= 18 && hour < 22) {
        // Вечер (6 PM - 10 PM) - немного темнее
        brightness = 0.7;
    } else {
        // Ночь (10 PM - 6 AM) - темный фон
        brightness = 0.4;
    }

    // Изменяем яркость фона
    document.body.style.setProperty('--background-brightness', brightness);
}

// Вызываем функцию при загрузке страницы
adjustBackgroundBrightness();

// Устанавливаем повторное выполнение при каждом обновлении страницы
setInterval(adjustBackgroundBrightness, 60000); // Проверяем каждую минуту