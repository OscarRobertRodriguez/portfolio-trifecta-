var historyBar = document.getElementById('history');


historyBar.addEventListener('click', (e) => {
    var target = e.currentTarget;
    var arrow = target.firstChild.nextSibling;
    arrow.classList.toggle('arrow-twist');
    target.classList.toggle('history-expand');
});