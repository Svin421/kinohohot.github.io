function openModal(movie) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const videoSource = document.getElementById('video-source');
    const videoPlayer = document.getElementById('video-player');
    const reviewsList = document.getElementById('reviews-list');

    const movies = {
        movie1: {
            title: "Рик и Морти",
            description: "",
            image: "rik1.jpg",
            video: "Рик и Морти.mp4"  // Убедитесь, что файл существует
        },
        movie2: {
            title: "Блэйд",
            description: "",
            image: "Blade.jpg",
            video: "1080.mp4"  // Убедитесь, что файл существует
        },
        movie3: {
            title: "Дэдпул 3",
            description: "",
            image: "дедпул.jpg",
            video: "dyedpul-s-loganom.mp4"  // Убедитесь, что файл существует
        },
        movie4: {
            title: "Звёздные войны: Эпизод 1",
            description: "",
            image: "звездные.jpg",
            video: "Звёздные_войны_Эпизод_I_Скрытая_угроза.mp4"  // Убедитесь, что файл существует
        }
    };

    const selectedMovie = movies[movie];
    
    modalTitle.textContent = selectedMovie.title;
    modalImage.src = selectedMovie.image;
    modalDescription.textContent = selectedMovie.description;
    videoSource.src = selectedMovie.video;
    
    videoPlayer.load(); // Загружаем видео
    modal.style.display = "block";
    reviewsList.innerHTML = '';
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
    document.getElementById('nickname').value = '';
    document.getElementById('review-text').value = '';
}

function loadVideo(event) {
    const videoPlayer = document.getElementById('video-player');
    const file = event.target.files[0]; // Получаем файл из выбранного

    if (file) {
        const fileURL = URL.createObjectURL(file); // Создаем URL для видеофайла
        videoPlayer.src = fileURL; // Устанавливаем загруженное видео в плеер
        videoPlayer.play(); // Автоматически воспроизводим видео
    }
}

function submitReview() {
    const nickname = document.getElementById('nickname').value;
    const reviewText = document.getElementById('review-text').value;

    if (nickname.trim() === "" || reviewText.trim() === "") {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    const reviewList = document.getElementById('reviews-list');
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `
        <strong>${nickname}</strong>: ${reviewText}
        <button onclick="deleteReview(this)">Удалить</button>
    `;
    reviewList.appendChild(newReview);

    document.getElementById('nickname').value = '';
    document.getElementById('review-text').value = '';
}

function deleteReview(button) {
    const review = button.parentNode; // Получаем элемент отзыва
    review.remove(); // Удаляем его из DOM
}


