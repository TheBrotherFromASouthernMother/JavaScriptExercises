var row = document.getElementsByClassName('gallery')[0]
var thumbnailDivs;
var imageLinks = [
'https://i.imgur.com/FxhIuEz.jpg',
'https://i.imgur.com/YDK9EWD.jpg',
'https://i.imgur.com/m5SJiYH.jpg',
'https://i.imgur.com/hp23VUn.jpg',
'https://i.imgur.com/dVx6DN4.jpg',
'https://i.imgur.com/qf3fIhd.jpg',
'https://i.imgur.com/mrYWLK9.jpg',
'https://i.imgur.com/OvKod3d.jpg',
'https://i.imgur.com/bqNUxwn.jpg',
'https://i.imgur.com/3WoTNpB.jpg',
'https://i.imgur.com/Uue3ccx.jpg',
'https://i.imgur.com/O8IvFcn.jpg',
'https://i.imgur.com/VdXG1ds.jpg',
'https://i.imgur.com/nj6uCqz.jpg',
'https://i.imgur.com/tkTabnU.jpg',
'https://i.imgur.com/FnOeifn.jpg',
'https://i.imgur.com/3Cc3ETZ.jpg',
'https://i.imgur.com/7yD4q4O.jpg'
]

function initGallery (array) {
  for (var i = 0; i < array.length; i ++ ) {
    var element = document.createElement('div');
    var currentImage = document.createElement('img');
    currentImage.classList.add('currentImage');
    element.classList.add("col-3");
    element.classList.add('thumbnail')
    row.appendChild(element)
    element.appendChild(currentImage)
  }

  thumbnailDivs = document.getElementsByClassName('thumbnail')

  for (var i = 0; i < imageLinks.length; i ++) {
    var thumbnail = thumbnailDivs[i].getElementsByClassName('currentImage')[0]
    thumbnail.src = imageLinks[i]
  }
}

initGallery(imageLinks)


var modal = document.getElementsByClassName('modal')[0];

var isModalDisplayed = false
var closeButton = document.getElementsByClassName('fa-close')[0];
var modalImage = document.getElementById('modal-image')

function userSelector(arr) {
for (var i = 0; i < arr.length; i ++) {
  arr[i].addEventListener('mouseover', function(e) {
    e.target.style.opacity = "0.5"
  })
  arr[i].addEventListener('mouseout', function(e) {
    e.target.style.opacity = "1"
  })

  arr[i].addEventListener('click', function(e) {
    isModalDisplayed = true
    modal.style.display = "block"
    modalImage.src = e.target.src

  })
}
closeButton.addEventListener('click', function(e) {
  if (e.target == closeButton && isModalDisplayed == true) {
      modal.style.display = "none";
      isModalDisplayed = false
  }
})
}

userSelector(thumbnailDivs)
