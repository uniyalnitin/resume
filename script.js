let links = document.querySelectorAll(".nav-links");
var interval;

function smoothScroll(targetSection){
    // let targetOffset = 1000;
    interval = setInterval(() => {
        scrollVertically(targetSection);
    }, 20);
}

function scrollVertically(targetSection){
    let targetSectionCoords = targetSection.getBoundingClientRect();
    if(targetSectionCoords.top <= 0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}

links.forEach(link => {
    let target_id = link.getAttribute("href").substr(1);
    if(target_id){
        var targetSection = document.getElementById(link.getAttribute("href").substr(1));
        console.log(link);
        link.addEventListener("click", function(event){
            event.preventDefault();
            smoothScroll(targetSection)
        });
    }
});

function animateSkillBar(){
    let skills = document.querySelectorAll(".skill-progress");
    skills.forEach(skill => {
        let skillElement = skill.querySelector('div');
        let skillLevel = skillElement.getAttribute("data-skill-level");
        let curLevel = 0;
        let interval = setInterval(function(){
            if(curLevel >= skillLevel){
                clearInterval(interval);
                return;
            }
            skillElement.style.width = curLevel + "%";
            curLevel += 2;
        }, 20);
    });
}

let skillSection = document.getElementById("skills");

var skillSectionInterval = setInterval(function(){
    let top = skillSection.getBoundingClientRect().top;
    if(top <= 350 && top >= -311){
        animateSkillBar();
        clearInterval(skillSectionInterval);
        return;
    }
})