import React, { useState, useEffect } from 'react'
import Categories from './Categories/Categories';
import Events from './Events/Events';
import Venues from './Venues/Venues';
import Newsletter from './Newsletter/Newsletter';
import Speakers from './Speakers/Speakers';
import Posts from './Posts/Posts';
import Contact from './Contact/Contact';
import JsonData from '../../data/HomeData.json'
import HomeBanner from './HomeBanner/HomeBanner'

function Home() {

  const [PageData, setPageData] = useState({})
  useEffect(() => {
    setPageData(JsonData);
  }, [])

  return (
    <>
      <HomeBanner />
      <Categories data={PageData.Categories} />
      <Events data={PageData.Events} />

      <Venues data={PageData.Venues} />
      <Newsletter />
      <Speakers data={PageData.Speakers} />
      <Posts data={PageData.Posts} />
      <Contact />
    </>
  )
}

export default Home;
