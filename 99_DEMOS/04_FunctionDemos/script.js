function button1() {
  var Image_Id = document.getElementById('getImage');
  if (Image_Id.src.match("./asset/image1.jpg")) {
      Image_Id.src = "./asset/image2.jpg";
  }else if (Image_Id.src.match("./asset/image2.jpg")) {
      Image_Id.src = "./asset/image3.jpg";
  } else {
      Image_Id.src = "./asset/image1.jpg";
  }
}