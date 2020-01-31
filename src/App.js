import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Boxes from "./components/Boxes";
import Partenaires from "./components/Partenaires";
import Pres from "./components/Pres";
import Card from "./components/Card";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer"

function App() {
  const menuNav = [
    { img: "https://www.docplanner.com/img/logo-default-group-en.svg?v=1"},
    { title: "About us" },
    { title: "career" },
    {
      title: "Drop down",
      drop: ["Action", "Another action", "Something else here"]
    }
  ];

  const pres = [
 
    {desc: `We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.`},
    {desc: `We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.`}
  ]

  const boxes = [
    {myClass:"boxes green-box",
      title: "For patients",
      subTitle:
        "Find a doctor, book a visit and solve any health-related doubt",
      select: ["Argentina", "Australia"],
      pic: "https://www.docplanner.com/img/screen-marketplace@2x.png"
    },
    {
      myClass:"boxes blue-box",
      title: "For doctors",
      subTitle: "Save time managing visits and cut no-shows by half",
   
      pic: "https://www.docplanner.com/img/screen-saas@2x.png",class:""
    }
  ];

  const card = [
    {
      icon: 'https://www.docplanner.com/img/flag@2x.png',
      title: 'Leader in 10 countries',
      desc: 'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'
    },
    {
      icon: 'https://www.docplanner.com/img/visits@2x.png',
      title: '1.5 million appointments',
      desc: 'booked last month'
    },
    {
      icon: 'https://www.docplanner.com/img/patients@2x.png',
      title: '30 million unique patients',
      desc: 'visit us every month'
    },
    {
      icon: 'https://www.docplanner.com/img/doctors@2x.png',
      title: '2 million active doctors',
      desc: 'trust in our solutions'
    }
  ]
  
  const reservation = [
    {
      img: 'https://www.docplanner.com/images/warsaw@2x.png',
      ville: 'Warsaw',
      btn: 'see openings'
    },
    {
      img: 'https://www.docplanner.com/images/barcelona@2x.png',
      ville: 'Barcelona',
      btn: 'see openings'
    },
    {
      img: 'https://www.docplanner.com/images/istanbul@2x.png',
      ville: 'Istanbul',
      btn: 'see openings'
    },
    {
      img: 'https://www.docplanner.com/images/rome@2x.png',
      ville: 'Rome',
      btn: 'see openings'
    },
    {
      img: 'https://www.docplanner.com/images/mexico-city@2x.png',
      ville: 'Mexico City',
      btn: 'see openings'
    },
    {
      img: 'https://www.docplanner.com/images/curitiba@2x.png',
      ville: 'Curitiba',
      btn: 'see openings'
    }
  ]

  return (
    <div className="App">
      <div className="container">

        <Nav menuNav={menuNav} />

        <Pres pres={pres} />

        <Boxes boxes={boxes} />

        <Partenaires /> 
      </div>

        <Card card={card} >
          <div className="card-desc">
            <h2>The world's</h2>
            <p>biggest healthcare platform
              We work from 6 offices all over the world, 
              bringing Docplanner Group to life in almost 20 countries.</p>
          </div>
        </Card>

        <Reservation  reservation={reservation}/>

        <Footer />

      </div>
  );
}

export default App;
