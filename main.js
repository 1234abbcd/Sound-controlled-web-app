function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classfier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ifdw6ra_Q/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}