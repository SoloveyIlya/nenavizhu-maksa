document.querySelectorAll('.nav-link').forEach((element) => {

    element.onclick = function(event) {
        document.querySelectorAll('.nav-link').forEach((e) => {
            e.classList.remove('active');
        });

        event.srcElement.classList.add('active');
    };
});