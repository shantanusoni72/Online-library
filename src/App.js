import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import Registor from './components/registor';
import { BrowserRouter as Router, Link, Route, Redirect } from "react-router-dom";
import Container from './components/card_external';
import About from './components/about'
import Contact from './components/contact';
import Section2 from './components/Section2'; //Problem here

function App() {
  return (
    <>
    <Router>
        <Route path="/" render={()=>
        <><Header head="H" showHeading={true} />
        </>}></Route>

        <Route path="/login" render={()=>
        <> <Login />
        </>}></Route>

        <Route path="/register" render={()=>
        <> <Registor />
        </>}></Route>

        <Route path="/shop/book/fictional" render={()=>
        <> 
        </>}></Route>

        <Route path="/shop/book/selfhelp" render={()=>
        <>
        </>}></Route>

        <Route path="/contactus" render={()=>
        <> <Header value={true} /> < Contact/>
        </>}></Route>

        <Route path="/shop/book/doc" render={()=>
        <>
        </>}></Route>
        <Footer />

        <Route path="/shop/book/contact" render={()=>
        <> <Container /> <Footer />
        </>}></Route>

        <Route path="/shop/book/about" render={()=>
        <> <About /> <Footer />
        </>}></Route>
      </Router>
      <Section2 />
    </>
  );
}

export default App;
