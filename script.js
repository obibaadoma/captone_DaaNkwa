const judges = [
  {
    name: 'Obiba Kweku Adoma',
    image: 'Img/imagesa.png',
    job: 'Executive Director',
    experience: 'Founder and CEO of the Obiba Foundation, a non-profit organization that focuses on the welfare of animals and the environment.',
  },
  {
    name: 'Rosemond Twumasi',
    image: 'Img/imagesb.png',
    job: 'Senior Matron',
    experience: 'She is responsible for the nutrition of staff on the field.',
  },
  {
    name: 'Lailatu Fuseini',
    image: 'Img/imagesc.png',
    job: 'Supply Chain Officer',
    experience: 'She is reponsible for outsourcing the right feed, and other products, this include tools and machinery needed in our everyday operations',
  },
  {
    name: 'Arooj Fatima Gilani',
    image: 'Img/images.png',
    job: 'Veterinary Officer',
    experience: 'She has experience care in animal husbandry and vertinary medicine, she has worked on both dometicated animals and wildlife. She was part of the anti-poaching team set up in the Congo',
  },
  {
    name: 'Tammy Poole',
    image: 'Img/circle.png',
    job: 'Intenational Relations Consultant',
    experience: 'An American associate, social media enthusiate, actor, and and immigration consultant.',
  },
  {
    name: 'Vida Abebrese',
    image: 'Img/imagesd.png',
    experience: 'She rose through thick and thin to get to where she is now. By dint of hardword she has been able to effective keep our records and set up control measures',
  },
];
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger img');
  const mainContent = document.querySelector('.main');
  const mobilePopUpMenu = document.createElement('div');
  const mobileMenuUl = document.createElement('ul');
  const navlinks = document.querySelectorAll('.nav-div ul li');
  const sections = document.querySelectorAll('section');
  const headerNav = document.querySelectorAll('.nav');
  const footer = document.querySelector('footer');
  mobilePopUpMenu.className = 'left-navigation mobile-menu hide';
  const headline = document.querySelector('.headline');
  mobilePopUpMenu.style.height = `${headline.clientHeight}px`;
  mobilePopUpMenu.style.transition = 'all 1s ease-in-out 0s';

  const createLeftavBar = () => {
    navlinks.forEach((li) => {
      if (!mobilePopUpMenu.classList.contains('hide')) {
        headerNav[0].appendChild(li);
      } else {
        mobileMenuUl.appendChild(li);
      }
    });
  };
  mobilePopUpMenu.appendChild(mobileMenuUl);
  mainContent.appendChild(mobilePopUpMenu);

  const toggleMobileMenu = () => {
    createLeftavBar();
    mobilePopUpMenu.classList.toggle('hide');
    footer.classList.toggle('hide');
    hamburgerMenu.classList.toggle('close-icon');
    sections.forEach((section) => {
      section.classList.toggle('hide');
    });
    sections[0].classList.toggle('left-navigation-backgound');
    sections[0].classList.toggle('hide');
    const mobileMenulinks = document.querySelectorAll('.mobile-menu > ul > li > a');
    mobileMenulinks.forEach((link) => {
      link.addEventListener('click', toggleMobileMenu);
    });
  };

  hamburgerMenu.addEventListener('click', toggleMobileMenu);

  // Create judges/
  const morejudge = document.querySelector('.more-judge');

  const createjudge = (judge) => {
    const newjudge = document.createElement('div');
    const newjudgeImage = document.createElement('div');
    const newjudgeimg = document.createElement('img');
    const newjudgeDescriptions = document.createElement('div');
    const newjudgeDescriptionsH2 = document.createElement('h2');
    const newjudgeDescriptionsSpan1 = document.createElement('span');
    const newjudgeDescriptionsSpan2 = document.createElement('span');
    const newjudgeDescriptionsSpan3 = document.createElement('span');

    // Add classes
    newjudge.className = 'judge';
    newjudgeImage.className = 'judge-image';
    newjudgeimg.alt = 'judge\'s photo';
    newjudgeDescriptions.className = 'judge-description';
    newjudgeDescriptionsH2.className = 'name';
    newjudgeDescriptionsSpan1.className = 'job-title';
    newjudgeDescriptionsSpan2.className = 'line';
    newjudgeDescriptionsSpan3.className = 'experience';

    // Assign values
    newjudgeimg.src = `${judge.image}`;
    newjudgeDescriptionsH2.textContent = judge.name;
    newjudgeDescriptionsSpan1.textContent = judge.job;
    newjudgeDescriptionsSpan3.textContent = judge.experience;

    // Construct a judge div
    newjudgeDescriptions.appendChild(newjudgeDescriptionsH2);
    newjudgeDescriptions.appendChild(newjudgeDescriptionsSpan1);
    newjudgeDescriptions.appendChild(newjudgeDescriptionsSpan2);
    newjudgeDescriptions.appendChild(newjudgeDescriptionsSpan3);
    newjudgeImage.appendChild(newjudgeimg);
    newjudge.appendChild(newjudgeImage);
    newjudge.appendChild(newjudgeDescriptions);

    return newjudge;
  };

  if (morejudge) {
    judges.forEach((judge) => {
      morejudge.insertAdjacentElement('beforebegin', createjudge(judge));
    });
  }
});



