var stoploop = 0;
var loopcount = 0;
var loop;

function ponystream (){
    var x = 0;
    jQuery(document).ready(function() {
        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        var ponydiv = document.getElementById("ponydiv")

        slider.oninput = function() {
            output.innerHTML = this.value;
            clearInterval(loop)
            while (ponydiv.firstChild) {
                ponydiv.removeChild(ponydiv.lastChild);
            }
            return;
        }

        var ponies = ['/Users/JustinBuck2022/Desktop/ponyHTML/img/g1.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g2.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g3.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g4.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g5.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g6.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g7.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g8.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g9.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g10.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g11.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g12.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g13.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g14.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g15.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g16.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g17.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g18.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g19.gif','/Users/JustinBuck2022/Desktop/ponyHTML/img/g20.gif']
        var percents = ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%']
        var lor = ["l", "r"]
        var img = document.createElement('img');
        img.id = "pony"
        img.style.position = 'absolute';
        img.classList.add("img")
        img.style.top = percents[Math.floor(Math.random() * percents.length)];
        img.src = ponies[Math.floor(Math.random() * ponies.length)];
        document.getElementById("ponydiv").appendChild(img);
        var side = lor[Math.floor(Math.random() * lor.length)];
            if(side === "l"){
                img.style.left = x + '%'
                img.classList.add("flip")
        loop = setInterval(function(){
            slider.oninput = function() {
                output.innerHTML = slider.value;
                clearInterval(loop)
                while (ponydiv.firstChild) {
                    ponydiv.removeChild(ponydiv.lastChild);
                }
                stoploop = 1;
                loopcount = 0
                //console.log("Stopping");
                setTimeout(function(){
                    //console.log("after timeout")
                    stoploop = 0
                    startponies(Number(slider.value));
                }, 1000)
            }
            //img.style.left = 95 +'%'
                img.style.left = x + '%'            
            x += .25
            if(x === 100){
                x = 0
                img.style.top = percents[Math.floor(Math.random() * percents.length)];
                img.src = ponies[Math.floor(Math.random() * ponies.length)];
            }
        }, 20)
    } else if(side === "r"){
        img.style.right = x + '%'
        loop = setInterval(function(){
            slider.oninput = function() {
                output.innerHTML = slider.value;
                clearInterval(loop)
                while (ponydiv.firstChild) {
                    ponydiv.removeChild(ponydiv.lastChild);
                }
                stoploop = 1;
                loopcount = 0
                //console.log("Stopping");
                setTimeout(function(){
                    //console.log("after timeout")
                    stoploop = 0
                    startponies(Number(slider.value));
                }, 1000)
            }
            //img.style.right = 95 +'%'
                img.style.right = x + '%'            
            x += .25
            if(x === 100){
                x = 0
                img.style.top = percents[Math.floor(Math.random() * percents.length)];
                img.src = ponies[Math.floor(Math.random() * ponies.length)];
            }
        }, 20)
    }
    })
}

function startponies (input){
    //console.log(input)
    var slider = document.getElementById("myRange");
    var ponydiv = document.getElementById("ponydiv");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    slider.oninput = function() {
        output.innerHTML = slider.value;
        clearInterval(daloop)
        while (ponydiv.firstChild) {
            ponydiv.removeChild(ponydiv.lastChild);
        }
        startponies(Number(slider.value));
    }
    var daloop = setInterval(function(){
        if(stoploop === 1){
            stoploop = 0
            //console.log("stapping loooop")
            clearInterval(daloop)
            //startponies(Number(slider.value))
            stoploop = 0
        } else if(stoploop != 1){
        ponystream()
        loopcount += 1
        }
        if(loopcount === input){
            clearInterval(daloop)
            loopcount = 0
            //console.log("End of start loop")
        }
        
    }, 1000)
}