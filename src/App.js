import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer";
import MyInfo from './components/MyInfo';
import Header from './components/header';
import MainContent from './components/mainContent';
import TimeOfDay from './components/timeOFDay';
import ContactCard from './components/contactCard';
import Jokes from './components/jokes';
import jokesData from './components/jokesData';
import Product from "./components/Product";
import productsData from "./components/vschoolProduct";
import DemoClass from "./components/demoClass";
import DemoClass2 from "./components/demoClass2";
import DemoState from "./components/demoState";
import DemoState2 from "./components/demoState2";
import DemoState3 from "./components/demoState3";
import DemoEventHandeling from "./components/demoEventHandeling";
import DemoHandleClick from "./components/demoHandleClick";
import DemoConditionalRendering from "./components/demoConditionalRendering";
import DemoConditionalRenderingButton from "./components/demoConditionalRenderingButton";
import DemoFetchDataAPI from "./components/demoFetchDataAPI";
import DemoReactForms1 from "./components/demoReactForms1";
import DemoReactFormPractice from "./components/demoReactFormPractice";
import Header2 from './components/header2';
import MemeGenerator from "./components/memeGenerator";
import SpotifyCover from './components/spotifyCover';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';


function App() {

  const productComponents = productsData.map(item => <Product key={item.id} product={item} />)

  const jokeComponents = jokesData.map(joke => <Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const doubled = nums.map(function (num) {
    return num * 2;
  });

  console.log(doubled);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex


  return (
    <div>
      <Header />
      <TimeOfDay />
      <div>
        <MyInfo />
      </div>
      <MainContent />
      <div className="contacts">
        <ContactCard
          contact={{
            name: "Jason Bakker",
            imgUrl: "https://pbs.twimg.com/profile_images/467606677077131264/fKFCcvH0_400x400.jpeg",
            phone: "+310123456789",
            email: "jasonbakker084@gmail.com"
          }} />
        <ContactCard
          contact={{
            name: "Lenneke van der Waals",
            imgUrl: "https://media.gettyimages.com/photos/closeup-portrait-of-young-woman-drinking-coffee-picture-id717372863?s=2048x2048",
            phone: "+310234567890",
            email: "lennekevdwaals@gmail.com"
          }} />
        <ContactCard
          contact={{
            name: "Jason Bakker",
            imgUrl: "https://pbs.twimg.com/profile_images/467606677077131264/fKFCcvH0_400x400.jpeg",
            phone: "+310123456789",
            email: "jasonbakker084@gmail.com"
          }} />
      </div>
      <div>
        {jokeComponents}
      </div>
      <div>
        {productComponents}
      </div>
      <DemoClass />
      <DemoClass2 />
      <DemoState />
      <DemoState2 />
      <DemoState3 />
      <DemoEventHandeling />
      <DemoHandleClick />
      <DemoConditionalRendering />
      <DemoConditionalRenderingButton />
      <DemoFetchDataAPI />
      <DemoReactForms1 />
      <DemoReactFormPractice />
      <br />
      <Header2 />
      <MemeGenerator />
      <div className="spotifyCard">
        <StyleRoot>
          <Coverflow width="961" height="900"
            displayQuantityOfSide={1}
            navigation={false}
            enableScroll={true}
          >
            <SpotifyCover
              cover={{
                imgUrl: "https://m.media-amazon.com/images/I/71Qw9cuZG6L._SS500_.jpg",
                album: "Two Suns",
                artist: "Andrew ApplePie",
                text: "2017"
              }} />
            <SpotifyCover
              cover={{
                imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81qR3UEqEzL._SL1200_.jpg",
                album: "Tranquility Base Hotel & Casino",
                artist: "Arctic Monkeys",
                text: "2018"
              }} />
            <SpotifyCover
              cover={{
                imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71vIw1W2XaL._SL1500_.jpg",
                album: "Nashville Skyline",
                artist: "Bob Dylan",
                text: "1969"
              }} />
            <SpotifyCover
              cover={{
                imgUrl: "https://images-na.ssl-images-amazon.com/images/I/41AvzhL0sxL.jpg",
                album: "For the Love of the Game",
                artist: "Natural Child",
                text: "2012"
              }} />
          </Coverflow>,
  {document.querySelector('.content')}
        </StyleRoot>
      </div>
      <Footer />
    </div>
  );
}

export default App;