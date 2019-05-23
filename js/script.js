$(document).ready(function () {
    console.log("page is loaded");
    var current_zodiac = get_today_zodiac_sign();
    showHoroscope(current_zodiac);

    $("#preloader").hide();

    // This function uses POST request with ajax, jquery to the Horoscope-API
    function showHoroscope(sign) {
        $.ajax({
            type: 'POST',
            url: 'https://aztro.herokuapp.com?sign=' + sign + '&day=today',
            success: function (data) {
                document.getElementById("sign").innerHTML = sign;
                document.getElementById("message").innerHTML = data.description;
                document.getElementById("range").innerHTML = data.date_range;
                document.getElementById("color").innerHTML = data.color;
                document.getElementById("lucky_number").innerHTML = data.lucky_number;
                document.getElementById("lucky_time").innerHTML = data.lucky_time;
                document.getElementById("mood").innerHTML = data.mood;
                document.getElementById("compatibility").innerHTML = data.compatibility;
            }
        });
    }
    function get_today_zodiac_sign() {
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth() + 1;

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return 'Capricorn';
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 19)) {
            return 'Aquarius';
        } else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
            return 'Pisces';
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return 'Aries';
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 21)) {
            return 'Taurus';
        } else if ((month == 5 && day >= 22) || (month == 6 && day <= 21)) {
            return 'Gemini';
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 23)) {
            return 'Cancer';
        } else if ((month == 7 && day >= 24) || (month == 8 && day <= 23)) {
            return 'Leo';
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return 'Virgo';
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return 'Libra';
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return 'Scorpio';
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return 'Sagittarius';
        }
    }


    const panels = [...document.querySelectorAll(".select img")];

    function panelHand() {
        panels.forEach(panel => (panel.style.boxShadow = ''));
        this.style.boxShadow = ' 0 0 0 3px green';

        var getZodiac = ['capricorn', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius']
        var sign;

        console.log("You were born on " + month + ' ' + day);

        if (this.dataset.option === 'cap-0') {
            sign = getZodiac[0];
            showHoroscope(sign);

        } else if (this.dataset.option === 'cap-1') {
            sign = getZodiac[1];
            console.log(sign);
            showHoroscope(sign);


        } else if (this.dataset.option === 'cap-2') {
            sign = getZodiac[2];
            console.log(sign);
            showHoroscope(sign);

        } else if (this.dataset.option === 'cap-3') {
            sign = getZodiac[3];
            console.log(sign);
            showHoroscope(sign);

        } else if (this.dataset.option === 'cap-4') {
            sign = getZodiac[4];
            console.log(sign);
            showHoroscope(sign);
        }

        else if (this.dataset.option === 'cap-5') {
            sign = getZodiac[5];
            console.log(sign);
            showHoroscope(sign);
        }

        else if (this.dataset.option === 'cap-6') {
            sign = getZodiac[6];
            console.log(sign);
            showHoroscope(sign);
        }

        else if (this.dataset.option === 'cap-7') {
            sign = getZodiac[7];
            console.log(sign);
            showHoroscope(sign);
        }

        else if (this.dataset.option === 'cap-8') {
            sign = getZodiac[8];
            console.log(sign);
            showHoroscope(sign);
        }

        else if (this.dataset.option === 'cap-9') {
            sign = getZodiac[9];
            console.log(sign);
            showHoroscope(sign);
        }

        else if (this.dataset.option === 'cap-10') {
            sign = getZodiac[10];
            console.log(sign);
            showHoroscope(sign);
        }

        else if (this.dataset.option === 'cap-11') {
            sign = getZodiac[11];
            console.log(sign);
            showHoroscope(sign);
        }
    }
    panels.forEach(panel => panel.addEventListener('click', panelHand));

});

//pop - up
const buttonMenu = document.querySelector('button');
const activeElement = document.querySelectorAll('.element');

function addMenu() {

    for (i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle('active');

    }
}

buttonMenu.addEventListener('click', addMenu);



//Username
const inputMsg = document.querySelector('.input-name');
let username = document.querySelector('.name')

inputMsg.addEventListener('change', (event) => {

    console.log(event.target.value);
    username.textContent = event.target.value;

});