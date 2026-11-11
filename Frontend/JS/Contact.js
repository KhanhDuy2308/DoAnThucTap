// Lấy các element
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

// Khi click vào nút Here -> Hiện modal
openBtn.onclick = function() {
    modal.style.display = "block";
}

// Khi click vào dấu X -> Ẩn modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Khi click ra ngoài khung modal -> Ẩn modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


