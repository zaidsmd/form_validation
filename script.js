const nameRE = /^[a-z]{1,30}$/i;
const emailRE = /^(\w+\.\w+)@ofppt.ma$/i;
const telephoneRE = /^(((([+0])212)([675]))\d{8})$|^0([675])\d{8}$/i;
let error = document.querySelectorAll('.errorMsg');
const switcher = document.querySelector('[type=checkbox]');
let inputs = document.querySelectorAll('input');
let fieldset = document.querySelectorAll('fieldset');
let button = document.querySelector('[type=submit]');
document.querySelector("form").addEventListener('submit', e => {
    if (switcher.checked === false) {
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
        fieldset.forEach(function (e) {
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
        if (!nameRE.test(lNameValue)) {
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
            document.querySelector('fieldset:has([name=gender])').classList.add('notValide')
            key = false
            error[4].classList.add('show')
        } else {
            document.querySelector('fieldset:has([name=gender])').classList.add('valide')
        }
        if (groupe === null) {
            document.querySelector('fieldset:has([name=group])').classList.add('notValide')
            key = false
            error[5].classList.add('show')
        } else {
            document.querySelector('fieldset:has([name=group])').classList.add('valide')
        }
        if (selectedClubs.length === 0 || selectedClubs.length >= 3) {
            document.querySelector('fieldset:has([name=club])').classList.add('notValide')
            key = false
            error[6].classList.add('show')
        } else {
            document.querySelector('fieldset:has([name=club])').classList.add('valide')
        }
        if (key === false) {
            e.preventDefault()
        }
    }

})
switcher.addEventListener('change', () => {
    error = document.querySelectorAll('.errorMsg');
    inputs = document.querySelectorAll('input');
    fieldset = document.querySelectorAll('fieldset');
    if (switcher.checked === true) {
        error.forEach(function (e) {
            e.classList.remove('show')
        })
        inputs.forEach((e) => {
            e.classList.remove('notValide')
            e.classList.remove('valide')
        })
        fieldset.forEach((e) => {
            e.classList.remove('notValide')
            e.classList.remove('valide')
        })
        let nameKey, lNameKey, emailKey, teleKey, genderKey, groupKey, clubsKey;
        button.setAttribute('disabled', '');
        document.querySelectorAll('[type=text]').forEach(
            (e) => {
                if (e.id === 'name') {
                    e.addEventListener('keyup', () => {
                        let value = e.value;
                        if (nameRE.test(value) === false) {
                            e.classList.remove('valide');
                            e.classList.add('notValide');
                            error[0].classList.add('show');
                            nameKey = false;
                        } else {
                            e.classList.remove('notValide');
                            e.classList.add('valide');
                            error[0].classList.remove('show');
                            nameKey = true;
                        }
                        if (nameKey && lNameKey && emailKey && teleKey && genderKey && groupKey && clubsKey === true) {
                            button.removeAttribute('disabled');
                        } else {
                            button.setAttribute('disabled', '');
                        }
                    })
                } else if (e.id === 'lastName') {
                    e.addEventListener('keyup', () => {
                        let value = e.value;
                        if (nameRE.test(value) === false) {
                            e.classList.remove('valide');
                            e.classList.add('notValide');
                            error[1].classList.add('show');
                            lNameKey = false;
                        } else {
                            e.classList.remove('notValide');
                            e.classList.add('valide');
                            error[1].classList.remove('show');
                            lNameKey = true;
                        }
                        if (nameKey && lNameKey && emailKey && teleKey && genderKey && groupKey && clubsKey === true) {
                            button.removeAttribute('disabled');
                        } else {
                            button.setAttribute('disabled', '');
                        }
                    })
                } else if (e.id === 'email') {
                    e.addEventListener('keyup', () => {
                        let value = e.value;
                        if (emailRE.test(value) === false) {
                            e.classList.remove('valide');
                            e.classList.add('notValide');
                            error[2].classList.add('show');
                            emailKey = false;
                        } else {
                            e.classList.remove('notValide');
                            e.classList.add('valide');
                            error[2].classList.remove('show');
                            emailKey = true;
                        }
                        if (nameKey && lNameKey && emailKey && teleKey && genderKey && groupKey && clubsKey === true) {
                            button.removeAttribute('disabled');
                        } else {
                            button.setAttribute('disabled', '');
                        }
                    })
                } else if (e.id === 'tele') {
                    e.addEventListener('keyup', () => {
                        let value = e.value;
                        if (telephoneRE.test(value) === false) {
                            e.classList.remove('valide');
                            e.classList.add('notValide');
                            error[3].classList.add('show');
                            teleKey = false;
                        } else {
                            e.classList.remove('notValide');
                            e.classList.add('valide');
                            error[3].classList.remove('show');
                            teleKey = true;
                        }
                        if (nameKey && lNameKey && emailKey && teleKey && genderKey && groupKey && clubsKey === true) {
                            button.removeAttribute('disabled');
                        } else {
                            button.setAttribute('disabled', '');
                        }
                    })
                }
            }
        )
        document.querySelectorAll('[name=gender]').forEach(e => {
            e.addEventListener('change', () => {
                if (document.querySelector('[name=gender]:checked') === null) {
                    document.querySelector('fieldset:has([name=gender])').classList.add('notValide');
                    document.querySelector('fieldset:has([name=gender])').classList.remove('valide');
                    error[4].classList.add('show');
                    genderKey = false;
                } else {
                    document.querySelector('fieldset:has([name=gender])').classList.remove('notValide');
                    document.querySelector('fieldset:has([name=gender])').classList.add('valide');
                    error[4].classList.remove('show');
                    genderKey = true;
                }
                if (nameKey && lNameKey && emailKey && teleKey && genderKey && groupKey && clubsKey === true) {
                    button.removeAttribute('disabled');
                } else {
                    button.setAttribute('disabled', '');
                }
            })
        })
        document.querySelectorAll('[name=group]').forEach(e => {
            e.addEventListener('change', () => {
                if (document.querySelector('[name=group]:checked') === null) {
                    document.querySelector('fieldset:has([name=group])').classList.add('notValide');
                    document.querySelector('fieldset:has([name=group])').classList.remove('valide');
                    error[5].classList.add('show');
                    groupKey = false;
                } else {
                    document.querySelector('fieldset:has([name=group])').classList.remove('notValide');
                    document.querySelector('fieldset:has([name=group])').classList.add('valide');
                    error[5].classList.remove('show');
                    groupKey = true;
                }
                if (nameKey && lNameKey && emailKey && teleKey && genderKey && groupKey && clubsKey === true) {
                    button.removeAttribute('disabled');
                } else {
                    button.setAttribute('disabled', '');
                }
            })
        })
        document.querySelectorAll('option').forEach((e) => {
            e.addEventListener('click', () => {
                if (document.querySelectorAll('option:checked').length === 0 || document.querySelectorAll('option:checked').length > 3) {
                    document.querySelector('fieldset:has(option)').classList.add('notValide');
                    document.querySelector('fieldset:has(option)').classList.remove('valide');
                    error[6].classList.add('show');
                    clubsKey = false;
                } else {
                    document.querySelector('fieldset:has(option)').classList.remove('notValide');
                    document.querySelector('fieldset:has(option)').classList.add('valide');
                    error[6].classList.remove('show');
                    clubsKey = true;
                }
                if (nameKey && lNameKey && emailKey && teleKey && genderKey && groupKey && clubsKey === true) {
                    button.removeAttribute('disabled');
                } else {
                    button.setAttribute('disabled', '');
                }
            })
        })
    } else {
        error.forEach(e => {
            e.classList.remove('show');
        })
        inputs.forEach(e => {
            e.classList.remove('valide');
            e.classList.remove('notValide');
        })
        fieldset.forEach(e => {
            e.classList.remove('valide');
            e.classList.remove('notValide');
        })
        button.removeAttribute('disabled')
        document.querySelectorAll('input:not([type=checkbox],[type=submit])').forEach(e => {
            e.replaceWith(e.cloneNode(true));
        })
        document.querySelectorAll('option').forEach(e => {
            e.replaceWith(e.cloneNode(true));
        })
    }

})