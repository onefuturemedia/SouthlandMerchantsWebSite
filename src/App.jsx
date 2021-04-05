import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Partners } from './components/partners'
import { About } from './components/about'
import { Growers } from './components/growers'
import { BlogHeader } from './components/blogheader'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      {/* <Services data={landingPageData.Services} /> */}
      {/* usar o abaixo pra fazer um link pro blog? */}
      {/* <Gallery />  */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Growers data={landingPageData.Growers} />
      {/* <Features data={landingPageData.Features} /> */}
      <Partners data={landingPageData.Features} />
      {/* <Team data={landingPageData.Team} /> */}
      <BlogHeader /> 
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
