function getRandomImage()
{
    const randomNum = Math.ceil(Math.random() * 23);

    return `upload/reviews/${randomNum}.jpg`;
}

function getImageByPosition(position = 0)
{
    return document.querySelector(`img.fancybox-image[data-position="${position}"]`).src;
}

function computePositions(currentPosition)
{
    const _currentPosition = parseInt(currentPosition);

    const prevPosition = _currentPosition - 1 >= 0 ? _currentPosition - 1 : 7;
    const nextPosition = _currentPosition + 1 <= 7 ? _currentPosition + 1 : 0;

    return [prevPosition, nextPosition];
}

function renderImage(currentPosition)
{
    const [prevPositionNumber, nextPositionNumber] = computePositions(currentPosition);
    document.getElementById('prev-image').dataset.imageNum = `${prevPositionNumber}`;
    document.getElementById('next-image').dataset.imageNum = `${nextPositionNumber}`;

    document.getElementById('review-detail').src = getImageByPosition(currentPosition);
}

function openReviewModal(event)
{
    const currentPosition = parseInt(event.currentTarget.dataset.position);

    renderImage(currentPosition);

    const reviewModalWrapper = document.getElementById('review-modal');
    reviewModalWrapper.classList.add('showed');
    document.body.classList.add('not-scrollable');
}

function closeReviewModal(event)
{
    document.getElementById('review-modal').classList.remove('showed');
    document.body.classList.remove('not-scrollable');
}

document.addEventListener('DOMContentLoaded', e => {
    document.querySelectorAll('img.fancybox-image')
        .forEach((item, index) => {
            item.src = getRandomImage();
            item.dataset.position = `${index}`;
            item.addEventListener('click', openReviewModal)
            item.addEventListener('keydown', e => e.key === 'Enter' ? openReviewModal(e) : null);
        });

    document.querySelectorAll('button.review-modal-btn')
        .forEach(item => item.addEventListener('click', e => {
            renderImage(e.currentTarget.dataset.imageNum);
        }))

    document.getElementById('close-detail-review').addEventListener('click', closeReviewModal);
})