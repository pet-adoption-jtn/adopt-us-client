import React from 'react'
import '../style/css/fotter.css'

function FooterComponent(props) {

  return (
    <div className="posisiFooter">
      <div className="bg-light text-center p-3 d-flex justify-content-between">
        <div>
          <img style={{ height: '30px', marginLeft: '10px' }} src={'./logoName.png'} alt={'logo Adopt.Us'}></img>
        </div>
        <div>
          <h6 style={{ color: '#B43D66' }} className="align-middle mt-2 text-dark">©2020 Adopt.Us</h6>
        </div>
        <div>
          <img style={{ width: '30px', marginRight: '10px' }} src={'https://image.flaticon.com/icons/png/512/25/25231.png'} alt={'github'}></img>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent