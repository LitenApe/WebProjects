"use strict"

// Quick links for more readable code
let prevLink = 'https://litenape.github.io/'
let repoLink = 'https://github.com/LitenApe/WebProjects/tree/master/'
let imgLink = './assets/imgs/'

// project collection. objects with information about the
// projects stored inside arrays for a sorted array
let projectObjs = [
  {
    name: 'Floating Label',
    link: prevLink + 'floatingLabel',
    repo: repoLink + 'FloatingLabel',
    made: 'May 2017',
    img:  imgLink + 'floatinglabel.png'
  },
  {
    name: 'Github Quick Look',
    link: false,
    repo: repoLink + 'GithubQuickLook',
    made: 'March 2017',
    img:  imgLink + 'githubquicklook.png'
  },
  {
    name: 'Binary-Hexadecimal-Decimal',
    link: prevLink + 'binHexDec',
    repo: repoLink + 'BinHexDec',
    made: 'March 2017',
    img:  imgLink + 'binhexdec.png'
  },
  {
    name: 'Status Page',
    link: prevLink + 'statusPage',
    repo: repoLink + 'StatusPage',
    made: 'January 2017',
    img:  imgLink + 'statuspage.png'
  },
  {
    name: 'Hexadecimal-RGB',
    link: prevLink + 'hexRgb',
    repo: repoLink + 'HexRgb',
    made: 'August 2016',
    img:  imgLink + 'hexrgb.png'
  },
  {
    name: 'Countdown',
    link: prevLink + 'wedding',
    repo: repoLink + 'CountDown',
    made: 'January 2016',
    img:  imgLink + 'countdown.png'
  }
]

// gets the ul element that will act as a parent for our project elements
var projectList = document.getElementById('projects')

for (var idx in projectObjs) {
  let project = projectObjs[idx]
  // check if the element will appear on the left or right side
  var containerClass = idx%2 == 0 ? 'even':'odd'

  // create the new html element to display our project
  var htmlElem = '<li style="background-image: url(' + project.img + ')">'
                  + '<div class="container ' + containerClass + '">'
                    + '<a class="projectName" href="' + project.repo + '" target="_blank">'
                      + '<h1>' + project.name + '</h1>'
                      + '<p>' + project.made + '</p>'
                    + '</a>'
                    + '<div class="links">'
                      + '<a href="' + project.repo + '" target="_blank" class="fa fa-github fa-3x" aria-hidden="true"></a>'

  // append in a preview link if there is any way to preview the project
  if (project.link != false) {
    htmlElem = htmlElem + '<a href="' + project.link + '" target="_blank" class="fa fa-eye fa-3x" aria-hidden="true"></a>'
  }

  htmlElem = htmlElem + '</div></div></li>' // it's ugly but it is just a set of closing tags, so meeh
  projectList.innerHTML += htmlElem
}

// Header parallax effect
let children = document.getElementsByClassName('name')
var firstChild = children[0]
var secondChild = children[1]

// document height
let docBody = document.body
let docHtml = document.documentElement
let docHeight = Math.max(docBody.scrollHeight, docBody.offsetHeight,
    docHtml.clientHeight, docHtml.scrollHeight, docHtml.offsetHeight)

window.onscroll = function(){
  // Calculate new Y coordinates for the header elements
  let scrollPosition = window.scrollY

  let firstOffset = scrollPosition/15
  let secondOffset = scrollPosition/50

  firstChild.style.transform = 'translateY(' + firstOffset + 'rem)'
  secondChild.style.transform = 'translateY(' + secondOffset + 'rem)'

  if (Math.floor(firstOffset) == 4) {
    document.getElementById('full-name').style.display = 'block'
  }else{
    document.getElementById('full-name').style.display = 'none'
  }

  // hide the fixed contact button if the user is on mobile and has scrolled a decent amount down
  if (scrollPosition >= (docHeight/3)) {
    document.getElementById('contact-mail').style.display = 'none'
  } else {
    document.getElementById('contact-mail').style.display = 'inline'
  }
}
