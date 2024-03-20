document.querySelectorAll('.nav-link').forEach((element) => {

    element.onclick = function(event) {
        document.querySelectorAll('.nav-link').forEach((e) => {
            e.classList.remove('active');
        });

        event.srcElement.classList.add('active');
    };
});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('slide');
        }
    });
}
  
let options = {
    threshold: [0.5] 
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.tgk, .tt, .inst, .youtube');
  
for (let elm of elements) {
    observer.observe(elm);
}