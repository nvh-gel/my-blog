import {
  faAlgolia,
  faAngular,
  faHtml5,
  faJava,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCloudDownload,
  faCode,
  faGears,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import GuideData from "../interface/guide";
import NewsData from "../interface/news";
import WorkData from "../interface/work";

export const serviceData = [
  {
    title: "Backend",
    content: [
      "Experienced in Java, SpringMVC, Spring Boot, Hibernate ORM.",
      "Experienced in Python and Python framework: Django, Flask.",
      "Experienced in managing, improving and optimizing SQL databases and queries.",
      "Experienced in bug tracking and tracing in Logstash and Kibana.",
    ],
    icon: faJava,
  },
  {
    title: "Frontend",
    content: [
      "Familiar with front end development by HTML and CSS.",
      "Has experience developing frontend site using ReactJS and React Typescript",
      "Familiar with developing frontend site using Angular framework.",
    ],
    icon: faHtml5,
  },
  {
    title: "Software engineer",
    content: [
      "Familiar with software development methodology, i.e Agile, Scrum.",
      "Participated in previous development teams as Scrum Master, Team Leader",
    ],
    icon: faPeopleGroup,
  },
  {
    title: "Devops",
    content: [
      "Familiar with Docker and Kubernetes",
      "Familiar with CD/CI tools for development: Git, Subversion, Jenkins, SonarQube",
      "Familiar with bug tracking configuration and report using JIRA",
    ],
    icon: faGears,
  },
];

export const projectData = [
  {
    title: "TWINT",
    date: "Aug 2021 - June 2022",
    img: "https://source.unsplash.com/random/600x400/?payment",
    role: "Senior Developer",
    desc: [
      "Provide maintenance for backend core of Twint, an e-wallet application that operate in Swiss market",
      "Technology: Java, EJB, ReactJS, Hibernate, Oracle",
    ],
  },
  {
    title: "KEY CONDO",
    date: "Feb 2021 - July 2021",
    img: "https://source.unsplash.com/random/600x400/?penthouse",
    role: "Team Lead",
    desc: [
      "Implement new website for introduce, promote condo apartment for Propzy",
      "Technology: Spring Boot, Kubernetes, AWS, React Typescript, NextJS, Postgresql",
    ],
  },
  {
    title: "DASHBOARD",
    date: "Aug 2020 - Jan 2021",
    img: "https://source.unsplash.com/random/600x400/?workplace",
    role: "Senior Java Developer",
    desc: [
      "Implement features for the core backend of Propzy's system to manage propeties and services",
      "Technology: Spring MVC, Docker, MySQL, MongoDB, PHP, Laravel, ReactJS",
    ],
  },
  {
    title: "GBST",
    date: "Oct 2018 - July 2020",
    img: "https://source.unsplash.com/random/600x400/?investment",
    role: "Developer",
    desc: [
      "Provide maintenance to GBST core backend system",
      "Technology: Spring MVC, SQL Server, BackboneJS, MarionetteJS",
    ],
  },
  {
    title: "Business Monitoring",
    date: "Apr 2016 - Mar 2018",
    img: "https://source.unsplash.com/random/600x400/?dashboard",
    role: "Developer",
    desc: [
      "Implement and managing monitoring system to provide metrics and alerts for Lazada's systems",
      "Technology: Python, Flask, Java, Spring, PHP, Zend, Prometheus, Grafana",
    ],
  },
];

export const newsData: NewsData[] = [
  {
    title: "ChatGPT Comes to Your iPhone With OpenAI's New iOS App",
    content:
      "OpenAI on Thursday dropped a ChatGPT app for iOS. The new app gives you a way to take OpenAI's AI chatbot on the go.\nThe free app works on iPhones and iPads, supports voice input and syncs your history across devices. Like using ChatGPT on a computer, the iOS app can answer questions, help with travel plans, write poems and more...",
    url: "https://www.cnet.com/tech/services-and-software/chatgpt-comes-to-your-iphone-with-openais-new-ios-app/",
    img: "https://www.cnet.com/a/img/resize/7b6d562a59a510a770ec37325bea17f9cdf81749/hub/2023/05/18/e1f84082-50e8-47b1-8e9d-d7df6492dd56/untitled-design.png?auto=webp&fit=crop&height=675&width=1200",
  },
  {
    title: "How AI is helping historians better understand our past",
    content:
      "The historians of tomorrow are using computer science to analyze how people lived centuries ago. By Moira Donovanarchive page",
    url: "https://www.technologyreview.com/2023/04/11/1071104/ai-helping-historians-analyze-past/",
    img: "https://wp.technologyreview.com/wp-content/uploads/2023/04/Hoeckel-1-final.jpeg?fit=944,1262",
  },
  {
    title: "Our quick guide to the 6 ways we can regulate AI",
    content:
      "Let us walk you through all the most (and least) promising efforts to govern AI around the world.\nBy Melissa Heikkiläarchive page",
    url: "https://www.technologyreview.com/2023/05/22/1073482/our-quick-guide-to-the-6-ways-we-can-regulate-ai/",
    img: "https://wp.technologyreview.com/wp-content/uploads/2023/05/starts-stops-regs1_1.jpeg?fit=1456,818",
  },
];

export const workData: WorkData[] = [
  {
    id: 0,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/>" +
      "Aenean commodo ligula eget dolor. Aenean massa.<br/>" +
      "<span>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</span>" +
      "<div class='code'>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</div>" +
      "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.\nInteger tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
    icon: faCode,
    img: "https://source.unsplash.com/random/600x400/?program",
    date: new Date(),
    cat: "codewars",
  },
  {
    id: 1,
    title: "Kafka",
    content:
      "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops",
    icon: faAlgolia,
    img: "https://source.unsplash.com/random/600x400/?kafka",
    date: new Date(),
    cat: "leetcode",
  },
  {
    id: 2,
    title: "Spring Web Socket",
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then",
    icon: faCloudDownload,
    img: "https://source.unsplash.com/random/600x400/?websocket",
    date: new Date("2020-02-02"),
    cat: "Spring",
  },
  {
    id: 3,
    title: "Angular Site",
    content:
      'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex Trebek\'s fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just',
    icon: faAngular,
    img: "https://source.unsplash.com/random/600x400/?frontend",
    date: new Date("2021-02-02"),
    cat: "Frontend",
  },
  {
    id: 4,
    title: "Python Code",
    content:
      "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To",
    icon: faPython,
    img: "https://source.unsplash.com/random/600x400/?backend",
    date: new Date("2021-12-02"),
    cat: "Python",
  },
];

export const guideData: GuideData[] = [
  {
    id: 0,
    title: "Use ChatGPT to Code a Full Stack App - Full Course",
    img: "https://i.ytimg.com/vi/GizsSo-EevA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHi-8hJCRyy4YPsrPIe8gJ8bAydQ",
    hover:
      "https://i.ytimg.com/an_webp/GizsSo-EevA/mqdefault_6s.webp?du=3000&sqp=CMCzsaMG&rs=AOn4CLDqcFq19ZuSy8adwXAIdEuW6B3nXg",
    video: "https://www.youtube.com/embed/GizsSo-EevA",
  },
  {
    id: 1,
    title: "Scrapy Course - Python Web Scraping for Beginners",
    img: "https://i.ytimg.com/vi/mBoX_JCKZTE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvdELFdk_EcAwtRnF3l-VwLzTt3w",
    hover:
      "https://i.ytimg.com/an_webp/mBoX_JCKZTE/mqdefault_6s.webp?du=3000&sqp=CIufsaMG&rs=AOn4CLDLkv1n5uWf8HB51HnC5uRPkqTmDg",
    video: "https://www.youtube.com/embed/mBoX_JCKZTE",
  },
  {
    id: 2,
    title: "React Router 6 - Full Course",
    img: "https://i.ytimg.com/vi/nDGA3km5He4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuhOSTyQ2sVUlAzEqPAIizPtTzbw",
    hover:
      "https://i.ytimg.com/an_webp/nDGA3km5He4/mqdefault_6s.webp?du=3000&sqp=CKavsqMG&rs=AOn4CLDcWNSgrHO0FzdLc52ZSHqV6vnTiw",
    video: "https://www.youtube.com/embed/nDGA3km5He4",
  },
  {
    id: 3,
    title: "React 3D Animation Website Tutorial with ThreeJS (WebGi) & GSAP",
    img: "https://i.ytimg.com/vi/IyBhFma4H1A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPdGEimZFyyU0coTr1KTKj7gz2gA",
    hover:
      "https://i.ytimg.com/an_webp/IyBhFma4H1A/mqdefault_6s.webp?du=3000&sqp=CODCsaMG&rs=AOn4CLCtQ20wv1BHXWFdniwZdvMf6Jpu4Q",
    video: "https://www.youtube.com/embed/IyBhFma4H1A",
  },
  {
    id: 4,
    title: "Python Platformer Game Tutorial for Beginners",
    img: "https://i.ytimg.com/vi/6gLeplbqtqg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCw8fBt3gWYJkErkpD5EcmANIm1HQ",
    hover:
      "https://i.ytimg.com/an_webp/6gLeplbqtqg/mqdefault_6s.webp?du=3000&sqp=CNigsqMG&rs=AOn4CLDywGfpyrs5O92v4n4i_99TSnnzrg",
    video: "https://www.youtube.com/embed/6gLeplbqtqg",
  },
  {
    id: 5,
    title:
      "Web Development with Python Tutorial - Flask & Dynamic Database-Driven Web Apps",
    img: "https://i.ytimg.com/vi/yBDHkveJUf4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLGLkW3R0T_WDCFh9PL6PLrkBmpw",
    hover:
      "https://i.ytimg.com/an_webp/yBDHkveJUf4/mqdefault_6s.webp?du=3000&sqp=CNjAsaMG&rs=AOn4CLAAbz6kIPUdaa1GWsTju8kdvvDxoA",
    video: "https://www.youtube.com/embed/yBDHkveJUf4",
  },
  {
    id: 6,
    title:
      "JavaScript GameDev Tutorial - Code an Animated Physics Game [Full Course]",
    img: "https://i.ytimg.com/vi/U34l-Xz5ynU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKoZ06yFaHErU5G3QNXIhZCzovCQ",
    hover:
      "https://i.ytimg.com/an_webp/U34l-Xz5ynU/mqdefault_6s.webp?du=3000&sqp=CJ7UsqMG&rs=AOn4CLCkqP6E2La758wWqbwL7KEKukibbw",
    video: "https://www.youtube.com/embed/U34l-Xz5ynU",
  },
  {
    id: 7,
    title:
      "Build a Chat Application using React, Redux, Redux-Saga, and Web Sockets - Tutorial",
    img: "https://i.ytimg.com/vi/x_fHXt9V3zQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAc-mLQ7Asiz8VDlt1rqRljg_Kq2A",
    hover:
      "https://i.ytimg.com/an_webp/x_fHXt9V3zQ/mqdefault_6s.webp?du=3000&sqp=CLy4saMG&rs=AOn4CLB0o74rgrt56D4I286ASrwwcWgh_w",
    video: "https://www.youtube.com/embed/x_fHXt9V3zQ",
  },
];
