// Open the lightbox with the clicked image
function openImage(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imgElement.src;
    lightbox.classList.remove('hidden');
}

// Close the lightbox
function closeImage() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
}

.contact-form {
    text-align: center;
    padding: 40px 20px;
}

.contact-form form {
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.contact-form label {
    display: block;
    margin: 10px 0 5px;
    font-weight: bold;
    color: #333;
}

.contact-form input, .contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.contact-info {
    text-align: center;
    margin-top: 40px;
    padding: 20px;
}

.contact-info h2 {
    margin-bottom: 20px;
}

.contact-info p {
    font-size: 16px;
    color: #555;
}







