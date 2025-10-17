document.addEventListener('DOMContentLoaded', ()=> {
    const container =document.querySelector(' .container');

    const switchFormLinks =document.querySelectorAll('.switch-form');
    

    switchFormLinks.forEach(link=>{
        link.addEventListener('click',()=>{
            if(link.textContent .trim().toLowerCase()  === 'Sign Up'){
                container.classList.remove('active-login');
                container.classList.add('active-Signup');
            }else{
                container.classList.remove('active-Signup');
                container.classList.add('active-login');
            }
        });
    });
        
});