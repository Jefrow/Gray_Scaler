var image = new SimpleImage(fileinput);
var originImg = documnet.getElementById("can");
var grayImg = document.getElementById("c2");

function upload(){ 
  originImg = document.getElementById("can"); // Gets canvas Element by it's id specified in HTML
  grayImg = document.getElementById("c2");
  var fileinput = document.getElementById("finput"); //Gets file input Element byt it's id specified in HTML
  image = new SimpleImage(fileinput); //Creates a simple image variable fromt the HTML input. 
  image.drawTo(originImg);
  image.drawTo(grayImg);
}

function makeGray(){
    for (var pixel of image.values()){
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    grayImg = document.getElementById("c2");
  image.drawTo(grayImg);
}