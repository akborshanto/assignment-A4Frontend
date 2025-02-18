import React from 'react'
import Banner from '../../components/Banner'
/* import FeaturedBikes from '../../components/FeaturedBikes' */
import Testimonials from '../../components/Testimonials'
import { AllBicyclePage } from '../allBicyclePage/bicycle-Card'

const Home = () => {
  return (
    <div>
<Banner></Banner>
{/* <FeaturedBikes></FeaturedBikes> */}
<AllBicyclePage></AllBicyclePage>
<Testimonials></Testimonials>

    </div>
  )
}

export default Home