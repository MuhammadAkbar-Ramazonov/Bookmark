var elTabLink = document.querySelectorAll(".features-section__text");
var elTabItem = document.querySelectorAll(".features-section__item-top");
var elPanelItem = document.querySelectorAll(".features-section__item");

elTabLink.forEach(function(link){

    link.addEventListener("click" , function(evt){
        evt.preventDefault();
        

        elTabItem.forEach(function(item){
            item.classList.remove("features-section__item-top--active");
        })

        link.parentElement.classList.add("features-section__item-top--active");

        elPanelItem.forEach(function(panel){
            panel.classList.remove("features-section__item--activ");
        })

        document.querySelector(link.getAttribute("href")).classList.add("features-section__item--activ")

    })
})