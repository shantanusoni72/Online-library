import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom'
import Fictional from './book/cs'
import SelfHelp from './book/mba'
import Doc from './book/class12'
import Contact from '../components/contact'
import About from './about'
import Carousel from './carousel'

export default function Header(props) {
  const [stateCS, setstateCS] = useState(false)
  const [stateBus, setstateBus] = useState(false)
  const [stateC, setstateC] = useState(false)
  const [stateContact, showContact] = useState(false)
  const [stateAbout, showAbout] = useState(false)
  return (<>
    {
      stateCS ? <><Header /><Fictional /> <Redirect to="/shop/book/fictional" /> </>
        : (stateBus) ? <><Header /><SelfHelp /> <Redirect to="/shop/book/selfhelp" /> </> :
          (stateC) ? <><Header /><Doc /> <Redirect to="/shop/book/doc" /> </> :
            (stateContact) ? <> <Header head="C" showHeading={true} /><Contact /> <Redirect to="/contact" /> </> :
              (stateAbout) ? <><Header head="A" showHeading={true} /><About /> <Redirect to="/about" /> </> :
                <>
                  <div class="cover">
                    <nav style={{ marginLeft: 15 }}><br />
                      <img src="https://firebasestorage.googleapis.com/v0/b/online-library-a0ca4.appspot.com/o/res%2Flogo.png?alt=media&token=be5dad7d-837b-4e10-be6f-2f7f8a1c90e7" />
                      <a href="/" class="nav-option">Home</a>
                      <a class="nav-option" href="#" onClick={() => setstateCS(true)}>Books</a>
                      <a class="nav-option" href="#" onClick={() => showContact(true)}>Contact Us</a>
                      <a class="nav-option" href="#" onClick={() => showAbout(true)}>About</a>
                    </nav>
                    {props.showHeading ?
                      (props.head == "H") ? <Carousel heading="All books in One Place" subHeading="Read every book in one place" /> : 
                      (props.head == "C") ? <Carousel heading="Contact Us" subHeading="We appriciate your feekback" /> : 
                      (props.head == "A") ? <Carousel heading="About Us" subHeading="" /> : null
                      : null

                    }
                  </div>
                  <div class="divider"></div>
                </>
    }
  </>)

}
