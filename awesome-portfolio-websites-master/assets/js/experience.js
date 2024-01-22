AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Associate Professor ",
    cardImage: "assets/images/experience-page/nicet.jpg",
    place: "NICE Management College, Meerut ",
    time: "(1996-2001 )",
    desp: " I have worked for NICE Management College, Meerut from 1996-2001 as Associate Professor and Head of the Computer Science Department (Currently Shobhit University, Meerut)"
  },
  {
    title: "Associate Professor",
    cardImage: "assets/images/experience-page/imr gazibad.jpg",
    place: "IMR Ghaziabad",
    time: "(2001-2006 )",
    desp: "From 2001 to 2006, I served as the Associate Professor and Head of the Department of Computer Science at IMR Ghaziabad. In this role, I played a key role in overseeing departmental activities, contributing to academic development, and fostering a conducive learning environment for students.",
  },
  {
    title: "Associate Professor",
    cardImage: "assets/images/experience-page/jmiaaa.jpg",
    place: "Jamia Hamdard University",
    time: "Dec 2006 - Present",
    desp: "With over 26 years of experience in university-level teaching, I have been actively engaged in educating students at both undergraduate and postgraduate levels. Since December 2006, I have been serving as an Associate Professor in the Department of Computer Science within the Faculty of Engineering and Technology at Jamia Hamdard, New Delhi.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
    (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards


document.addEventListener("DOMContentLoaded", showCards3);
