import React from 'react'
import Footer from './components/Footer/footer'
import Header from './components/Header'
import Travel from './pages/Travel/Travel'
import Party from './pages/Categories/Partypages/Party'
import Home from './pages/Home/Home'
import Newsletter from './pages/Home/Newsletter/Newsletter';
export default function App() {
  return (
    <>
      <Header />
      {/* <Home/> */}
      {/* <Travel /> */}
      <Party />
      {/* <Newsletter /> */}
      <Footer />
    </>
  )
}
