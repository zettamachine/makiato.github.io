//contact 
if(!!document.getElementById('email')) {
    var user = 'hello', domain = 'zettamachine.com';
    document.getElementById('email').innerHTML = '<i class="fa fa-envelope"></i> <a href="mailto:' + user + '@' + domain + '">' + user + '@' + domain + '</a>';
}

//nav background
window.onscroll= function(e) {
    e.preventDefault();
    if(window.scrollY > 0) {
        document.querySelector('.navbar').style.backgroundColor = 'rgb(16,20,23, 0.5)';
    } else {
        document.querySelector('.navbar').style.backgroundColor = 'rgba(16,20,23)';
    }
}

//burger
document.querySelector('.navbar-burger').addEventListener('click',function(e) {
    e.preventDefault();
    this.classList.toggle('is-active');
    document.getElementById('zetta-burger').classList.toggle('is-active');
    document.getElementById('zetta-burger').style.backgroundColor = 'rgb(16,20,23)';
});

document.getElementById('zetta-burger').addEventListener('mouseleave',function(e) {
    e.preventDefault();
    console.log('mouse leave');
    document.querySelector('.navbar-burger').classList.toggle('is-active');
    document.getElementById('zetta-burger').classList.toggle('is-active');
});