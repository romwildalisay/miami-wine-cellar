document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.links').classList.toggle('open'));
document.querySelector('.form')?.addEventListener('submit',e=>{e.preventDefault();document.querySelector('.success').classList.add('show');e.target.reset()});
