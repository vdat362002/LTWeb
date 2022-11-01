const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNb = document.querySelectorAll('.slider-content-left-top img')
const imgNbLi = document.querySelectorAll('.slider-content-left-bottom li')
console.log(imgNb)
let index = 0;
rightbtn.addEventListener('click', function() {
    index = index + 1
    if (index > imgNb.length-1) {
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index  *100 + "%"
})

leftbtn.addEventListener('click', function() {
    index = index - 1
    if (index < 0) {
        index = imgNb.length - 1 
    }
    document.querySelector(".slider-content-left-top").style.right = index  *100 + "%"
})

imgNbLi.forEach(function(image,index) {
    image.addEventListener('click', function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index  *100 + "%"
        image.classList.add("active")
    })
})

function removeactive () {
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}

function imgAuto () {
    index = index + 1
    if (index > imgNb.length-1) {
        index = 0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index  *100 + "%"
    imgNbLi[index].classList.add("active")
}

setInterval(imgAuto,3000)