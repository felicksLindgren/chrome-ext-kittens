var img = document.getElementsByTagName('img');

for(var i = 0; i<img.length; i++){
  img[i].src = 'http://placekitten.com/' + img[i].width + '/' + img[i].height;
}
