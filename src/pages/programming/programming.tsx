import {
  faAlgolia,
  faAngular,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faCloudDownload, faCode } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import Header from "../../components/header/header.lazy";
import News from "../../components/news/news.lazy";
import Work from "../../components/work/work.lazy";
import NewsData from "../../interface/news";
import WorkData from "../../interface/work";
import { programmingMenu } from "../../menu-items";
import "./programming.scss";

interface ProgrammingProps {}

const newsData: NewsData[] = [
  {
    title: "ChatGPT Comes to Your iPhone With OpenAI's New iOS App",
    content:
      "OpenAI on Thursday dropped a ChatGPT app for iOS. The new app gives you a way to take OpenAI's AI chatbot on the go.\nThe free app works on iPhones and iPads, supports voice input and syncs your history across devices. Like using ChatGPT on a computer, the iOS app can answer questions, help with travel plans, write poems and more...",
    url: "https://www.cnet.com/tech/services-and-software/chatgpt-comes-to-your-iphone-with-openais-new-ios-app/",
    img: "https://www.cnet.com/a/img/resize/7b6d562a59a510a770ec37325bea17f9cdf81749/hub/2023/05/18/e1f84082-50e8-47b1-8e9d-d7df6492dd56/untitled-design.png?auto=webp&fit=crop&height=675&width=1200",
  },
];

const workData: WorkData[] = [
  {
    id: 0,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.\nInteger tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
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

const Programming: FC<ProgrammingProps> = () => (
  <div data-testid="Programming">
    <Header items={programmingMenu} />
    <News news={newsData} />
    <Work works={workData} />
  </div>
);

export default Programming;
