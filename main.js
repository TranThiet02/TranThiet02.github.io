// Mở lightbox khi nhấn vào hình ảnh
function openLightbox(imgElement) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "flex"; // Sử dụng flex để căn giữa
    lightboxImg.src = imgElement.src;
}

// Đóng lightbox
function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

// Chuyển đổi chế độ Dark/Light mode
document.getElementById("theme-toggle").addEventListener("click", function() {
    if (document.body.classList.contains("light-mode")) {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
    }
});

// Hiển thị nút khi cuộn xuống và cuộn mượt khi nhấn vào nút
window.onscroll = function() {
    var scrollButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

document.getElementById("scroll-to-top").addEventListener("click", function(event){
    event.preventDefault();
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});
