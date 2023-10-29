import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

const galleryItemsEl = galleryItems
    .map(({ preview, description, original }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`)
    .join('');

gallery.insertAdjacentHTML('beforeend', galleryItemsEl)

gallery.addEventListener('click', clickImage)

function clickImage(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const modal = basicLightbox.create(
        `<img src="${e.target.dataset.source}" width="800" height="600">`,

        {
            onShow: () => window.addEventListener('keydown', pressEscape),
            onClose: () => window.removeEventListener('keydown', pressEscape),
        }
    );

    modal.show();

    function pressEscape(e) {
        if (e.code === "Escape") {
            modal.close();
            
        }
    }
}