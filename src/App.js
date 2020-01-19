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
      <Footer />
    </div>
  );
}

export default App;