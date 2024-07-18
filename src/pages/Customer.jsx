import React from 'react'
import Layout from '../components/Layout'
import { HiOutlineClock } from "react-icons/hi";

const Customer = () => {
  return (
    <>
      <Layout>
      <div className="flex flex-col text-gray-400 justify-center items-center h-lvh text-center">
        <HiOutlineClock size="60"/>
        <h2 className="text-2xl mb-2">Coming Soon</h2>
        <p>Please wait for the next update</p>
      </div>
      </Layout>
    </>
  )
}

export default Customer