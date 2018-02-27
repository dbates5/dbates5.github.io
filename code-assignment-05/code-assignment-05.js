let project1 = {
  id: 1,
  title: 'Dangerous Dogs',
  hasThumbnail: true
  function imageCommand() {
    var imgdraw = prompt("bass.png")
    var img = document.createElement("img");
    img.src = imgdraw;
}
}

let project2 = {
  id: 2,
  title: 'US Cities',
  hasThumbnail: true
  function imageCommand() {
    var imgdraw = prompt("bass.png")
    var img = document.createElement("img");
    img.src = imgdraw;
}
}

let projects = [
  project1,
  project2
]

for (let i = 0; i < projects.length; i++) {
  console.log('Element ' + i + ' title: ' + projects[i].title)
  console.log('images/ss-project-' + projects[i].id + '.png')
  if (projects[i].hasThumbnail === true) {
    console.log('images/ss-project-' + projects[i].id + '.png') } }
