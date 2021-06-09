for(let i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
     var key = this.innerText;
     var keys = key.slice(0,1);

     var audio = new Audio(getAudio(keys));
     audio.play();
     buttonAnimation(keys);
    });

    document.addEventListener("keypress", function(event){
        var audio = new Audio(getAudio(event.key));
        audio.play();
        buttonAnimation(event.key);
    });

function getAudio(keys){
    if(keys === "a" || keys === "A"){
        return "sounds/clap.wav";
    }
    else if(keys === "s" || keys === "S"){
        return "sounds/hihat.wav";
    }
    else if(keys === "d" || keys === "D"){
        return "sounds/kick.wav";
    }
    else if(keys === "f" || keys === "F"){
        return "sounds/openhat.wav";
    }
    else if(keys === "g" || keys === "G"){
        return "sounds/boom.wav";
    }
    else if(keys === "h" || keys === "H"){
        return "sounds/ride.wav";
    }
    else if(keys === "j" || keys === "J"){
        return "sounds/snare.wav";
    }
    else if(keys === "k" || keys === "K"){
        return "sounds/tom.wav";
    }
    else if(keys === "l" || keys === "L"){
        return "sounds/tink.wav";
    }
}

function buttonAnimation(currentKey){
    var currentButton = document.querySelector(`.${currentKey}`);
    currentButton.classList.add("pressed");
    setTimeout(function(){
        currentButton.classList.remove("pressed");
    }, 200);
}
}