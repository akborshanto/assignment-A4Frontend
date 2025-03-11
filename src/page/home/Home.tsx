import React from 'react'
import Banner from '../../components/Banner'
/* import FeaturedBikes from '../../components/FeaturedBikes' */

import { AllBicyclePage } from '../allBicyclePage/bicycle-Card'
import Card from '../../components/home.card'
import { useAppSelector } from '../../redux/app/hook'
import { selectCurrentUser } from '../../redux/auth/authSlice'
import { Testimonials } from '../../components/Testimonials'
import { SubscribeForm } from '../../components/subscribeform'

const Home = () => {
      const user = useAppSelector(selectCurrentUser);
    console.log(user)
  return (
    <div>
<Banner></Banner>
{/* <FeaturedBikes></FeaturedBikes> */}
<Card></Card>
<Testimonials></Testimonials>
<SubscribeForm></SubscribeForm>
    </div>
  )
}

export default Home