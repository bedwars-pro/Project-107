function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Q5ikorEaM/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log('Got Result')
}