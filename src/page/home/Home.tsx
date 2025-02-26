import React from 'react'
import Banner from '../../components/Banner'
/* import FeaturedBikes from '../../components/FeaturedBikes' */
import Testimonials from '../../components/Testimonials'
import { AllBicyclePage } from '../allBicyclePage/bicycle-Card'
import Card from '../../components/home.card'
import { useAppSelector } from '../../redux/app/hook'
import { selectCurrentUser } from '../../redux/auth/authSlice'

const Home = () => {
      const user = useAppSelector(selectCurrentUser);
    console.log(user)
  return (
    <div>
<Banner></Banner>
{/* <FeaturedBikes></FeaturedBikes> */}
<Card></Card>
<Testimonials></Testimonials>

    </div>
  )
}

export default Home