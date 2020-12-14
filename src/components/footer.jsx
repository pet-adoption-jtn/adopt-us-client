import React from 'react'
import { useHistory } from 'react-router-dom'
import '../style/css/fotter.css'

function FooterComponent(props) {
  const history = useHistory()

  return (
    <div style={{ backgroundColor: '#B43D66' }} className="boxFooter text-center p-3 d-flex justify-content-between">
      <div>
        <img style={{ height: '30px', marginLeft: '10px' }} src={'./logoName.png'} alt={'logo Adopt.Us'}></img>
      </div>
      <div>
        <h5 className="mt-1 text-light my-0">©2020 Adopt.Us</h5>
      </div>
      <div>
        <img style={{ width: '30px', marginRight: '10px' }} src={'https://image.flaticon.com/icons/png/512/25/25231.png'} alt={'github'}></img>
      </div>
    </div>
  )
}

export default FooterComponent