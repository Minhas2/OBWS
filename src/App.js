import React, { useEffect } from 'react'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import Branding from './components/Branding'
import ScriptSidebySide from './components/ScriptSidebySide'
import Ambious from './components/Ambious'
import Thriving from './components/Thriving'
import LastSide from './components/LastSide'
import Faq from './components/Faqs'
import Orange from './components/Orange'
import Hundred from './components/Hundred'
import PackageCards from './components/PackageCards'
import Footer from './components/Footer'
import Mandy from './components/Mandy'
import MarketPlaceCards from './components/MarketPlaceCards'
import ResourceMembershipCards from './components/ResourceMembershipCards'
import WorkShops from './components/WorkShops'
import Anthony from './components/Anthony'
import Recap from './components/Recap'
import Grey from './components/Grey'
import Featured from './components/Featured'
import Gained from './components/Gained'
import Connection from './components/Connection'
import Introducing from './components/Introducing'
import Testimonials from './components/Testimonials'
import Figure from './components/Figure'
import GrowthCard from './components/GrowthCard'
import ReactPixel from 'react-facebook-pixel';


const App = () => {

  
useEffect(() => {
  const pixelId = '708486886190281'; // Replace with your actual Pixel ID
  ReactPixel.init(pixelId);
  ReactPixel.pageView(); // For tracking page views
}, []);


  return (
    <>
      <TopBar />
      <Hero />
      <Branding />
      <ScriptSidebySide />
      <Orange />
      <Hundred />
      <div className="ambiousbg">
        <Ambious />
        <Introducing />
      </div>

      <PackageCards />
      <div className='sidebysidebg'>

        <MarketPlaceCards />
        <ResourceMembershipCards />
        <GrowthCard />
      </div>
      <Testimonials />
      <Thriving />
      <Figure />
      <Mandy />


      <WorkShops />
      <Anthony />
      <Grey />
      <Featured />
      <Gained />
      <Connection />
      <Recap />
      <LastSide />
      <Faq />
      <Footer />
    </>
  )
}

export default App