(function(){
    const words = [
        "timeline",
        "important",
        "selection",
        "terminal",
        "random",
        "specific",
        "generate",
        "testing",
        "seed",
        "index"
    ]

    let textSelector = document.getElementById("text")
    let inputSelector = document.getElementById("inputText");

    const textUpdate = () =>
    {
        const minimum = 0;
        const maximum = words.length-1;

        const randomIndex = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        textSelector.innerText = words[randomIndex];
        
        return words[randomIndex];
    }

    const timer = 2;
    let text = textUpdate();
    let oldTime = null;
    let firstKeyHit = true;
    const r = document.querySelector(':root');
    inputSelector.addEventListener("input",function(event) {

        const textEntered = event.target.value;
        if(textEntered === text)
        {
            event.target.value = '';
            text = textUpdate()
            const newTime = new Date().getTime();
            
            if(parseInt((newTime - oldTime)/1000) > timer)
            {
                console.log("game over");
            }

            firstKeyHit = true;
            r.style.setProperty('--timerTransition','none');
            r.style.setProperty('--timerWidth','0%');
        }      
        else if(textEntered.length == 1 && firstKeyHit)
        {
            firstKeyHit = false;
            oldTime = new Date().getTime();
            r.style.setProperty('--timerTransition',`width ${timer}s`);
            r.style.setProperty('--timerWidth','100%');
        }
    })

    const template = document.getElementsByTagName('template')[0];
    var containerSelector = document.getElementById("container");

    const initializeContainer = () =>
    {
        document.getElementById('innerContainer').style.display = 'none';
        document.getElementById('timer').style.display = 'none';
        containerSelector.appendChild(template.content.getElementById('startTyping'));   
    }

    template.content.getElementById('startTyping').addEventListener('click',() => {
        document.getElementById('innerContainer').style.display = 'block';
        document.getElementById('timer').style.display = 'block';
        document.getElementById('startTyping').remove();
    })

    initializeContainer();
})()
