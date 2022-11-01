const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNb = document.querySelectorAll('.slider-content-left-top img')
const imgNbLi = document.querySelectorAll('.slider-content-left-bottom li')
console.log(imgNb)
let temp = 0;
rightbtn.addEventListener('click', function() {
    removeactive()
    temp = temp + 1
    if (temp > imgNb.length-1) {
        temp = 0
    }
    imgNbLi[temp].classList.add("active")
    document.querySelector(".slider-content-left-top").style.right = temp  *100 + "%"
})

leftbtn.addEventListener('click', function() {
    removeactive()
    temp = temp - 1
    if (temp < 0) {
        temp = imgNb.length - 1 
    }
    imgNbLi[temp].classList.add("active")
    document.querySelector(".slider-content-left-top").style.right = temp  *100 + "%"
})

imgNbLi.forEach(function(image,index) {
    image.addEventListener('click', function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index  *100 + "%"
        image.classList.add("active")
        temp = index
    })
})

function removeactive () {
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}

function imgAuto () {
    temp = temp + 1
    if (temp > imgNb.length-1) {
        temp = 0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = temp  *100 + "%"
    imgNbLi[temp].classList.add("active")
    if(imgNbLi.forEach(function(image,index) {
        image.addEventListener('click', function(){
        })
    })){
        clearInterval(imgAuto)
    }
}

setInterval(imgAuto,3000)