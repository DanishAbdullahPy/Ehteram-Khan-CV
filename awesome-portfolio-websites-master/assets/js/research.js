/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
 
  {
    title: "Security and Energy Efficient Cyber-Physical Systems Using Predictive Modeling Approaches in Wireless Sensor Network",
    conferences: "Wireless Networks (Springer IF3.0), 2023",
    researchYr: 2023,
    citebox: "popup1", // Replace with the appropriate popup ID
    image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
    citation: {
      vancouver: "Author1, Author2, Author3. Security and Energy Efficient Cyber-Physical Systems Using Predictive Modeling Approaches in Wireless Sensor Network. Wireless Networks (Springer IF3.0), 2023. 10.1007/s11276-023-03345-1",
    },
    absbox: "absPopup1", // Replace with the appropriate popup ID
  
  },

  {
    title: "Hybrid Block-Based Lightweight Machine Learning-Based Predictive Models for Quality Preserving in the Internet of Things- (IoT-) Based Medical Images with Diagnostic Applications (SCI Indexed Impact Factor 4.4)",
  conferences: "Hindawi Computational Intelligence and Neuroscience",
  researchYr: 2022,
  citebox: "popup3", // Replace with the appropriate popup ID
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver: "Author1, Author2, Author3. Hybrid Block-Based Lightweight Machine Learning-Based Predictive Models for Quality Preserving in the Internet of Things- (IoT-) Based Medical Images with Diagnostic Applications (SCI Indexed Impact Factor 4.4). Hindawi Computational Intelligence and Neuroscience, April 12, 2022, Volume 2022, Article ID 8173372, https://doi.org/10.1155/2022/8173372",
  },
  absbox: "absPopup3", // Replace with the appropriate popup ID

  },

  {
    title: "Optimal Design of Intelligent Control System in the Communication Room Based on Artificial Intelligence (SCI Indexed)",
    conferences: "Hindawi Wireless Communications and Mobile Computing",
    researchYr: 2022,
    citebox: "popup4", // Replace with the appropriate popup ID
    image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
    citation: {
      vancouver: "Author1, Author2, Author3. Optimal Design of Intelligent Control System in the Communication Room Based on Artificial Intelligence (SCI Indexed). Hindawi Wireless Communications and Mobile Computing, Volume 2022, Article ID 2353789, 8 pages, https://doi.org/10.1155/2022/2353789",
    },
    abstract: "Replace this with the actual abstract for your research.", // Add the abstract for your research
    absbox: "absPopup4", // Replace with the appropriate popup ID
  },

  {
    title: "Hybrid Multi-User Based Cloud Data Security for Medical Decision Learning Patterns (Scopus Indexed)",
    authors: "Manish Gupta, Ihtiram Raza Khan, B Gomathy, Ansuman Samal", // Replace with the actual authors
    conferences: "ECS Transactions, Volume 107",
    researchYr: 2022, // Please replace with the actual year
    citebox: "popup5", // Replace with the appropriate popup ID
    image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
    citation: {
      vancouver: "Manish Gupta, Ihtiram Raza Khan, B Gomathy, Ansuman Samal. Hybrid Multi-User Based Cloud Data Security for Medical Decision Learning Patterns (Scopus Indexed). ECS Transactions, Volume 107, https://doi.org/10.1149/10701.2559ecst",
    },
    abstract: "Replace this with the actual abstract for your research.", // Add the abstract for your research
    absbox: "absPopup5", // Replace with the appropriate popup ID
  },

  {
    title: "Data Mining in Employee Healthcare Detection Using Intelligence Techniques for Industry Development (SCI Indexed Impact Factor 2.682)",
  conferences: "Hindawi - Journal of Healthcare Engineering",
  researchYr: 2022, // Please replace with the actual year
  citebox: "popup6", // Replace with the appropriate popup ID
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver: "Author1, Author2, Author3. Data Mining in Employee Healthcare Detection Using Intelligence Techniques for Industry Development (SCI Indexed Impact Factor 2.682). Hindawi - Journal of Healthcare Engineering, Volume 2022, Article ID 6462657, https://doi.org/10.1155/2022/6462657",
  },
  abstract: "Replace this with the actual abstract for your research.", // Add the abstract for your research
  absbox: "absPopup6", // Replace with the appropriate popup ID
  },


  {
  title:
    "Detection of Emotion of Speech for RAVDESS Audio Using Hybrid Convolution Neural Network (SCI Indexed Impact Factor 2.682)",
  conferences:
    "Hindawi Journal- Intelligent Solutions in E-Health and Medical Communication Services",
  researchYr: 2022,
  citebox: "popup8",
  image: "assets/images/research-page/ok.jpg",
  citation: {
    vancouver:
      " - Detection of Emotion of Speech for RAVDESS Audio Using Hybrid Convolution Neural Network. Hindawi Journal- Intelligent Solutions in E-Health and Medical Communication Services. Volume 2022 | Article ID 8472947 | https://doi.org/10.1155/2022/8472947",
  },
  abstract:
    "This research explores the detection of emotions in speech using the RAVDESS audio dataset. We propose a Hybrid Convolution Neural Network (HCNN) model, leveraging the power of both convolutional layers and neural networks to achieve accurate emotion recognition. The study aims to contribute to advancements in E-Health and medical communication services by providing a reliable method for automated emotion detection in audio, with a particular focus on applications in healthcare and related domains. The research is indexed with a significant impact factor of 2.682 in the SCI, reflecting its importance in the scientific community.",
  absbox: "absPopup8",
},


{
  title:
    "Multichannel CNN Model for Biomedical Entity Reorganization (SCI Indexed Impact Factor 3.41)",

  conferences:
    "Hindawi BioMed Research International",
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
  title:
    "Deep Learning Based Patient-Friendly Clinical Expert Recommendation Framework (IEEE Scopus)",
  authors:
    "Akhilesh Kumar, Sarfraz Fayaz Khan, Rajinder Singh Sodhi, Ihtiram Raza Khan, Sumit Kumar, Ashish Kumar Tamrakar",
  conferences:
    "2022 2nd International Conference on Innovative Practices in Technology and Management (ICIPTM)",
  researchYr: 2022,
  citebox: "popup8",
  image: "assets/images/research-page/ok.jpg",
  citation: {
    vancouver:
      "Kumar, A., Khan, S. F., Sodhi, R. S., Khan, I. R., Kumar, S., & Tamrakar, A. K. Deep Learning Based Patient-Friendly Clinical Expert Recommendation Framework. In 2022 2nd International Conference on Innovative Practices in Technology and Management (ICIPTM). IEEE Scopus.",
  },
  abstract:
    "This paper presents a novel Deep Learning Based Patient-Friendly Clinical Expert Recommendation Framework, designed to enhance the patient experience in seeking clinical expertise. The authors, Akhilesh Kumar, Sarfraz Fayaz Khan, Rajinder Singh Sodhi, Ihtiram Raza Khan, Sumit Kumar, and Ashish Kumar Tamrakar, propose an innovative solution leveraging deep learning techniques. The framework aims to provide personalized and user-friendly recommendations for clinical experts. This research was presented at the 2022 2nd International Conference on Innovative Practices in Technology and Management (ICIPTM) and is published by IEEE, indexed in Scopus. The work contributes to the intersection of healthcare and technology, emphasizing the importance of patient-centric approaches in clinical decision-making.",
  absbox: "absPopup8",
},

// Data for Journal of Food Quality
{
  title:
    "Open Data Release and Privacy Concerns: Complexity in Mitigating Vulnerability with Controlled Perturbation",
  journals: "Journal of Food Quality (SCI and SCOPUS INDEXED)",
  researchYr: 2021,
  citebox: "popup8",
  image: "assets/images/research-page/ok.jpg",

  citation: {
    vancouver:
      "Author Name(s) - Replace with actual authors' names. Open Data Release and Privacy Concerns: Complexity in Mitigating Vulnerability with Controlled Perturbation. Journal of Food Quality. Vol. 2021, pp. 1-8, 2021. Available: 10.1155/2021/9929049. (SCI and SCOPUS INDEXED)",
  },
  abstract:
    "This research addresses the complexities associated with open data release and privacy concerns, focusing on mitigating vulnerabilities through controlled perturbation. Published in the Journal of Food Quality, this study contributes to the discourse on data privacy and security. The work is indexed in both SCI and SCOPUS, emphasizing its significance in the scientific community.",
  absbox: "absPopup8",
},

// Data for Turkish Journal of Computer and Mathematics Education
{
  title:
    "An Intelligent Smart Ranked Feature Construction Analysis based on Clustering High Dimensional Data Streams",
  journals: "Turkish Journal of Computer and Mathematics Education (TURCOMAT) (SCOPUS INDEXED)",
  researchYr: 2021,
  citebox: "popup9",
  image: "assets/images/research-page/ok.jpg",

  citation: {
    vancouver:
      "Author Name(s) - Replace with actual authors' names. An Intelligent Smart Ranked Feature Construction Analysis based on Clustering High Dimensional Data Streams. Turkish Journal of Computer and Mathematics Education (TURCOMAT). April 2021. Vol.12 No.9 (2021) (No 9):137-142",
  },
  abstract:
    "This study introduces an intelligent smart ranked feature construction analysis based on clustering high-dimensional data streams. Published in the Turkish Journal of Computer and Mathematics Education (TURCOMAT) and indexed in SCOPUS, this research presents an innovative approach to feature construction and analysis in the context of high-dimensional data streams.",
  absbox: "absPopup9",
},

// Data for Journal of Information Technology in Industry
{
  title:
    "Blockchain for Indian Agriculture: A Revolution",
  journals: "Journal of Information Technology in Industry (ESCI)",
  researchYr: 2021,
  citebox: "popup10",
  image: "assets/images/research-page/ok.jpg",

  citation: {
    vancouver:
      "Author Name(s) - Replace with actual authors' names. Blockchain for Indian Agriculture: A Revolution. Journal of Information Technology in Industry. March 2021, Vol. 9, No. 2. DOI: 10.17762/itii.v9i2.378",
  },
  abstract:
    "This research explores the revolutionary potential of blockchain technology in the context of Indian agriculture. Published in the Journal of Information Technology in Industry (ESCI), this study provides insights into the transformative role of blockchain in the agricultural sector. The work contributes to the ongoing dialogue on technology adoption and innovation in agriculture.",
  absbox: "absPopup10",
},




// Data for International Conference on Recent Trends in Computing ICRTC-2021 (Springer Conference)
{
  title:
    "Psychological Impacts of COVID-19 on Human Health - Data Visualised",
  conferences:
    "International Conference on Recent Trends in Computing ICRTC-2021 (Springer Conference)",
  researchYr: 2021,
  citebox: "popup12",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Author Name(s) - Replace with actual authors' names. Psychological Impacts of COVID-19 on Human Health - Data Visualised. July 2021.",
  },
  abstract:
    "This study explores the psychological impacts of COVID-19 on human health, visualizing the data to gain insights into the mental health challenges posed by the pandemic. The research was presented at the International Conference on Recent Trends in Computing ICRTC-2021 (Springer Conference) in July 2021. The work contributes to understanding the broader implications of the pandemic on mental well-being.",
  absbox: "absPopup12",
},

// Data for International Conference on Image Processing and Capsule Networks ICIPN 2021 (Springer Conference)
{
  title:
    "A Novel Method of Transforming Real Images & Videos into Cartoon Images & Videos",
  conferences:
    "International Conference on Image Processing and Capsule Networks ICIPN 2021 (Springer Conference)",
  researchYr: 2021,
  citebox: "popup13",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Author Name(s) - Replace with actual authors' names. A Novel Method of Transforming Real Images & Videos into Cartoon Images & Videos. July 2021.",
  },
  abstract:
    "This research presents a novel method for transforming real images and videos into cartoon-style counterparts. The study, showcased at the International Conference on Image Processing and Capsule Networks ICIPN 2021 (Springer Conference) in July 2021, introduces an innovative approach to visual content transformation.",
  absbox: "absPopup13",
},

// Data for International Conference on Engineering, Applied Sciences and Management (UOB-IEASMA 2021) Buraimi, Oman
{
  title:
    "Augmented Reality Application for Newspapers",
  conferences:
    "International Conference on Engineering, Applied Sciences and Management (UOB-IEASMA 2021) Buraimi, Oman",
  researchYr: 2021,
  citebox: "popup14",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Author Name(s) - Replace with actual authors' names. Augmented Reality Application for Newspapers. March 2021. ISBN: 978-81-947901-2-9.",
  },
  abstract:
    "This study introduces an augmented reality application designed for newspapers. Presented at the International Conference on Engineering, Applied Sciences and Management (UOB-IEASMA 2021) in Buraimi, Oman, the research showcases the integration of augmented reality to enhance the reader's newspaper experience.",
  absbox: "absPopup14",
},

// Data for 2nd International Conference on Emerging Trends in Mathematical Sciences & Computing (IEMSC-21), Kolkata, West Bengal
{
  title:
    "Smart Garbage Monitoring System using IoT",
  conferences:
    "2nd International Conference on Emerging Trends in Mathematical Sciences & Computing (IEMSC-21), Kolkata, West Bengal",
  citebox: "popup15",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Author Name(s) - Replace with actual authors' names. Smart Garbage Monitoring System using IoT.",
  },
  abstract:
    "This research presents a Smart Garbage Monitoring System using the Internet of Things (IoT). The study, featured at the 2nd International Conference on Emerging Trends in Mathematical Sciences & Computing (IEMSC-21) in Kolkata, West Bengal, showcases an innovative approach to waste management through IoT technology.",
  absbox: "absPopup15",
},



// Data for International Conference on Smart Innovations for Society (ISSN:2278-4632)
{
  title:
    "IoT in Smart Cities: A Survey",
  journals:
    "International Conference on Smart Innovations for Society (ISSN:2278-4632) Juni Khyat (UGC CARE group I Journal)",
  researchYr: "May 2020",
  citebox: "popup22",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Juni Khyat. IoT in Smart Cities: A Survey. Vol 10 Issue 5 May 2020. International Conference on Smart Innovations for Society (ISSN:2278-4632) (UGC CARE group I Journal).",
  },
  abstract:
    "This survey by Juni Khyat explores the implementation of IoT in smart cities. Published in the International Conference on Smart Innovations for Society (ISSN:2278-4632) - a UGC CARE group I Journal, the study provides insights into the current state and trends of IoT applications in smart urban environments.",
  absbox: "absPopup22",
},

// Data for Proteus UGC CARE Journal ISSN/eISSN: 0889-6348
{
  title:
    "IoT Based Smart Door System Using Face Recognition",
  journals:
    "PROTEUS UGC CARE Journal ISSN/eISSN: 0889-6348",
  researchYr: 2020,
  citebox: "popup23",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "IoT Based Smart Door System Using Face Recognition. Vol 11 Issue 6 2020. PROTEUS UGC CARE Journal ISSN/eISSN: 0889-6348.",
  },
  abstract:
    "This research presents an IoT-based smart door system employing face recognition technology. Published in the PROTEUS UGC CARE Journal (ISSN/eISSN: 0889-6348), the study showcases an innovative application of IoT in enhancing security and access control.",
  absbox: "absPopup23",
},

// Data for International Conference of “Business Transformation through Sustainability, Entrepreneurship and Digitalization-2019 ISBN: 978-93-88996-19-8
{
  title:
    "Internet of Things (IoT) as Key Enabler for Efficient Business Processes",
  conferences:
    "International Conference of “Business Transformation through Sustainability, Entrepreneurship and Digitalization-2019 ISBN: 978-93-88996-19-8",
  researchYr: 2019,
  citebox: "popup24",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Internet of Things (IoT) as Key Enabler for Efficient Business Processes. International Conference of “Business Transformation through Sustainability, Entrepreneurship and Digitalization-2019 ISBN: 978-93-88996-19-8.",
  },
  abstract:
    "This study explores the role of the Internet of Things (IoT) as a key enabler for efficient business processes. Presented at the International Conference of “Business Transformation through Sustainability, Entrepreneurship and Digitalization-2019, the research emphasizes the transformative impact of IoT in optimizing business operations.",
  absbox: "absPopup24",
},

// Data for International Journal for Research in Applied Science and Engineering Technology(IJRASET) ISSN:2361-9653
{
  title:
    "Crime Data Analysis in Python using K-means Clustering",
  journals:
    "International Journal for Research in Applied Science and Engineering Technology(IJRASET) ISSN:2361-9653",
  researchYr: "April 2019",
  citebox: "popup25",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Crime Data Analysis in Python using K-means Clustering. Vol 7 Issue IV April 2019. International Journal for Research in Applied Science and Engineering Technology(IJRASET) ISSN:2361-9653.",
  },
  abstract:
    "This research focuses on crime data analysis using Python and K-means clustering. Published in the International Journal for Research in Applied Science and Engineering Technology(IJRASET) with ISSN:2361-9653, the study demonstrates the application of data analytics techniques for crime analysis.",
  absbox: "absPopup25",
},
// Data for International Journal of Computer Sciences & Engineering (IJCSE) ISSN:2347-2693
{
  title:
    "Effort of Load Balancing to Achieve Green Computing",
  journals:
    "International Journal of Computer Sciences & Engineering (IJCSE) ISSN:2347-2693",
  researchYr: "April 2019",
  citebox: "popup26",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Effort of Load Balancing to Achieve Green Computing. Vol 7 Issue 4 April 2019. International Journal of Computer Sciences & Engineering (IJCSE) ISSN:2347-2693.",
  },
  abstract:
    "This research investigates the impact of load balancing efforts on achieving green computing. Published in the International Journal of Computer Sciences & Engineering (IJCSE) with ISSN:2347-2693, the study explores strategies for optimizing resource distribution to minimize environmental impact.",
  absbox: "absPopup26",
},

// Data for International Journal of Advanced Research in Computer Science (IJARCS) ISSN 0976-5697
{
  title:
    "Malware Detection and Analysis",
  journals:
    "International Journal of Advanced Research in Computer Science (IJARCS) ISSN 0976-5697",
  researchYr: "Every data should be accurate",
  citebox: "popup27",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Malware Detection and Analysis. Vol 8 Issue 5. International Journal of Advanced Research in Computer Science (IJARCS) ISSN 0976-5697.",
  },
  abstract:
    "This research focuses on the detection and analysis of malware threats. Published in the International Journal of Advanced Research in Computer Science (IJARCS) with ISSN 0976-5697, the study addresses techniques and methodologies for identifying and analyzing malicious software.",
  absbox: "absPopup27",
},

// Data for International Journal of Advanced Research in Computer Science (IJARCS) ISSN 0976-5697
{
  title:
    "Issues and Vulnerabilities Related to Online Voting and its Mitigation",
  journals:
    "International Journal of Advanced Research in Computer Science (IJARCS) ISSN 0976-5697",
  researchYr: "May 2017",
  citebox: "popup28",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Issues and Vulnerabilities Related to Online Voting and its Mitigation. Vol 8 Issue 5 May 2017. International Journal of Advanced Research in Computer Science (IJARCS) ISSN 0976-5697.",
  },
  abstract:
    "This study addresses issues and vulnerabilities associated with online voting and proposes mitigation strategies. Published in the International Journal of Advanced Research in Computer Science (IJARCS) with ISSN 0976-5697, the research explores challenges in online voting security and offers solutions.",
  absbox: "absPopup28",
},

// Data for International Journal of Computational Engineering Research (IJCER) ISSN (e): 2250 – 3005
{
  title:
    "Function Point Software Cost Estimates using Neuro-Fuzzy Technique",
  journals:
    "International Journal of Computational Engineering Research (IJCER) ISSN (e): 2250 – 3005",
  researchYr: "September 2016",
  citebox: "popup29",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Function Point Software Cost Estimates using Neuro-Fuzzy Technique. Vol 06 Issue 09 September 2016. International Journal of Computational Engineering Research (IJCER) ISSN (e): 2250 – 3005.",
  },
  abstract:
    "This research introduces the use of neuro-fuzzy techniques for estimating function point software costs. Published in the International Journal of Computational Engineering Research (IJCER) with ISSN (e): 2250 – 3005, the study explores advanced computational methods in software engineering.",
  absbox: "absPopup29",
},

// Data for International Journal of Emerging Research in Management Technology
{
  title:
    "Swarm Intelligence in MANETs: A Survey",
  journals:
    "International Journal of Emerging Research in Management Technology",
  researchYr: "2016",
  citebox: "popup30",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Swarm Intelligence in MANETs: A Survey. Vol 5 Issue 5 2016. International Journal of Emerging Research in Management Technology.",
  },
  abstract:
    "This survey explores the application of swarm intelligence in Mobile Ad-Hoc Networks (MANETs). Published in the International Journal of Emerging Research in Management Technology, the study provides insights into the use of swarm intelligence techniques for optimizing communication in MANETs.",
  absbox: "absPopup30",
},


// Data for International Journal of Advanced Research in Computer Science and Software Engineering
{
  title:
    "Security Metrics: Expectations & the Reality",
  journals:
    "International Journal of Advanced Research in Computer Science and Software Engineering",
  researchYr: "2015",
  citebox: "popup31",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Security Metrics: Expectations & the Reality. Volume 5 Issue 6 2015. International Journal of Advanced Research in Computer Science and Software Engineering.",
  },
  abstract:
    "This research delves into security metrics, exploring the expectations and reality in the field. Published in the International Journal of Advanced Research in Computer Science and Software Engineering, the study provides insights into the challenges and achievements of security metrics.",
  absbox: "absPopup31",
},

// Data for International Journal of Innovative Research in Technology & Science (IJIRTS)
{
  title:
    "Improved Entropy-based Fuzzy Classifier in Handwritten Gesture Recognition",
  journals:
    "International Journal of Innovative Research in Technology & Science (IJIRTS)",
  researchYr: "Every data should be accurate",
  citebox: "popup32",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Improved Entropy-based Fuzzy Classifier in Handwritten Gesture Recognition. International Journal of Innovative Research in Technology & Science (IJIRTS).",
  },
  abstract:
    "This research introduces an improved entropy-based fuzzy classifier for handwritten gesture recognition. Published in the International Journal of Innovative Research in Technology & Science (IJIRTS), the study presents advancements in the field of gesture recognition using fuzzy classification.",
  absbox: "absPopup32",
},

// Data for International Journal of Advanced Computer Technology (IJACT)
{
  title:
    "Enhanced Method for Text Searching Using Compression in Information Retrieval",
  journals:
    "International Journal of Advanced Computer Technology (IJACT)",
  researchYr: "Every data should be accurate",
  citebox: "popup33",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Enhanced Method for Text Searching Using Compression in Information Retrieval. International Journal of Advanced Computer Technology (IJACT).",
  },
  abstract:
    "This research proposes an enhanced method for text searching using compression in information retrieval. Published in the International Journal of Advanced Computer Technology (IJACT), the study focuses on optimizing text search algorithms through compression techniques.",
  absbox: "absPopup33",
},

// Data for ISCET 2010 International Symposium on Computer Engineering & Technology
{
  title:
    "Efficient Software Cost Estimation using Neuro-Fuzzy Technique",
  conferences:
    "ISCET 2010 International Symposium on Computer Engineering & Technology",
  researchYr: 2010,
  citebox: "popup34",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Efficient Software Cost Estimation using Neuro-Fuzzy Technique. ISCET 2010 International Symposium on Computer Engineering & Technology. P 229-232.",
  },
  abstract:
    "This research focuses on efficient software cost estimation using neuro-fuzzy techniques. Presented at the ISCET 2010 International Symposium on Computer Engineering & Technology, the study explores advanced computational methods in software cost estimation.",
  absbox: "absPopup34",
},

// Data for International Journal of Scientific Research Engineering and Technology (IJSRET) ISSN: 2278-0882
{
  title:
    "Analysis of Big Data Processing using Machine Learning Algorithm",
  journals:
    "International Journal of Scientific Research Engineering and Technology (IJSRET) ISSN: 2278-0882",
  researchYr: "April 2018",
  citebox: "popup35",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Analysis of Big Data Processing using Machine Learning Algorithm. Vol 7 Issue 4 April 2018. International Journal of Scientific Research Engineering and Technology (IJSRET) ISSN: 2278-0882.",
  },
  abstract:
    "This research analyzes big data processing using machine learning algorithms. Published in the International Journal of Scientific Research Engineering and Technology (IJSRET) with ISSN: 2278-0882, the study explores the application of machine learning in handling and processing large-scale datasets.",
  absbox: "absPopup35",
},

// Data for International Journal of Computer Science and Management Research ISSN 2278-733X
{
  title:
    "Software Cost Estimation using a Neuro-Fuzzy Algorithmic Approach",
  journals:
    "International Journal of Computer Science and Management Research ISSN 2278-733X",
  researchYr: "July 2013",
  citebox: "popup36",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Software Cost Estimation using a Neuro-Fuzzy Algorithmic Approach. Vol 02 Issue 07 July 2013. International Journal of Computer Science and Management Research ISSN 2278-733X.",
  },
  abstract:
    "This research presents a software cost estimation approach using a neuro-fuzzy algorithm. Published in the International Journal of Computer Science and Management Research with ISSN 2278-733X, the study introduces an innovative method for estimating software development costs.",
  absbox: "absPopup36",
},

// Data for ETCSIT 2013 International Conference on “Emerging Trends in Computer Science and Information Technology” (CSIR sponsored) ISBN 978-93-80703-45-9
{
  title:
    "Software Development and Maintenance Cost Estimation using Neuro-Fuzzy Approach",
  conferences:
    "ETCSIT 2013 International Conference on “Emerging Trends in Computer Science and Information Technology” (CSIR sponsored) ISBN 978-93-80703-45-9",
  researchYr: 2013,
  citebox: "popup37",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Software Development and Maintenance Cost Estimation using Neuro-Fuzzy Approach. ETCSIT 2013 International Conference on “Emerging Trends in Computer Science and Information Technology” (CSIR sponsored) ISBN 978-93-80703-45-9.",
  },
  abstract:
    "This research focuses on software development and maintenance cost estimation using a neuro-fuzzy approach. Presented at the ETCSIT 2013 International Conference, the study explores advanced techniques in software cost estimation.",
  absbox: "absPopup37",
},

// Data for NCRDCA 2009 National Conference on Recent Developments in Computing and its Applications ISBN 978-93-80026-78-7
{
  title:
    "Efficient Software Cost Estimation using Neuro-Fuzzy Technique",
  conferences:
    "NCRDCA 2009 National Conference on Recent Developments in Computing and its Applications ISBN 978-93-80026-78-7",
  researchYr: 2009,
  citebox: "popup38",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Efficient Software Cost Estimation using Neuro-Fuzzy Technique. P 376-381. NCRDCA 2009 National Conference on Recent Developments in Computing and its Applications ISBN 978-93-80026-78-7.",
  },
  abstract:
    "This research proposes an efficient software cost estimation technique using neuro-fuzzy methods. Presented at the NCRDCA 2009 National Conference, the study contributes to the field of software engineering by optimizing cost estimation processes.",
  absbox: "absPopup38",
},

// Data for Journal of The Nepal Medical Association 2001
{
  title:
    "Malignant Degeneration in a Mature Cystic Teratoma of Ovary: A Case Report",
  journals:
    "Journal of The Nepal Medical Association 2001",
  researchYr: 2001,
  citebox: "popup39",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Malignant Degeneration in a Mature Cystic Teratoma of Ovary: A Case Report. DOI: 10.31729/jnma.845. Journal of The Nepal Medical Association 2001.",
  },
  abstract:
    "This case report explores malignant degeneration in a mature cystic teratoma of the ovary. Published in the Journal of The Nepal Medical Association in 2001, the study presents a unique clinical case and contributes to the understanding of teratoma pathology.",
  absbox: "absPopup39",
},

// Data for The Southeast Asian Journal Of Tropical Medicine And Public Health (2000)
{
  title:
    "Hydatid Cyst Presenting as a Breast Lump",
  journals:
    "The Southeast Asian Journal Of Tropical Medicine And Public Health (2000)",
  researchYr: 2000,
  citebox: "popup40",
  image: "assets/images/research-page/ok.jpg", // Replace with the actual image path
  citation: {
    vancouver:
      "Hydatid Cyst Presenting as a Breast Lump. The Southeast Asian Journal Of Tropical Medicine And Public Health (2000).",
  },
  abstract:
    "This research discusses a rare case of a hydatid cyst presenting as a breast lump. Published in The Southeast Asian Journal Of Tropical Medicine And Public Health in 2000, the study highlights the importance of considering parasitic infections in the differential diagnosis of breast lumps.",
  absbox: "absPopup40",
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
