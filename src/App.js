import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
// import About from'./components/About';
import Footer from './components/Footer'
import Services from './components/Services.jsx'
import Contact from './components/Contact'
import Approach from './components/Approach'
import Portfolio from './components/Portfolio'
function App() {


  window.onload = function () {
    const btn = document.querySelector('#btnnn')
    const divv = document.querySelector('#div')
    const body2 = document.body
    console.log(body2)

    divv.onclick = function () {
      body2.classList.toggle('dark-mode')
      btn.classList.toggle('fa-sun')
      divv.classList.toggle('lightmode')
    }
  }

  const aa=document.querySelector( '.js-input' )
if (aa){
  aa.addEventListener('keyup',()=> {
    if(aa(this).value ) {
       aa(this).classList.add('not-empty');
    } else {
       aa(this).classList.remove('not-empty');
    }
  });}
 
  

  return (
    <Router >
      
      <Header />
      <Home />
      <Services />
      <Approach/>
      <Portfolio/>
      <Contact/>
      <Footer />
    </Router>
  )
}

export default App
