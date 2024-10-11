// Открытие модального окна и загрузка фильма
function openModal(movieId) {
    document.getElementById('modal').style.display = 'block';
    const movies = {
        movie1: { title: 'Фильм 1', image: 'cover1.jpg', description: 'Описание фильма 1', videoLink: 'https://example.com/movie1' },
        movie2: { title: 'Фильм 2', image: 'cover2.jpg', description: 'Описание фильма 2', videoLink: 'https://example.com/movie2' },
        movie3: { title: 'Фильм 3', image: 'cover3.jpg', description: 'Описание фильма 3', videoLink: 'https://example.com/movie3' },
        movie4: { title: 'Фильм 4', image: 'cover4.jpg', description: 'Описание фильма 4', videoLink: 'https://example.com/movie4' },
        movie5: { title: 'Фильм 5', image: 'cover5.jpg', description: 'Описание фильма 5', videoLink: 'https://example.com/movie5' },
        movie6: { title: 'Фильм 6', image: 'cover6.jpg', description: 'Описание фильма 6', videoLink: 'https://example.com/movie6' },
        movie7: { title: 'Фильм 7', image: 'cover7.jpg', description: 'Описание фильма 7', videoLink: 'https://example.com/movie7' },
        movie8: { title: 'Фильм 8', image: 'cover8.jpg', description: 'Описание фильма 8', videoLink: 'https://example.com/movie8' },
        movie9: { title: 'Фильм 9', image: 'cover9.jpg', description: 'Описание фильма 9', videoLink: 'https://example.com/movie9' },
        movie10: { title: 'Фильм 10', image: 'cover10.jpg', description: 'Описание фильма 10', videoLink: 'https://example.com/movie10' }
    };

    const movie = movies[movieId];
    if (movie) {
        document.getElementById('modal-title').textContent = movie.title;
        document.getElementById('modal-image').src = movie.image;
        document.getElementById('modal-description').textContent = movie.description;
        document.getElementById('video-link').href = movie.videoLink;  // Устанавливаем ссылку на видео
        document.getElementById('video-link').textContent = `Смотреть ${movie.title}`;
        
        loadReviews(movieId);
    }
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Отправка отзыва
function submitReview() {
    const movieTitle = document.getElementById('modal-title').textContent;
    const reviewName = document.getElementById('review-name').value;
    const reviewText = document.getElementById('review-input').value;

    if (reviewName && reviewText) {
        const review = { name: reviewName, text: reviewText };

        let reviews = JSON.parse(localStorage.getItem(movieTitle)) || [];
        reviews.push(review);
        localStorage.setItem(movieTitle, JSON.stringify(reviews));

        document.getElementById('review-name').value = '';
        document.getElementById('review-input').value = '';

        loadReviews(movieTitle);
    } else {
        alert('Введите имя и отзыв.');
    }
}

// Загрузка отзывов из localStorage
function loadReviews(movieId) {
    const movieTitle = document.getElementById('modal-title').textContent;
    const reviews = JSON.parse(localStorage.getItem(movieTitle)) || [];
    const modalReviews = document.getElementById('modal-reviews');

    modalReviews.innerHTML = '';

    reviews.forEach((review, index) => {
        const reviewItem = `
            <div class="review-item">
                <p><strong>${review.name}:</strong> ${review.text}</p>
                <button onclick="deleteReview('${movieTitle}', ${index})">Удалить</button>
            </div>`;
        modalReviews.innerHTML += reviewItem;
    });
}

// Удаление отзыва
function deleteReview(movieTitle, index) {
    let reviews = JSON.parse(localStorage.getItem(movieTitle)) || [];
    reviews.splice(index, 1);  // Удаляем отзыв по индексу
    localStorage.setItem(movieTitle, JSON.stringify(reviews));  // Сохраняем обновлённые отзывы

    loadReviews(movieTitle);  // Перезагружаем отзывы после удаления
}