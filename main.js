function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Rn9AB4Ydr/model.json",modelReady);
    }
    function modelReady(){
        console.log("ModelLoaded!!")
        classifier.classify(gotResult);
    }
    function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        r= Math.floor(Math.random()*255)+1;
    g= Math.floor(Math.random()*255)+1;
    b= Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("result_accuracy").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("result_label").innerHTML="I can hear- "+results[0].label;
    document.getElementById("result_accuracy").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+" %";
    img1=document.getElementById("listen");
    
    if(results[0].label=="Meowing"){
        img1.src="https://cdn.svgator.com/images/2022/07/cute-animated-cat-tutorial.gif";
        
    }
   else if(results[0].label=="Barking"){
        img1.src="https://media.tenor.com/twIzlIPSrZcAAAAC/dog.gif";
        
    }
   
    else {
        img1.src="https://i.gifer.com/9j6o.gif";
        
    }
    }
    }