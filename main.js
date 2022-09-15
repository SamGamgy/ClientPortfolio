function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);



  let portItems = [
    {id:1,
    company:'IWG Productions',
    category:'entertainment',
    imgSrc:'assets/company-icons/iwg.jpg',
    circleIcon:true,
    date:' June 2021 – Ongoing / Contract Based',
    jobTitle:'Logistics Manager',
    areProjects:true,
    projects:[
      'Sesame Place “Spooktacular”',
	    'Sesame Place “Very Furry Christmas”',
	    'Boar’s Head Resort “Winter Wander”' 
    ],
    jobDesc:[
      'Created company wide calendar for all ongoing events',
      'Coordinated staffing schedules, vendor information, travel needs, etc.',
      'Responsible for the ordering, coordination, and overall project needs from beginning to completion',
      'Hands on installation of décor pieces involving carpentry, rigging, heavy machinery etc.', 
      'Present for client meetings, assistance with client needs, concerns, and proper execution of events',
      'Acted as Point of Contact for Boar’s Head Resort & Sesame Place' ,
      'Liaison for company owners if clients, vendors had any additional needs.' ,
      'Handled shipping of décor items through trucking companies and other shipping options.' 
    ],
    slideShow:true,
    portImgs:[],
    },
    {id:2,
    company:'Zeider’s American Dream Theater',
    category:'theater',
    imgSrc:'assets/company-icons/zeiders.png',
    date:'May 2016 - Ongoing/ Contract Based',
    jobTitle:'Stage Manager',
    areProjects:true,
    projects:[
      '“I Sing the Rising Sea” (Workshop) - PSM',
      '“Remembering Tomorrow” - PSM',
      '“This’ll Only Take a Second” - PSM',
      '“Triple Threat” - PSM',
      '“Four Women, One Artist” - PSM',
      '“Fountain of You” - Run Crew',
      '2022 Jazz Festival - Lighting Designer / Board Op'
    ],
    jobDesc:[
      'Worked closely with Artistic Director to create Handbook, Safety Standards and identify ways of adding efficiency to the workflow (Propared).',
      'Created company paperwork templates for future work and took inventory of assets', 
      'Daily set up and strike of Rehearsal & Performance Space to Equity Standards',
      'Created Production Book containing Blocking, Order of Events, Contact Information, etc.',
      'Created Paperwork such as Props Tracking, Set List, Sign-In Sheets, etc. used in both rehearsal and performances',
      'Facilitated communication between Actors, Playwright, Director & Designers through Daily Calls, Rehearsal Reports, Calendars, Contact List, and via Email',
      'Point of Contact for Actors on conflicts, weather monitoring and back-up plan / last minute changes and any questions or concerns. '
    ],
    slideShow:false,
    portImgs:[],
    },
    {id:3,
    company:'WeDecorate',
    category:'entertainment',
    imgSrc:'assets/company-icons/we-decorate.png',
    circleIcon:true,
    date:'August 2019 – April 2020',
    jobTitle:'Director of Operations',
    areProjects:true,
    projects:[
      'Kettering Health Network “Lights of Love”',
      'Amelia Island, Historical Fernandina Beach, FL',
      'Residential Christmas installments, including high profile clientele',
    ],
    jobDesc:[
      'Point of Contact for all Christmas related projects',
      'Responsible for the ordering, coordination, and overall project needs from beginning to completion',
      'Point of Contact for all equipment rentals at various sites',
      'Conducted Site Visits and Take offs, Quality Control walks/notes',
      'Assisted with proposals & design concepts, presentation creation for potential projects & clients',
      'Technical assistant on various installations',
      'Crew on specialized install team for rigging elements ',
      'Hiring of crew for projects',
      'Budget tracking & reconciliation, invoice submission',
      'Tree lighting ceremony ',
      'Downtown Lighting Ceremony',
      'Resume screening & crew recruiting ',
      'On site during installation & takedown of KHN and site visits to Amelia Island',
      'POC & Onsite installer for high profile tree wrap',
      'Managed overall project calendar and daily schedule, housing & rentals',
      'Created Production Bible to encompass all aspects of décor, electrical, product souring, photos progress & complete, SOP’s, map layouts, soundtracks, and other technical documentation ',
      'Warehouse organization & inventory '
    ],
    slideShow:false,
    portImgs:[],
    },
    {id:4,
    company:'RWS Entertainment Group',
    category:'entertainment',
    imgSrc:'assets/company-icons/rws-logo-main.png',
    date:'May 2018 – May 2019',
    jobTitle:'Production Manager & Associate Technical Director',
    areProjects:true,
    projects:[
      'Sonny’s Place',
      'UPMC 2018',
      'Six Flags Magic Mountain “Sewer of Souls” ',
      'Six Flags Magic Mountain “Witches’ Lair” ',
      'Six Flags Over Texas “Hell Block 6”',
      'Six Flags Great America “Holiday in the Park”',
      'City of Newport News “25 Nights of Northern Lights”',
      'Kettering Health Network “Lights of Love”'
    ],
    jobDesc:[
      'Point of Contact for assigned projects',
      'Responsible for the ordering, coordination, and overall project needs from beginning to completion',
      'Handled Equipment rental',
      'Participated in Site Visits and Take Offs for various potential clients',
      'Assisted with proposals & design concepts, presentation creation for potential projects & clients',
      'Technical assistant on various installations',
      'Crew on specialized install team for rigging elements ',
      'Responsible for personal and project budget tracking & reconciliation ',
      'Handled VIP walk throughs of projects for current and potential clients',
      'Assisted in teaching “Scare School” as a bundle to a contract to train their actors on proper scare techniques for the haunt installed. ',
      'Brought in as finishing team for haunt installation',
      'Resume screening & crew recruiting for various projects',
      'On site during the heavy installation & strike of portion of “Holiday In the Park” ',
      'Managed overall project calendar and daily schedules for assigned projects',
      'Created Production Bible to encompass all aspects of décor, electrical, product souring, photos progress & complete, SOP’s, map layouts, soundtracks, mood boards, design concepts, renderings, ',
      'Included in a specialty crew that struck the entire event as well as project coordinating with client and vendors simultaneously',
      'Participated in various training to further knowledge of safety, OSHA standards, and rigging.',
    ],
    slideShow:false,
    portImgs:[],
    },
    {id:5,
    company:'Oak Island Creative',
    category:'entertainment',
    imgSrc:'assets/company-icons/oak-island.png',
    date:'August 2016 – May 2018',
    jobTitle:'Project Coordinator',
    areProjects:true,
    projects:[
      'Busch Gardens Williamsburg’s (BGW) “Howl-O-Scream”',
      'Busch Gardens Williamsburg’s (BGW) “Christmas Town”'
    ],
    jobDesc:[
      'Project Coordinator for the 2016/17 and 2017/18 Installation and Strike of the Busch Gardens Williamsburg’s (BGW) events “Howl-O-Scream” and “Christmas Town”',
      'Worked directly with the Project Manager at Busch Gardens Williamsburg job site as Face of Company and Point of Contact for Client',
      'Liaison between Oak Island and Client in all meetings, emails, and in the field',
      'Coordinate all aspects of assigned events; included but not limited to pre-preparation, budgeting, staffing, materials procurement & refurbishment of item, industrial equipment rental, scheduling, management and generating paperwork',
      'Worked directly with the Manager of Consumer Events on refurb items that need updating/changes, sourcing, pricing, and quoting for Howl-O-Scream and Christmas Town',
      'Responsible for the Sourcing, Quoting, Upselling and presenting a list of all items needing approval for Refurbishment',
      'Assisted in the emphasis of safety and operating at OSHA Required Standards on jobsite at all times',
      'Point of Contact for BGW with any needs, such as product purchasing and specialized labor.',
      'Worked directing with the Entertainment Supervisor of Event Technology on additional crew needs, weekly scheduling and any personnel issues between Oak Island and Busch Gardens',
      'Paperwork Generated but not limited to; Budget Tracking, Product Sourcing, Quotes, Purchasing, Scheduling, Calendars, Payroll Assistance, Meeting Notes, Daily Report, Inventory, Digitized Maps for rigging, power, garland hang, etc.',
      'Acted as Human Resource Liaison for job site; handled all On-Boarding Paperwork, Time Sheet Corrections/Tracking, Personnel Issues, Staffing, etc.',
      'Coordinated Daily Tasks around multiple departments & adjusting accordingly to any issues or changes needed to be efficient and productive',
      'Main Point of Contact for any Oak Island Contractors on job site ',
      'Created Monthly, Weekly, & Daily day to day operation of installation and deconstruction of events Calendars & Punch Lists',
      'Responsible for the Labeling of all Storage Crate Descriptions, Tracking, and implemented a New Numbering System in 2017/18 Season',
      'Assist with Management & Supervision of Teams ranging from 1 – 100 People',
      'Main Point of Contact for Communication of Daily Tasks',
      'Hands on participation in Installation and Strike as needed; often operated a Forklift for transport or would act as a “Runner”, bringing any items the Crew might need to their locations',
      'Specifically chosen to create a Production Book for the San Antonio Zoo based upon the preexisting installed event, previous years documentation, pictures and working closely with the Project Manager for that job site',
    ],
    slideShow:false,
    portImgs:[],
    },
    {id:6,
    company:'Virginia Stage Company & Festevents ',
    category:'theater',
    imgSrc:'assets/company-icons/fest-events.png',
    date:'Jun 2016 – July 2016',
    jobTitle:'Production Stage Manager',
    areProjects:true,
    projects:[
      '“Midsummer Fantasy Festival”'
    ],
    jobDesc:[
      'Daily set up and strike of Rehearsal Space',
      'Created Production Book containing Blocking, Order of Event, Contact Information, etc.',
      'Created paperwork such as Puppet Placement, Props Tracking, Set List, Sign-In Sheets, etc. used in both rehearsals and performances',
      'Facilitated communication between Actors, Other Talent, Director & Designers through Daily Calls, Rehearsal Reports, Calendars, Contact List, and via Email',
      'Nightly production meeting notes Director & Designers were taken and distributed',
      'Point of Contact for Actors on conflicts, weather monitoring (performances outside) and back-up plan/ last minute changes, and any questions or concerns',
    ],
    slideShow:false,
    portImgs:[],
    },
    {id:7,
    company:'Virginia Stage Company',
    category:'theater',
    imgSrc:'assets/company-icons/va-stage-co.png',
    date:'March 2016 – April 2016',
    jobTitle:'Assistant Stage Manager',
    areProjects:true,
    projects:[
      '“The Tempest” w/ Virginia Symphony Orchestra'
    ],
    jobDesc:[
      'Daily set up and strike of Rehearsal Space to Union Standards',
      'Rehearsal Stage Manager for two weeks of rehearsal while Equity Stage Manager was finishing run of another show, sent out Daily Calls & Rehearsal Reports during this time',
      'Performed any task requested by the Production Stage Manager, or Director',
      'Worked with additional Assistant Stage Managers on Daily Union Set Up Standards in Rehearsal & Performance Space, as well as performed any task requested by the Production Stage Manager, Company Manager, or Director',
      'Assisted with the preparation for transport, and management preparation for Load In & Out at Chrysler Hall with Union Crew',
      'Worked as Assistant Stage Manager for Up Stage Right during performances; responsibilities included but not limited to working with Union Crew Members, Puppet Preset & SR Props Preset, and SR Fly System Silk Operator',
    ],
    slideShow:false,
    portImgs:[],
    },
    {id:8,
    company:'Stage Door Manor',
    category:'theater',
    imgSrc:'assets/company-icons/stage-door.jpg',
    circleIcon:true,
    date:'May 2015 - August 2015',
    jobTitle:'Camp Counselor & Stage Manager',
    areProjects:false,
    projects:[
    ],
    jobDesc:[
      'Opted to participate in “Pre-Camp” where volunteers clean the entire camp after being closed for 9 months. Also created an opportunity for early team bonding and unity',
      'Assigned rooms with 6 to 12 Campers to be their specific counselor; duties included but not limited to making sure they are awake at designated time, in bed with lights out at designated time, nightly cellphone lock up, personal issues, health issues, emotional support',
      'Cultivated strong relationships with my campers by spending evenings checking in and hanging out, and by being a supportive, encouraging, positive role model',
      'Assigned daily tasks around camp to monitor safety of campers such as meal duty, entrance guard, area supervisor, etc.',
      'Stage Manager for three shows, actors age ranged from 8 – 18',
      'Responsible for notating blocking and any notes from the Director while in Rehearsal',
      'Created Prop & Sound requirements list by assigned deadline ',
      'Submitted Daily Rehearsal Reports',
      'Attended weekly Production Meetings with Director and Designer to discuss show needs',
    ],
    slideShow:false,
    portImgs:[],
    },
    {id:9,
    company:'Stage Door Manor',
    category:'theater',
    imgSrc:'assets/company-icons/stage-door.jpg',
    circleIcon:true,
    date:'May 2015 - August 2015',
    jobTitle:'Camp Counselor & Stage Manager',
    areProjects:false,
    projects:[
    ],
    jobDesc:[
      'Opted to participate in “Pre-Camp” where volunteers clean the entire camp after being closed for 9 months. Also created an opportunity for early team bonding and unity',
      'Assigned rooms with 6 to 12 Campers to be their specific counselor; duties included but not limited to making sure they are awake at designated time, in bed with lights out at designated time, nightly cellphone lock up, personal issues, health issues, emotional support',
      'Cultivated strong relationships with my campers by spending evenings checking in and hanging out, and by being a supportive, encouraging, positive role model',
      'Assigned daily tasks around camp to monitor safety of campers such as meal duty, entrance guard, area supervisor, etc.',
      'Stage Manager for three shows, actors age ranged from 8 – 18',
      'Responsible for notating blocking and any notes from the Director while in Rehearsal',
      'Created Prop & Sound requirements list by assigned deadline ',
      'Submitted Daily Rehearsal Reports',
      'Attended weekly Production Meetings with Director and Designer to discuss show needs',
    ],
    slideShow:false,
    portImgs:[],
    }
    
    
  ]

portPopUp = `
                    
  `;

// Orb Creator 

function createPortCards() {
  
  
  portItems
  .map(({id, imgSrc, jobTitle, category, circleIcon}) => { 

    const portParent= document.querySelectorAll(`.orb-container-${category}`);
            const newContent = 

            `<div data-open=${id} class="orb ${category}">
              <div class='orb-img-wrapper ${circleIcon ? 'circle' : ''}'>
                <img class='orb-img' src="${imgSrc}" alt="">
              </div>
              <div class="sub">
                <div style='color: var(--accent${Math.floor(Math.random() * 4) + 1})' class="job-title">${jobTitle}</div>
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
// const createdPopups = []

for (icon of portOrbs){
icon.addEventListener('click', function() {
    const dataOpen = this.dataset.open
    // if (!createdPopups.includes(dataOpen)){
    //     createdPopups.push(dataOpen);
        createPopUp(dataOpen);
        
    }) ;
}

// close pop up
 const removeElm = (id) => {
  let elm = document.getElementById(id)
  elm.remove()
 };

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
