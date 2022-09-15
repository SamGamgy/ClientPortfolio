import {portItems} from './data.js'

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 225;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


function createPortCards() {

  portItems
  .map(({id, imgSrc, jobTitle, category, circleIcon, categoryNum}) => { 

    const portParent= document.querySelectorAll(`.orb-container-${category}`);
            const newContent = 

            `<div data-open=${id} class="orb ${category}">
              <div class='orb-img-wrapper ${circleIcon ? 'circle' : ''}'>
                <img class='orb-img' src="${imgSrc}" alt="">
              </div>
              <div class="sub">
                <div style='color: var(--accent${categoryNum}' class="job-title">${jobTitle}</div>
              </div>
            </div>`
      ;
            
            
            portParent[0].insertAdjacentHTML("beforeend", newContent);
            portParent[1].insertAdjacentHTML("beforeend", newContent);
})};

createPortCards();

// pop up
const popUpParent= document.querySelector('.pop-up-modals-container');

function createPopUp(dataOpen) {
portItems
.map(({ imgSrc, company, date, id, circleIcon, slideShow, projects, jobDesc, areProjects}) => { 
            const newContent = 
        `
        <div id="${id}" class="pop-up">
                            <div class="pop-up-header">
                                <img class=${ circleIcon ? 'pop-up-circle-img' : 'pop-up-img'} src="${imgSrc}">
                                <div class='port-titles'>
                                    <div class='company'>${company}</div>
                                    <div class='date'>${date}</div>
                                </div>
                                
                                <div onclick='removeElm(${id})'><i class="fa-regular fa-circle-xmark"></i></div>
                            </div>
                            <div class="pop-up-body">
                                ${areProjects ? 
                                  `<div class="pop-up-projects">
                                  <div class="pop-up-sub-head">Projects</div>
                                  <ul class="pop-up-project-list">
                                      ${infoGrab(id, projects)}
                                  </ul>
                                </div>` : ''
                                }
                                <div ${slideShow ? 'style= height:40vh' : ''} class="descript">
                                    <div class="pop-up-sub-head">Job Description</div>
                                    <ul class="pop-up-descript-list">
                                        ${infoGrab(id, jobDesc)}
                                    </ul>
                                </div>
                            </div>
                            <div data-open='photos' class="imgs">
                                    <div class="pop-up-sub-head">Photos</div>
                                    <ul class="pop-up-photo-list">
                                        <li class="port-imgs mySlides"><img src="./assets/xmaslights.jpg" alt=""></li>
                                        <li class="port-imgs mySlides"><img src="./assets/soundboard.jpg" alt=""></li>
                                        <li class="port-imgs mySlides"><img src="./assets/backstage.jpg" alt=""></li>
                                        <li class="port-imgs mySlides"><img src="./assets/theatre.jpg" alt=""></li>
                                    </ul>
                                </div>
                            ${ slideShow ? 
                              ` 
                                <button class='pop-up-btn btn' onclick='displayImgs(this)'>Photos</button>
                              `
                            :''
                            }
                        </div>
                    </div>`;
            if (dataOpen == id){
            popUpParent.insertAdjacentHTML("beforeend", newContent)}
          })
};
const portItemOrb = '.orb'
const portOrbs = document.querySelectorAll(portItemOrb);

let icon='';

for (icon of portOrbs){
icon.addEventListener('click', function() {
    const dataOpen = this.dataset.open
        createPopUp(dataOpen);
        
    }) ;
}


//  photo button
 const displayImgs = (btn) => {
  let imgs = document.querySelector('[data-open="photos"]')
  if (imgs.classList.contains('is-visible')) {
    imgs.classList.remove('is-visible')
    btn.textContent = "Photos"
  } else {
    showDivs(slideIndex);
    imgs.classList.add('is-visible')
    btn.textContent = "Back"
  }
}

// iterate through array data 
function getObjKey(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}
const infoGrab = (id, key) => {
  let obj = portItems[id-1]
  let objKey = getObjKey(obj, key)

  let arr= []
  for (let i=0; i < obj[objKey].length; i++) {
    arr.push (
      `<li class="list-item"> ${obj[objKey][i]} </li>`
    );
  }
  return arr.join('');
}

// update # of orbs per category

let r = document.querySelector(':root');

const getOrbNumber = (category) => {
  let orbNum=0
  let item='';
  for (item of portItems) {
    if (item.category === category) {
      orbNum ++
    }
  }
  return orbNum
} 

function updateCSSVar(varName) {
  r.style.setProperty(`--${varName}-num-of-orbs`, getOrbNumber(varName))
}
updateCSSVar('theater');
updateCSSVar('entertainment');

// update orb size with screen size 
window.addEventListener("resize", function(event) {
  updateOrbSize();
})

const updateOrbSize = () => {
  let screenWidth = window.innerWidth
  if (screenWidth > 1501) {
    r.style.setProperty(`--orb-width`, '250px')
  }
  else if (screenWidth < 1500 && screenWidth > 1201) {
    r.style.setProperty(`--orb-width`, '200px')
  }
  else if (screenWidth < 1200) {
    r.style.setProperty(`--orb-width`, '150px')
  }
}

updateOrbSize();

// photo slides

var slideIndex = 1;


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// dynamic neon light colors 

const lightColor = () => {
  let neonLights = document.querySelectorAll('.neonText')
  neonLights.forEach(element => {
    if (element.classList.contains('dynamicColor')) {
      let id = element.id
      element.style.textShadow =
          
          `0 0 7px #fff,
          0 0 10px #fff,
          0 0 21px #fff,
          0 0 42px var(--accent${id}bright),
          0 0 82px var(--accent${id}bright),
          0 0 92px var(--accent${id}bright),
          0 0 102px var(--accent${id}bright),
          0 0 151px var(--accent${id}bright)`;
    }
  });
}
lightColor();
