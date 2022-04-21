var sliderimg = document.querySelector('.slider-img');
var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
var i = 0;

function prev()
{
  if(i<=0) i = images.length;
  i--;
  return setImg();
}

function next()
{
  if(i>=images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg()
{
  return sliderimg.setAttribute('src', 'images/' + images[i]);
}