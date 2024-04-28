(function () {
    var square = document.querySelector('.pills');

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
}

        if (entry.isIntersecting) {
            entry.target.classList.add('.pills-anim');
        }
    });
});

    observer.observe(pills);
})();