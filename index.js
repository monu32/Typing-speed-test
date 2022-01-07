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

    let text = textUpdate();
    inputSelector.addEventListener("input",function(event){

        const textEntered = event.target.value;
        if(textEntered === text){
            event.target.value = '';
            text = textUpdate()
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
