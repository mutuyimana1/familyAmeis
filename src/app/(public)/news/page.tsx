import HeroSection from '@/components/HeroSection'
import NewsGrid from '@/components/NewsGrid'
import VideoSection from '@/components/VideoSection'
import WeeklyTopNews from '@/components/WeeklyTopNews'
import React from 'react'

const News = () => {
  return (
    <div className='px-5 md:px-52 pt-20'>
     <div className="bg-gray-100 py-2 px-4 flex items-center justify-between border-b">
      <span className="bg-red-600 text-white text-xs px-3 py-1 rounded">TRENDING NOW</span>
      <p className="text-sm text-gray-600 ml-3">Rem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      {/* <TrendingBar /> */}
     
    </div>
     <HeroSection />
      <NewsGrid />
      <WeeklyTopNews />
      <VideoSection />
    </div>
  
  )
}

export default News