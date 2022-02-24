function main() {

    if (document.documentElement.scrollWidth < 600) {
        document.getElementById("fullscreen").classList.add("u-flex-column");
    } else {
        document.getElementById("fullscreen").classList.remove("u-flex-column");
    }
}
main();
window.addEventListener('resize', main);

function loadmore() {
    let x = 0;
    let classDisapeared = document.getElementsByClassName("disapear");
    let len = classDisapeared.length;
    if (classDisapeared[x] != undefined) {
        while (x < len + 1) {
            classDisapeared[0].classList.remove("disapear");
            x += 1;
            if (x === 3) {
                break;
            }
        }
    } else {
        alert("Se han cargado todos los post😢");
    }
}

function loadall() {
    let x = 0;
    let classDisapeared = document.getElementsByClassName("disapear");
    let len = classDisapeared.length;
    if (classDisapeared[x] != undefined) {
        while (x < len) {
            classDisapeared[0].classList.remove("disapear");
            x += 1;
        }
    } else {
        document.getElementById("loadmore").disabled = true;
    }
}

$(document).ready(function () {
    let arr = [];
    $('input[type=checkbox]').on('change', function () {
        if ($(this).is(':checked')) {

            arr.push($(this).val());
        } else {
            let aux = 0;
            aux = arr.indexOf($(this).val());
            if (aux > -1) {
                arr.splice(aux, 1);
            }
        }
        loadall();
        showCategories(arr);
    });
});

function disapear(arr) {
    let cards;
    let rows;
    let lon;
    if (arr.length > 0) {
        cards = document.getElementsByClassName("card--slide-up");
        lon = cards.length;
        for (let i = 0; i < lon; i++) {
            cards[i].style.padding=0;
            cards[i].style.display = "none";
        }
    }
    else {
        cards = document.getElementsByClassName("card--slide-up");
        lon = cards.length;
        for (let i = 0; i < lon; i++) {
            cards[i].style.display = "inline-block";
        }
    }
    console.log(lon)
}
function apear(classe) {
    cards = document.getElementsByClassName(classe);
    lon = cards.length;
    for (let i = 0; i < lon; i++) {
        cards[i].style.display = "inline-block";
    }
}


function showCategories(arr) {
    disapear(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr)
        let val = arr[i];
        switch (val) {
            case '1':
                apear("general");
                break;
            case '2':
                apear("ciberseguridad");
                break;
            case '3':
                apear("programacion")
                break;
            case '4':
                apear("ciencias")
                break;
            case '5':
                apear("matematicas")
                break;
            default:
                console.log('flag 4');
        }
        
    }
}

