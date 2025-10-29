// js/snow-effect.js
document.addEventListener("DOMContentLoaded", () => {
    const snowContainer = document.querySelector(".snow-container");
    const numberOfSnowflakes = 50; // Số lượng hạt tuyết

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        // Random kích thước hạt tuyết
        const size = Math.random() * 3 + 2; // Từ 2px đến 5px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // Random vị trí xuất hiện (chiều ngang)
        snowflake.style.left = `${Math.random() * 100}vw`;

        // Random thời gian animation để tạo sự ngẫu nhiên trong rơi
        snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`; // Từ 5s đến 15s
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Delay để chúng không rơi cùng lúc

        snowContainer.appendChild(snowflake);
    }
});