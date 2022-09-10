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
    date:' June 2021',
    jobTitle:'Logistics Manager',
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
    slideShow:true;
    portImgs:[],
    }
  ]

  let portItem = document.querySelectorAll('.orb')

  for (item of portItem) {
    item.addEventListener('click', (e) => {
      let popUp = e.target.querySelector('.pop-up')
      console.log(popUp)
      popUp.classList.add('is-visible')
    })
  }