btn.onclick = function(){
    list.classList.toggle('height-250');
}
document.onclick = function(e){
    if(e.target.id != 'btn')
    {
        list.classList.remove('height-250');
    }
}

window.addEventListener('scroll', function() {
    var link = document.getElementById('link-contact');
    link.classList.toggle('hiden', window.scrollY >0);

    var header = document.getElementById('header');
    header.classList.toggle('backcolor', window.scrollY >0);
});


