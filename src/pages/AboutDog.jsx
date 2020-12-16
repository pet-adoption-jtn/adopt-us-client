import React from 'react';
import { useHistory } from 'react-router-dom';

export default function AboutDog() {
  const history = useHistory()

  const goToLandingPage = () => {
    history.push('/')
  }
  return (
    <>
      <div className="container py-5 pb-3 w3-animate-opacity">
        <div className="row">
          <div className="col-8 shadow" style={{backgroundColor: '#fff', borderRadius: '15px'}}>
            <h3 className="pt-3 pb-3" style={{color: 'gray'}}>10 Facts That You Must Know About Dog</h3>
            <ol className="pl-4 pr-4" style={{textAlign: "justify"}}>
              <li>
                <p className="label-title">Dogs sense have a time</p>
                <p>It's already proven that they know the difference between a hour and five. Under certain condition, the can predict future events, such as regular walk times.</p>
              </li>
              <li>
                <p className="label-title">Dog is as smart as two-year old</p>
                <p>Have you ever wonder why children around this age seem to have a special bond with family dog? It could be because they speak same language. In fact, roughly 250 words and gestures.</p>
              </li>
              <li>
                <p className="label-title">Dog have jealousy</p>
                <p>Dog can genuenly get jealous when they see you display affection for another creature according to study at UCSD.</p>
              </li>
              <li>
                <p className="label-title">Stray Dog</p>
                <p>Do you know in Russia, stray dogs have learned how to ride the complex subway system and get off at specific stops in search of food.</p>
              </li>
              <li>
                <p className="label-title">Dog can smell your feelings</p>
                <p>Dog's sense of smell is approximately 100,000 times better than humans. It shouldn't be shocking that they can in fact. Dog can smell things such a fear. Dog can protect human when human is fearful, they perspire, and a dog is easily able to pick up on this change.</p>
              </li>
              <li>
                <p className="label-title">Dalmantion</p>
                <p>Do you know that dalmantion puppy is born completely white ? Dalmantions develop their spots as they get older.</p>
              </li>
              <li>
                <p className="label-title">Petting A Dog</p>
                <p>When human is petting a dog, it can actually benefit human physical and mental health. Studies have shown that petting a dog for 15 minutes can lower blood pressure by 10%, can help lower feelings of stress, depression, and combat loneliness.</p>
              </li>
              <li>
                <p className="label-title">Why dogs have wet noses ?</p>
                <p>Because it helps dog to absorb scent chemicals</p>
              </li>
              <li>
                <p className="label-title">The oldest dog is ever live</p>
                <p>Do you know about Bluey ? Bluey was a dog lived in Australia. Bluey lived to be 29 years 5 months old. According to Guinness Book of World Record as the oldest dog to ever live.</p>
              </li>
              <li>
                <p className="label-title">Dog can detect cancer</p>
                <p>With a good training dog can detect cancer in human body. Cancerous cells release different metabolic waste products than healthy cells in the human body. Dogs may even be able to sniff out cancer cells simply through smelling someone’s breath.</p>
              </li>
            </ol>
            <small>source: <a href="https://www.thedrakecenter.com/services/dogs/blog/23-amazing-facts-about-dogs-you-probably-didnt-know">23 Amazing Facts About Dog</a></small>
            <div className="col-12">
              <button style={{ borderRadius: '20px' }} onClick={() => goToLandingPage()} className="btn btn-8 btn-primary btn-lg my-3"><span className="fas fa-dog pr-3"></span>Adopt Us</button>
          </div>
          </div>
          <div className="col-4">
            <div className="columns" style={{paddingTop: '5px'}}>
              <div className="col-4">
                <img className="rounded shadow" src="https://www.rd.com/wp-content/uploads/2019/01/shutterstock_673465372.jpg" style={{width: '350px', marginBottom: '50px'}} alt="dog"/>
              </div>
              <div className="col-4">
                <img className="rounded shadow" src="https://lh3.googleusercontent.com/proxy/HTWVBB5xjLxPGP5uW9mfGcqLRYirbMf-ojezB9SMGlM6xkGOsdRkvOeYNYBp56hjiwa5m3GiOXNadgSGe-gZcE9ITD48ieqMb4PMoKkJ" alt="" width="350px" style={{marginBottom: '50px'}} />
              </div>
              <div className="col-4">
                <img className="rounded shadow" src="https://filmdaily.co/wp-content/uploads/2020/05/dog-videos-lede-1300x868.jpg" width="350px" alt="dog" style={{marginBottom: '50px'}} />
              </div>
              <div className="col-4">
                <img className="rounded shadow" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16B90/production/_107427039_gettyimages-636475496.jpg" width="350px" alt="dog"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}