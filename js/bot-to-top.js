var botToTop = document.getElementById('botToTop');

window.onscroll = function () {
    if (document.documentElement.scrollTop >= 300) {
        botToTop.style.display = "block";
    } else {
        botToTop.style.display = "none";
    }
};

function handleBotToTop()
{ 
    window.scrollTo({top: 0, behavior: 'smooth'});
}