import React from 'react'
import { useGetAllStatsQuery } from '../../redux/api/baseApi/baseApi'

const Transaction = () => {
  const {data}=useGetAllStatsQuery(undefined)
  console.log(data)
  return (
    <div>Transaction</div>
  )
}

export default Transaction