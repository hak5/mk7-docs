function togglePanel(el) {
    el.classList.toggle("endpoint-panel");
    var content = el.parentElement.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
       content.style.display = "block";
    }
}

function addHandlers() {
    document.querySelectorAll('.endpoint-collapsible').forEach(item => {
        item.addEventListener('click', event => {
            togglePanel(item);
        })
    })
}
