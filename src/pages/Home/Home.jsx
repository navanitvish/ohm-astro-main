import React from 'react'
import AstroServices from './AstroServices'
import AnytimeAstro from './AnytimeAstro';
import LiveSessions from './LiveSessions';
import AstrologerCarousel from './AstrologerCarousel';
import PujaSection from './PujaSection';
import OverlappingVideos from './OverlappingVideos';
import CustomerStories from './CustomerStories';
import AsSeenOn from './AsSeenOn';
import BlogSection from './BlogSection';
import AstrologySection from './AstrologySection';
import WhyAnyTimeAstro from './WhyAnyTimeAstro';

const Home = () => {
  return (
    <div>
      <AstroServices/>
      <AnytimeAstro/>
      <LiveSessions/>
      <AstrologerCarousel/>
      <PujaSection/>
      {/* <OverlappingVideos/>
      <CustomerStories/> */}
      {/* <AsSeenOn/> */}
      <BlogSection/>
      <AstrologySection/>
      <WhyAnyTimeAstro/>
    </div>
  )
}

export default Home
