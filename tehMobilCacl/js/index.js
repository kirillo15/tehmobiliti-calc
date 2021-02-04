
const calcResult = document.querySelector('.calc-result')
const caclImgContainer = document.querySelector('.cacl-img-container')
const caclType = document.querySelectorAll('.system-type__item')
const caclQuantityItem = document.querySelectorAll('.cacl-quantity__item')

caclImgContainer.addEventListener('click', getCaclImgContainer)

function getCaclImgContainer(event) {
    getCaclAll(caclType, caclQuantityItem, calcResult)
}

function getCaclAll(type, quantity, result) {
    let sum = 0
    let typeSm = +[...type].filter(item => item.classList.contains('isActive'))[0].dataset.hd
    let quantitySm = +[...quantity].filter(item => item.classList.contains('isActive'))[0].dataset.ip
    
    if(event.target.dataset.hd) {
        type.forEach(item => item.classList.remove('isActive'))
        event.target.classList.add('isActive')
        typeSm = +[...type].filter(item => item.classList.contains('isActive'))[0].dataset.hd
    }

    if(event.target.dataset.ip) {
        quantity.forEach(item => item.classList.remove('isActive'))
        event.target.classList.add('isActive')
        quantitySm = +[...quantity].filter(item => item.classList.contains('isActive'))[0].dataset.ip
    }

    const calcTableItem = document.querySelectorAll('.calc-table-price__result')

    for(let key of calcTableItem) {
        sum += +key.innerText
    }

    sum += +typeSm + +quantitySm
    result.innerHTML = sum
}

const calcTableQuantity = document.querySelectorAll('.calc-table-quantity')

calcTableQuantity.forEach(item => {
    item.addEventListener('click', getCalcTableQuantity)
})

function getCalcTableQuantity(event) {
    let target = event.target
    let capRes = target.parentElement.parentElement.children[3].children[0]
    let sum = +target.parentElement.parentElement.children[3].children[0].innerText

    if(target.classList.contains('calc-table-quantity__right')) {
        +target.previousElementSibling.innerText++
        sum += 200
        capRes.innerHTML = sum
    }

    if(target.classList.contains('calc-table-quantity__left')) {
        if(+target.nextElementSibling.innerText > 0) {
            +target.nextElementSibling.innerText--
            sum -= 200
            capRes.innerHTML = sum
        } 
        
    }
}


const caclTop = document.querySelector('.cacl-top')

caclTop.addEventListener('click', showCaclInfoImg)

function showCaclInfoImg(e) {
    
    const target = e.target

    if(target.classList.contains('cacl-info-img')) {
        target.nextElementSibling.classList.add('isActive')
    }

    if(target.classList.contains('cacl-type-subtitle-close')) {
        target.parentElement.classList.remove('isActive')
    }
}

