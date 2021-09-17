// slider

let sliderItem = document.querySelector('.slider-items').children;
let slideLeft = document.querySelector('.slide-left');
let slideRight = document.querySelector('.slide-right');

let index = 0;

let nombreSlides= sliderItem.length;
console.log(nombreSlides)

slideLeft.onclick=function() {
    next("prev");
}
slideRight.onclick=function() {
    next("next");
}


function next(direction){
    if(direction == "next"){
        index++;
        if(index==nombreSlides){
            index=0;
        }
    } else {
        if(index==0){
            index = nombreSlides -1 ;
        } else {
            index--;
        }
    }



    for(i=0; i < nombreSlides ; i++){
        sliderItem[i].classList.remove("active");
    }
    sliderItem[index].classList.add("active");

}