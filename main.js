//teachablemachine.withgoogle.com/models/aZmLAK_P1/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/aZmLAK_P1/model.json", modelReady)
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        var r=Math.floor(Math.random()*255)+1;
    var g=Math.floor(Math.random()*255)+1;
    var b=Math.floor(Math.random()*255)+1;
    document.getElementById("label").innerHTML="I can hear- "+results[0].label;
    document.getElementById("label").style.color="rgb("+r+","+b+","+g+")";
    if(results[0].label=="Bark"){
        document.getElementById("earpic").src="download.jpeg";
    }
else if(results[0].label=="Meow"){
    document.getElementById("earpic").src="download.png";
}
else if(results[0].label=="Roar"){
    document.getElementById("earpic").src="download (1).jpeg";
}
else{
    document.getElementById("earpic").src="dd5ed82b-b105-4b93-806f-1f9e718b56ec.png";
}
    }
    }
