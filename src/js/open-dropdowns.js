function openDropdown(event) {
    let node = event.currentTarget.closest('div.dropdown-block');

    event.currentTarget.removeEventListener('click', openDropdown);
    event.currentTarget.addEventListener('click', closeDropdown);

    const titleWrapperHeight = node.querySelector('.dropdown-block__title-wrapper').clientHeight;
    const contentHeight = node.querySelector('.dropdown-block__content').clientHeight;

    node.classList.add('opened');
    node.style.maxHeight = `${titleWrapperHeight + contentHeight + 18 + 40}px`;
}

function closeDropdown(event)
{
    event.currentTarget.addEventListener('click', openDropdown);
    event.currentTarget.removeEventListener('click', closeDropdown);

    const dropdownBlock = event.currentTarget.closest('div.dropdown-block');

    dropdownBlock.classList.remove('opened');
    dropdownBlock.style.maxHeight = `calc(30px + 40px)`;
}

document.addEventListener('DOMContentLoaded', e => {
    const dropdownBlockTitles = document.querySelectorAll('.dropdown-block__title-wrapper');

    dropdownBlockTitles.forEach(item => item.addEventListener('click', openDropdown));
})