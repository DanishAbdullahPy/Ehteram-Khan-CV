/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
        {
          title: "Multichannel CNN Model for Biomedical Entity Reorganization (SCI Indexed Impact Factor 3.41)",
          conferences: "Hindawi BioMed Research International",
          researchYr: 2022,
          citebox: "popup8",
          image: "assets/images/research-page/ok.jpg",
          citation: {
            vancouver:
              "Author Name(s) - Replace with actual authors' names. Multichannel CNN Model for Biomedical Entity Reorganization. Hindawi BioMed Research International. Volume 2022 | Article ID 5765629 | https://doi.org/10.1155/2022/5765629",
          },
          abstract:
            "This research introduces a Multichannel CNN (Convolutional Neural Network) model designed for the reorganization of biomedical entities. Leveraging the power of multiple channels, our proposed model aims to enhance the accuracy and efficiency of entity reorganization in biomedical data. The study contributes to the field of BioMed Research International, presenting a novel approach to handling complex biomedical information. With a substantial SCI Indexed Impact Factor of 3.41, this research underscores its significance in advancing the understanding and application of computational methods in biomedical sciences.",
          absbox: "absPopup8",
        },

        {
            title: "Computer Fundamentals for Beginners",
            conferences: "Kripa Drishti Publications",
            researchYr: 2022,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver:
                "Ihtiram Raza Khan, Huma Anwar. Computer Fundamentals for Beginners. Kripa Drishti Publications, 2022. ISBN-13: 978-93-90847-10-5",
            },
            abstract:
              "This book, co-authored by Ihtiram Raza Khan and Huma Anwar, provides a comprehensive introduction to computer fundamentals for beginners. Leveraging the expertise of the authors, the book aims to facilitate a foundational understanding of computer concepts for novice users. The study contributes to the field of Kripa Drishti Publications, presenting an accessible approach to computer fundamentals. With its publication year of 2022, this book underscores its significance in providing essential knowledge for beginners in the realm of computing.",
            absbox: "absPopup8",
          },

          {
            title: "Research Methods of Computer Science",
            conferences: "Laxmi Publications (P) Ltd",
            researchYr: 2018,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ehtiram Raza Khan, Huma Anwar. Research Methods of Computer Science. Laxmi Publications (P) Ltd, 2018. ISBN-13: 9789383828241"
            },
            abstract: "This book, co-authored by Ehtiram Raza Khan and Huma Anwar, explores research methods in computer science. Leveraging the expertise of the authors, the book aims to provide a comprehensive understanding of research methodologies in the field. The study contributes to the domain of Laxmi Publications (P) Ltd, presenting an in-depth approach to computer science research methods. With its publication year of 2018, this book underscores its significance in advancing the knowledge and application of research techniques in computer science.",
            absbox: "absPopup8"
          },
          {
            title: "Computer Graphics & Multimedia",
            conferences: "Laxmi Publications (P) Ltd",
            researchYr: 2011,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ehtiram Raza Khan, Huma Anwar. Computer Graphics & Multimedia. Laxmi Publications (P) Ltd, 2011. ISBN-13: 9788131804919"
            },
            abstract: "This book, co-authored by Ehtiram Raza Khan and Huma Anwar, delves into computer graphics and multimedia. Leveraging the expertise of the authors, the book aims to provide a comprehensive understanding of the principles and applications in the field. The study contributes to the domain of Laxmi Publications (P) Ltd, presenting a comprehensive approach to computer graphics and multimedia. With its publication year of 2011, this book underscores its significance in advancing the knowledge and application of graphics and multimedia technologies.",
            absbox: "absPopup8"
          },
          {
            title: "Introduction to Software Engineering",
            conferences: "CyberTech Publication",
            researchYr: 2007,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ehtiram Raza Khan. Introduction to Software Engineering. CyberTech Publication, 2007. ISBN-13: 9788178842387"
            },
            abstract: "This book authored by Ehtiram Raza Khan provides an introduction to software engineering. Leveraging the author's expertise, the book aims to provide a foundational understanding of software engineering principles. The study contributes to the field of CyberTech Publication, presenting a comprehensive approach to software engineering. With its publication year of 2007, this book underscores its significance in advancing the knowledge and application of software engineering.",
            absbox: "absPopup8"
          },
          {
            title: "Introduction to Interactive Computer Graphics",
            conferences: "Cyber Tech Publications",
            researchYr: 2003,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ihtiram Raza Khan. Introduction to Interactive Computer Graphics. Cyber Tech Publications, 2003. ISBN: 8178840618"
            },
            abstract: "This book authored by Ihtiram Raza Khan provides an introduction to interactive computer graphics. Leveraging the author's expertise, the book aims to provide a comprehensive understanding of interactive graphics principles. The study contributes to the field of Cyber Tech Publications, presenting an in-depth approach to interactive computer graphics. With its publication year of 2003, this book underscores its significance in advancing the knowledge and application of interactive graphics.",
            absbox: "absPopup8"
          },

          {
            title: "Research Methods of Computer Science",
            conferences: "Laxmi Publications (P) Ltd",
            researchYr: 2018,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ehtiram Raza Khan, Huma Anwar. Research Methods of Computer Science. Laxmi Publications (P) Ltd, 2018. ISBN-13: 9789383828241"
            },
            abstract: "This book, co-authored by Ehtiram Raza Khan and Huma Anwar, explores research methods in computer science. Leveraging the expertise of the authors, the book aims to provide a comprehensive understanding of research methodologies in the field. The study contributes to the domain of Laxmi Publications (P) Ltd, presenting an in-depth approach to computer science research methods. With its publication year of 2018, this book underscores its significance in advancing the knowledge and application of research techniques in computer science.",
            absbox: "absPopup8"
          },
          {
            title: "Computer Graphics & Multimedia",
            conferences: "Laxmi Publications (P) Ltd",
            researchYr: 2011,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ehtiram Raza Khan, Huma Anwar. Computer Graphics & Multimedia. Laxmi Publications (P) Ltd, 2011. ISBN-13: 9788131804919"
            },
            abstract: "This book, co-authored by Ehtiram Raza Khan and Huma Anwar, delves into computer graphics and multimedia. Leveraging the expertise of the authors, the book aims to provide a comprehensive understanding of the principles and applications in the field. The study contributes to the domain of Laxmi Publications (P) Ltd, presenting a comprehensive approach to computer graphics and multimedia. With its publication year of 2011, this book underscores its significance in advancing the knowledge and application of graphics and multimedia technologies.",
            absbox: "absPopup8"
          },
          
          {
            title: "Introduction to Software Engineering",
            conferences: "CyberTech Publication",
            researchYr: 2007,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ehtiram Raza Khan. Introduction to Software Engineering. CyberTech Publication, 2007. ISBN-13: 9788178842387"
            },
            abstract: "This book authored by Ehtiram Raza Khan provides an introduction to software engineering. Leveraging the author's expertise, the book aims to provide a foundational understanding of software engineering principles. The study contributes to the field of CyberTech Publication, presenting a comprehensive approach to software engineering. With its publication year of 2007, this book underscores its significance in advancing the knowledge and application of software engineering.",
            absbox: "absPopup8"
          },
          
          {
            title: "Introduction to Interactive Computer Graphics",
            conferences: "Cyber Tech Publications",
            researchYr: 2003,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ihtiram Raza Khan. Introduction to Interactive Computer Graphics. Cyber Tech Publications, 2003. ISBN: 8178840618"
            },
            abstract: "This book authored by Ihtiram Raza Khan provides an introduction to interactive computer graphics. Leveraging the author's expertise, the book aims to provide a comprehensive understanding of interactive graphics principles. The study contributes to the field of Cyber Tech Publications, presenting an in-depth approach to interactive computer graphics. With its publication year of 2003, this book underscores its significance in advancing the knowledge and application of interactive graphics.",
            absbox: "absPopup8"
          },
          
          {
            title: "Research Methods of Computer Science",
            conferences: "Laxmi Publications (P) Ltd",
            researchYr: 2018,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ehtiram Raza Khan, Huma Anwar. Research Methods of Computer Science. Laxmi Publications (P) Ltd, 2018. ISBN-13: 9789383828241"
            },
            abstract: "This book, co-authored by Ehtiram Raza Khan and Huma Anwar, explores research methods in computer science. Leveraging the expertise of the authors, the book aims to provide a comprehensive understanding of research methodologies in the field. The study contributes to the domain of Laxmi Publications (P) Ltd, presenting an in-depth approach to computer science research methods. With its publication year of 2018, this book underscores its significance in advancing the knowledge and application of research techniques in computer science.",
            absbox: "absPopup8"
          },
          
          {
            title: "Computer Graphics & Multimedia",
            conferences: "Laxmi Publications (P) Ltd",
            researchYr: 2011,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ehtiram Raza Khan, Huma Anwar. Computer Graphics & Multimedia. Laxmi Publications (P) Ltd, 2011. ISBN-13: 9788131804919"
            },
            abstract: "This book, co-authored by Ehtiram Raza Khan and Huma Anwar, delves into computer graphics and multimedia. Leveraging the expertise of the authors, the book aims to provide a comprehensive understanding of the principles and applications in the field. The study contributes to the domain of Laxmi Publications (P) Ltd, presenting a comprehensive approach to computer graphics and multimedia. With its publication year of 2011, this book underscores its significance in advancing the knowledge and application of graphics and multimedia technologies.",
            absbox: "absPopup8"
          },
          
          {
            title: "Introduction to Software Engineering",
            conferences: "CyberTech Publication",
            researchYr: 2007,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ehtiram Raza Khan. Introduction to Software Engineering. CyberTech Publication, 2007. ISBN-13: 9788178842387"
            },
            abstract: "This book authored by Ehtiram Raza Khan provides an introduction to software engineering. Leveraging the author's expertise, the book aims to provide a foundational understanding of software engineering principles. The study contributes to the field of CyberTech Publication, presenting a comprehensive approach to software engineering. With its publication year of 2007, this book underscores its significance in advancing the knowledge and application of software engineering.",
            absbox: "absPopup8"
          },
          
          {
            title: "Introduction to Interactive Computer Graphics",
            conferences: "Cyber Tech Publications",
            researchYr: 2003,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ihtiram Raza Khan. Introduction to Interactive Computer Graphics. Cyber Tech Publications, 2003. ISBN: 8178840618"
            },
            abstract: "This book authored by Ihtiram Raza Khan provides an introduction to interactive computer graphics. Leveraging the author's expertise, the book aims to provide a comprehensive understanding of interactive graphics principles. The study contributes to the field of Cyber Tech Publications, presenting an in-depth approach to interactive computer graphics. With its publication year of 2003, this book underscores its significance in advancing the knowledge and application of interactive graphics.",
            absbox: "absPopup8"
          },
          

          {
            title: "Research Methods of Computer Science",
            conferences: "Laxmi Publications (P) Ltd",
            researchYr: 2018,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ehtiram Raza Khan, Huma Anwar. Research Methods of Computer Science. Laxmi Publications (P) Ltd, 2018. ISBN-13: 9789383828241"
            },
            abstract: "This book, co-authored by Ehtiram Raza Khan and Huma Anwar, explores research methods in computer science. Leveraging the expertise of the authors, the book aims to provide a comprehensive understanding of research methodologies in the field. The study contributes to the domain of Laxmi Publications (P) Ltd, presenting an in-depth approach to computer science research methods. With its publication year of 2018, this book underscores its significance in advancing the knowledge and application of research techniques in computer science.",
            absbox: "absPopup8"
          },
          {
            title: "Computer Graphics & Multimedia",
            conferences: "Laxmi Publications (P) Ltd",
            researchYr: 2011,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ehtiram Raza Khan, Huma Anwar. Computer Graphics & Multimedia. Laxmi Publications (P) Ltd, 2011. ISBN-13: 9788131804919"
            },
            abstract: "This book, co-authored by Ehtiram Raza Khan and Huma Anwar, delves into computer graphics and multimedia. Leveraging the expertise of the authors, the book aims to provide a comprehensive understanding of the principles and applications in the field. The study contributes to the domain of Laxmi Publications (P) Ltd, presenting a comprehensive approach to computer graphics and multimedia. With its publication year of 2011, this book underscores its significance in advancing the knowledge and application of graphics and multimedia technologies.",
            absbox: "absPopup8"
          },
          {
            title: "Introduction to Software Engineering",
            conferences: "CyberTech Publication",
            researchYr: 2007,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ehtiram Raza Khan. Introduction to Software Engineering. CyberTech Publication, 2007. ISBN-13: 9788178842387"
            },
            abstract: "This book authored by Ehtiram Raza Khan provides an introduction to software engineering. Leveraging the author's expertise, the book aims to provide a foundational understanding of software engineering principles. The study contributes to the field of CyberTech Publication, presenting a comprehensive approach to software engineering. With its publication year of 2007, this book underscores its significance in advancing the knowledge and application of software engineering.",
            absbox: "absPopup8"
          },
          {
            title: "Introduction to Interactive Computer Graphics",
            conferences: "Cyber Tech Publications",
            researchYr: 2003,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Ihtiram Raza Khan. Introduction to Interactive Computer Graphics. Cyber Tech Publications, 2003. ISBN: 8178840618"
            },
            abstract: "This book authored by Ihtiram Raza Khan provides an introduction to interactive computer graphics. Leveraging the author's expertise, the book aims to provide a comprehensive understanding of interactive graphics principles. The study contributes to the field of Cyber Tech Publications, presenting an in-depth approach to interactive computer graphics. With its publication year of 2003, this book underscores its significance in advancing the knowledge and application of interactive graphics.",
            absbox: "absPopup8"
          },
          {
            title: "Information Technology for Management",
            conferences: "KD Publications",
            researchYr: 2020,
            citebox: "popup8",
            image: "assets/images/research-page/ok.jpg",
            citation: {
              vancouver: "Business 4.0-A New Revolution. Information Technology for Management. KD Publications, 2020. ISBN-13: 9788194783916"
            },
            abstract: "This book chapter, titled 'Business 4.0-A New Revolution,' is part of the larger work 'Information Technology for Management.' The study, published by KD Publications in 2020, explores the revolutionary concepts introduced by Business 4.0. Leveraging the expertise of the authors, the book aims to provide insights into the intersection of business and information technology. With its publication year of 2020, this book chapter contributes to the field of information technology and management, emphasizing the transformative nature of Business 4.0.",
            absbox: "absPopup8"
          },
                                        
          
          












          
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
