const btn = document.querySelector('.btn')
const inner = document.querySelector('.inner');
const input = document.querySelector('.input')


btn.addEventListener('click',()=>{
inner.classList.toggle('active');
input.focus();
// Sets the Focus in the Search Field
})