let links = document.querySelectorAll(".nav-links");

function smoothScroll(event, targetOffset){
    event.preventDefault();
    // let targetOffset = 1000;
    let currentOffset = window.pageYOffset;
    let scrollByOffset = 50;
    console.log(targetOffset, currentOffset);   
    let scrollInterval = setInterval(() => {
        if(currentOffset >= targetOffset){
            clearInterval(scrollInterval);
            return;
        }
        currentOffset += scrollByOffset;
        window.scrollBy(0, scrollByOffset);
    }, 20);
}

links.forEach(link => {
    let target_id = link.getAttribute("href").substr(1);
    if(target_id){

        var target = document.getElementById(link.getAttribute("href").substr(1));
        console.log(link);
        link.addEventListener("click", function(event){
            smoothScroll(event, target.offsetTop)
        });
    }
});