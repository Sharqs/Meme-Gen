
window.onload = function(){

var mform = document.querySelector('form')
mform.addEventListener("submit", add);

function add(e){
    e.preventDefault();
    /*  I could use innerHTML but I thought I'd attemp this compilation method.
    <div class='added'>
        <img class = 'Img' src=source>
        <div class="top">topT</div>
        <div class="bot">botT</div>
    </div>
    */
    var div = document.createElement("div");
    div.className= 'added';

    var source = document.getElementById("meme_url").value;
    var meme = document.createElement('img');
    meme.src=source;
    meme.className = 'Img';
    meme.addEventListener('click',remove);

    var top = document.createElement('div');
    var topT = document.createTextNode(document.getElementById("toptext").value);
    top.className = 'top';
    top.appendChild(topT);
    top.addEventListener('click',remove);

    var bot = document.createElement('div');
    var botT = document.createTextNode(document.getElementById("bottext").value);
    bot.className = 'bot';
    bot.appendChild(botT)
    bot.addEventListener('click',remove);

    div.appendChild(meme);
    div.appendChild(top);
    div.appendChild(bot); 
    
    document.body.append(div)
    document.querySelector('form').reset()
}
function remove (e){
    e.preventDefault()
        e.target.parentElement.remove()
}


}