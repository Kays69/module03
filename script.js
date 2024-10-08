// Lưu trữ trạng thái ban đầu
const mainImage = document.getElementById('mainImage');
const undoButton = document.getElementById('undoButton');
const thumbnails = document.querySelectorAll('.thumb');

const originalSrc = mainImage.src;
const originalAlt = mainImage.alt;

// Hàm cập nhật hình ảnh khi di chuột qua hình thu nhỏ
function upDate(event) {
    console.log('Sự kiện đã được kích hoạt');
    const previewPic = event.target;
    console.log('Alt:', previewPic.alt);
    console.log('Source:', previewPic.src);

    // Cập nhật hình ảnh chính
    mainImage.src = previewPic.src;
    mainImage.alt = previewPic.alt;
}

// Hàm hoàn tác thay đổi về trạng thái ban đầu
function undoChange() {
    console.log('Hoàn tác đã được kích hoạt');
    mainImage.src = originalSrc;
    mainImage.alt = originalAlt;
}

// Thêm sự kiện lắng nghe cho các hình thu nhỏ
thumbnails.forEach(thumb => {
    thumb.addEventListener('mouseover', upDate);
});

// Thêm sự kiện lắng nghe cho nút hoàn tác
undoButton.addEventListener('click', undoChange);
