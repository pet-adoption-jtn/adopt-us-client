import React from 'react';

export default function Cards() {
  return(
    <>
      <div className="col-4 mb-4">
        <div className="card text-center shadow" style={{width: '16rem'}}>
          <div className="image-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/000_American_Pit_Bull_Terrier.jpg" width="500px" height="200px" className="card-img-top" alt="pics" />
              <div className="top-right"><p><i className="icon-heart shadow-lg fa fa-heart-o" style={{fontSize: '24px', fontWeight: '600', color: '#ce0d81'}}></i></p></div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Boxer</h5>
              <div style={{fontSize: '14px', display: 'flex', justifyContent: 'space-evenly'}}>
                <p>Young</p>
                <p><span className="badge" style={{backgroundColor: '#ce0d81'}}>American Dog</span></p>
              </div>
          </div>
        </div>
      </div>

      <div className="col-4">
        <div className="card text-center shadow" style={{width: '16rem'}}>
          <div className="image-container">
            <img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/26155623/Siberian-Husky-standing-outdoors-in-the-winter.jpg" width="500px" height="200px" className="card-img-top" alt="..." />
              <div className="top-right"><p><i className="icon-heart shadow fa fa-heart-o" style={{fontSize: '24px', fontWeight: '600', color: '#ce0d81'}}></i></p></div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Killer</h5>
              <div style={{fontSize: '14px', display: 'flex', justifyContent: 'space-evenly'}}>
                <p>Young</p>
                <p><span className="badge" style={{backgroundColor: '#ce0d81'}}>Siberian Husky</span></p>
              </div>
          </div>
          </div>
        </div>

      <div className="col-4">
        <div className="card text-center shadow" style={{width: '16rem'}}>
          <div className="image-container">
            <img src="https://anjingkita.com/nimages/2017/09/33340.jpg" className="card-img-top" alt="..." width="500px" height="200px" />
              <div className="top-right"><p><i className="icon-heart shadow-lg fa fa-heart-o" style={{fontSize: '24px', fontWeight: '600', color: '#ce0d81'}}></i></p></div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Lex</h5>
            <div style={{fontSize: '14px', display: 'flex', justifyContent: 'space-evenly'}}>
              <p>Young</p>
              <p><span className="badge" style={{backgroundColor: '#ce0d81'}}>American Pitbull</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-4">
        <div className="card text-center shadow" style={{width: '16rem'}}>
          <div className="image-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Golden_Retriever_Carlos_%2810581910556%29.jpg/1200px-Golden_Retriever_Carlos_%2810581910556%29.jpg" className="card-img-top" alt="..." width="500px" height="200px" />
              <div className="top-right"><p><i className="icon-heart shadow fa fa-heart-o" style={{fontSize: '24px', fontWeight: '600', color: '#ce0d81'}}></i></p></div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Yawn</h5>
            <div style={{fontSize: '14px', display: 'flex', justifyContent: 'space-evenly'}}>
              <p>Young</p>
              <p><span className="badge" style={{backgroundColor: '#ce0d81'}}>Golden Retriever</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-4">
        <div className="card text-center shadow" style={{width: '16rem'}}>
          <div className="image-container">
            <img src="https://www.thesprucepets.com/thmb/VJpRmcCyJCRbVmox-yx3FqUJWZ8=/1000x1000/smart/filters:no_upscale()/breed_profile_husky_1118000_hero_690-0158e427a4734e0fae59e2e91a7fe6e4.jpg" className="card-img-top" alt="..." width="500px" height="200px" />
              <div className="top-right"><p><i className="icon-heart shadow fa fa-heart-o" style={{fontSize: '24px', fontWeight: '600', color: '#ce0d81'}}></i></p></div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Karlx</h5>
            <div style={{fontSize: '14px', display: 'flex', justifyContent: 'space-evenly'}}>
              <p>Young</p>
              <p><span className="badge" style={{backgroundColor: '#ce0d81'}}>Siberian Husky</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-4">
        <div className="card text-center shadow" style={{width: '16rem'}}>
          <div className="image-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Golden_Retriever_with_tennis_ball.jpg/1200px-Golden_Retriever_with_tennis_ball.jpg" className="card-img-top" alt="..." width="500px" height="200px" />
            <div className="top-right"><p><i className="icon-heart shadow fa fa-heart-o" style={{fontSize: '24px', fontWeight: '600', color: '#ce0d81'}}></i></p></div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Dooms</h5>
            <div style={{fontSize: '14px', display: 'flex', justifyContent: 'space-evenly'}}>
              <p>Young</p>
              <p><span className="badge" style={{backgroundColor: '#ce0d81'}}>Golden Retriever</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}