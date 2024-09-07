let searchBtn = document.querySelector('#search-btn');
let searchInput = document.querySelector('#search-input');
let box = document.querySelector('#search-border');

searchBtn.addEventListener('click',()=>{
    let check = searchInput.classList.contains('invisible');
    if(check){
        box.classList.add('border');
        searchInput.classList.replace('invisible','visible');
    }else{
        box.classList.remove('border');
        searchInput.classList.replace('visible','invisible');
    }
});