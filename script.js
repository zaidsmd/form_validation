const option = document.querySelectorAll("option");
for (let i = 0; i < option.length ; i++) {
    option[i].addEventListener('click',e=>{
        for (let j = 0; j < option.length ; j++) {
            option[j].classList.remove('clicked')
        }
        let selected = e.target
        selected.classList.add('clicked')
    })
}
