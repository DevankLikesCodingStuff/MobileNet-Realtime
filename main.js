function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelLoaded);
  //classifier will load the mobileNet model
}
function draw(){
  image(video, 0, 0, 300, 300);
  //Image function will put the webcam on the canvas
  classifier.classify(video, gotResult);
  //Classify will do the comparision
}
function modelLoaded()
{
  console.log('Model Loaded!');
}
function gotResult(error, results)
{
  if(error){
    console.error(error);
  }
  else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}

