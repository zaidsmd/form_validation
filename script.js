const nameRE = /^[a-z]{1,30}$/i;
const lNameRE = /^[a-z]{1,30}$/i;
const emailRE = /^\w+.\w+@ofppt.ma$/i;
const telephoneRE = /^(((([+0])212)([675]))\d{8})$|^0([675])\d{8}$/i;
document.querySelector("form").addEventListener('submit', e => {
    const error = document.querySelectorAll('.errorMsg');
    const inputs = document.querySelectorAll('input');
    let fNameValue = document.querySelector('[name=firstname]').value;
    let lNameValue = document.querySelector('[name=lastname]').value;
    let emailValue = document.querySelector('[name=email]').value;
    let telephoneValue = document.querySelector('[name=telephone]').value;
    let gender = document.querySelector('[name=gender]:checked');
    let groupe = document.querySelector('[name=group]:checked');
    let selectedClubs = document.querySelectorAll("option:checked")
    let key = true;
    error.forEach(function (e) {
        e.classList.remove('show')
    })
    inputs.forEach(function (e) {
        e.classList.remove('notValide');
        e.classList.remove('valide');
    });
    if (!nameRE.test(fNameValue)) {
        document.querySelector('[name=firstname]').classList.add('notValide');
        error[0].classList.add('show');
        key = false;
    } else {
        document.querySelector('[name=firstname]').classList.add('valide');
    }
    if (!lNameRE.test(lNameValue)) {
        document.querySelector('[name=lastname]').classList.add('notValide');
        error[1].classList.add('show')
        key = false;
    } else {
        document.querySelector('[name=lastname]').classList.add('valide');
    }
    if (!emailRE.test(emailValue)) {
        document.querySelector('[name=email]').classList.add('notValide');
        error[2].classList.add('show')
        key = false
    } else {
        document.querySelector('[name=email]').classList.add('valide');
    }
    if (!telephoneRE.test(telephoneValue)) {
        document.querySelector('[name=telephone]').classList.add('notValide');
        error[3].classList.add('show')
        key = false
    } else {
        document.querySelector('[name=telephone]').classList.add('valide');
    }
    if (gender === null) {
        key = false
        error[4].classList.add('show')
    }
    if (groupe === null) {
        key = false
        error[5].classList.add('show')
    }
    if (selectedClubs.length === 0 || selectedClubs.length >= 3) {
        key = false
        error[6].classList.add('show')
    }
    if (key === false) {
        e.preventDefault()
    }
})
