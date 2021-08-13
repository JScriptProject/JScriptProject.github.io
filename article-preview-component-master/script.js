let shareIcon = document.querySelector('.share-icon');


shareIcon.addEventListener('mouseenter', function(){
    document.querySelector('.footer-section').classList.add('back-color');
    document.querySelector('.effects').classList.add('active');
    document.querySelector('.hover-section').classList.add('not-active')
})

shareIcon.addEventListener('mouseleave', function(){
    document.querySelector('.footer-section').classList.remove('back-color');
    document.querySelector('.effects').classList.remove('active');
    document.querySelector('.hover-section').classList.remove('not-active')
})
