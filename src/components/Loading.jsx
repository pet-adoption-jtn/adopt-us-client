import React from 'react'

export default function Loading () {
  return (
    <>
    <div className="d-flex justify-content-center" style={{height: '100vh'}}>
      <div className="align-self-center">
        <div className="spinner-grow text-dark" role="status" style={{width: '5em', height: '5em'}}>
        </div>
      </div>
    </div>
    </>
  )
}