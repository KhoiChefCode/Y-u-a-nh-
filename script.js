const messages = [
    "Em có chắc không?",
    "Thật sự chắc chắn hả??",
    "Em có thật sự chắc chắn không?",
    "em à làm ơn...",
    "Hãy nghĩ về điều đó đi!",
    "Nếu em nói không, a sẽ buồn lắm...",
    "Anh sẽ rất buồn...",
    "Anh sẽ rất rất rất buồn...",
    "Được rồi, anh sẽ ngừng hỏi...",
    "Chỉ đùa thôi, làm ơn nói có đi ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}