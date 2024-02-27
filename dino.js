let charSelect = document.querySelectorAll('.characters'),
dino = document.querySelector('.dino'),
score = document.querySelector('.score'),
but = document.querySelector('.but'),
cat = document.querySelector('.cat'),
promo = document.querySelector('.promo'),
promocode = document.querySelector('.promocode'),
lose = document.querySelector('.lose'),
catDiv = document.querySelector('.catDiv'),
map = document.querySelector('.map'),
dinoPos = dino.getBoundingClientRect(),
catPos = cat.getBoundingClientRect(),
charId = null,
scored = 1,
losed = false,
catPosX = catPos.x,
speed = 15

//x - вертикаль
//у - горизонталь

promocode.addEventListener('input', () => {
    if (promocode.value == "Муся" || promocode.value == "муся") {
        losed = false
        lose.style.visibility = 'hidden'
        promo.style.visibility = 'hidden'
        map.style.height = 100 + "%"
        promo.style.marginTop = -100 + '%'
        but.style.width = 100 + "%"
        if (charId == "vi") {
            dino.src = "vi.png"
        }else{
            dino.src = "nik.png"
        }
        catPosX = -50
        cat.style.left = catPosX + "px"
        promocode.value = ""
        promocode.style.border = "1px solid black"
        run()
    }else{
        promocode.style.border = "1px solid red"
    }
})

//бег кошки
function run(){
    if(losed == false){
        if(catPosX <= -50){
            cat.style.right = -50 + "px"
            scored += 5
            score.innerText = `Ваш счет: ${scored}`
            catPosX = catPos.x
            if(speed > 0.1){
                speed -= 0.1
            }
        }
        if(catPosX > -50){
            setTimeout(run, speed)
            catPosX -= 2
            cat.style.left = catPosX + "px"
        }
    miss(catPosX)
    }
}

function miss(catPosX) {
 if (catPosX < 19 && catPosX > -45 && dinoPos.y > 109){
    losed = true
    lose.style.visibility = 'visible'
    promo.style.visibility = 'visible'
    map.style.height = 50 + "%"
    promo.style.marginTop = 100 + '%'
    but.style.width = 0
    if (charId == "vi") {
        dino.src = "viM.png"
    }else{
        dino.src = "nikM.png"
    }
 }
}


///выбор персонажа
charSelect.forEach(le => {
	le.addEventListener("click", () => {
	    document.querySelector('.select').style.visibility = 'hidden'
	    document.querySelector('.select').style.position = 'absolute'
	    map.style.visibility = 'visible'
	    dino.src = le.src
        charId = le.id
        scored = 0
        score.innerText = `Ваш счет: ${scored}`
        run()
	})
})



//прыжок
but.addEventListener('click', () => {
    if (losed == false) {
        let a = 125
        if (dinoPos.y == a){
            function jump() {
                if (dinoPos.y == 35) {
                    a = 125
                }
                if (dinoPos.y == a){
                    setTimeout(jump, speed)
                    dinoPos.y -= 2
                    a -= 2
                    dino.style.top = dinoPos.y + "px"
                }else if(dinoPos.y != 125){
                    setTimeout(jump, speed)
                    dinoPos.y += 2
                    a -= 2
                    dino.style.top = dinoPos.y + "px"
                }
            }
            jump()
        }
    }
});


