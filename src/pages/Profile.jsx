import React from 'react'
import { useSelector} from 'react-redux';

export default function Profile () {
  const { account } = useSelector(state => state)
  console.log(account)
  return(
    <>
      <h1>Profile</h1>
    </>
  )
}