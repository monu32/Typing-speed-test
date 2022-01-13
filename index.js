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

    const textUpdate = () =>
    {
        const minimum = 0;
        const maximum = words.length-1;

        const randomIndex = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        textSelector.innerText = words[randomIndex];
        
        return words[randomIndex];
    }

    const updateDisplay = (ele,prop) =>
    {
        ele.style.display = prop;
    }

    const timer = 2;
    const innerContainerSelector = document.getElementById('innerContainer');
    const timerSelector = document.getElementById('timer');
    const timeOutContainerSelector = document.getElementById('timeOut')
    const inputSelector = document.getElementById("inputText");
    const scoreSelector = document.getElementById("score");
    const r = document.querySelector(':root');
    let textSelector = document.getElementById("text");
    let oldTime = null;
    let firstKeyHit = true;
    let score = 0;
    let text = textUpdate();
    
    inputSelector.addEventListener("input",function(event) {

        const textEntered = event.target.value;
        if(textEntered === text)
        {
            event.target.value = '';
            text = textUpdate()
            const newTime = new Date().getTime();
            
            if(parseInt((newTime - oldTime)/1000) > timer)
            {
                updateDisplay(innerContainerSelector,'none');
                updateDisplay(timerSelector,'none');
                updateDisplay(timeOutContainerSelector,'block');
                document.querySelector('#timeOut > p').style.display = 'block';
                scoreSelector.innerText = score;
                score = 0;
            }
            else
                score++;

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


    document.getElementById('timeOut').addEventListener('click',() => {

        updateDisplay(innerContainerSelector,'block');
        updateDisplay(timerSelector,'block');
        updateDisplay(timeOutContainerSelector,'none');
    })    

    updateDisplay(innerContainerSelector,'none');
    updateDisplay(timerSelector,'none');
})()
