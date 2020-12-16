import React from 'react';
import { useHistory } from 'react-router-dom';

export default function AboutCat() {
  const history = useHistory()

  const goToLandingPage = () =>  {
    history.push('/')
  }

  return (
    <>
      <div className="container py-5 pb-3 w3-animate-opacity">
        <div className="row">
          <div className="col-8 shadow" style={{backgroundColor: '#fff', borderRadius: '15px'}}>
            <h3 className="pt-3 pb-3" style={{color: 'gray'}}>10 Facts That You Must Know About Cat</h3>
            <ol className="pl-4 pr-4" style={{textAlign: "justify"}}>
              <li>
                <p className="label-title">Cats Spend Between 30 to 50 Percent of Their Day Grooming Themselves</p>
                <p>Are you that clean? This behavior serves several purposes: It helps cats tone down their scent so they can avoid predators, it cools them down, it promotes blood flow, and it distributes natural oils evenly around their coat, allowing them to stay warm and dry. Grooming also serves as a sign of affection between two cats, and it’s thought that saliva contains enzymes that serve as a natural antibiotic for wounds.</p>
              </li>
              <li>
                <p className="label-title">A Cat's Nose Has Catnip Receptors.</p>
                <p>Ever wonder why catnip lulls felines into a trance? The herb contains several chemical compounds, including one called nepetalactone, which a cat detects with receptors in its nose and mouth. The compounds trigger the typical odd behaviors you associate with the wacky kitty weed, including sniffing, head shaking, head rubbing, and rolling around on the ground.</p>
              </li>
              <li>
                <p className="label-title">The Wealthiest Cat Is Named Blackie.</p>
                <p>A rich British antique dealer named Ben Rea loved his cat Blackie so much that when he died in 1988, he left most of his estate—totaling nearly $13 million—to the lucky (albeit likely indifferent) feline. The money was split among three cat charities, which had been instructed to keep an eye on Rea’s beloved companion. To this day, Blackie holds the Guinness World Record for Wealthiest Cat.</p>
              </li>
              <li>
                <p className="label-title">Abraham Lincoln Was a Huge Fan of Cats</p>
                <p>Still, the title of history’s craziest cat man might go to Abraham Lincoln. Mary Todd Lincoln was once asked if her husband had any hobbies. Her response? “Cats!” (He also liked dogs.)</p>
              </li>
              <li>
                <p className="label-title">Cats First Went to Space in 1963.</p>
                <p>On October 18, 1963, French scientists used a rocket to launch the first cat into space. The feline’s name was Félicette, and she made it safely to the ground following a parachute descent. Almost definitely landing on her feet.</p>
              </li>
              <li>
                <p className="label-title">The world's Oldest Living Cat is 31 Years Old.</p>
                <p>As for the world’s oldest living cat, the title belongs to a sometimes-cranky white-and-orange kitty named Rubble, who celebrated his 31st birthday in June. The average lifespan is 12-18 years.</p>
              </li>
              <li>
                <p className="label-title">Yes, Ancient Egyptians Loved Cats</p>
                <p>The ancient Egyptians revered cats, and even worshiped a half-feline goddess named Bastet. People who harmed or killed cats faced harsh legal sentences, including the death penalty.</p>
              </li>
              <li>
                <p className="label-title">In Great Britain and Japan, Black Cats Are Good Luck</p>
                <p>Black cats are considered to be a bad omen in the U.S., but in Great Britain and Japan, they’re perceived as auspicious. In the English Midlands, new brides are given black cats to bless their marriage, and the Japanese believe that black cats are good luck—particularly for single women. Meanwhile, the Germans believe that a black cat crossing your path from left to right is ominous, but if the feline switches directions and goes right to left, it’s fortuitous.</p>
              </li>
              <li>
                <p className="label-title">Cats Can't Taste Sweets</p>
                <p>Cats are genetically predisposed to not be able to taste sweets. They will likely nibble off your plate if it contains meat, but they’ll leave it alone if it’s laden with cake.</p>
              </li>
              <li>
                <p className="label-title">Most of Their Lives Are Spent Sleeping</p>
                <p>Beyond grooming all the time, according to one estimate, a cat spends nearly two-thirds of its life asleep.</p>
              </li>
            </ol>
            <small>source: <a href="https://www.mentalfloss.com/article/578211/cat-facts">Facts About Cat</a></small>
          <div className="col-12">
              <button style={{ borderRadius: '20px' }} onClick={() => goToLandingPage()} className="btn btn-8 btn-primary btn-lg my-3"><span className="fas fa-cat pr-3"></span>Adopt Us</button>
          </div>
          </div>
          <div className="col-4">
            <div className="columns" style={{paddingTop: '5px'}}>
              <div className="col-4">
                <img className="rounded shadow" src="https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/3/2016/11/pexels-photo.jpg" height="250px" style={{width: '350px', marginBottom: '50px'}} alt=""/>
              </div>
              <div className="col-4">
                <img className="rounded shadow" src="https://i2.wp.com/www.jakartaanimalaid.com/wp-content/uploads/2015/06/KITTY.jpg?resize=454%2C283" alt="" width="350px" height="250px" style={{marginBottom: '50px'}} />
              </div>
              <div className="col-4">
                <img className="rounded shadow" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Forange-kitten-955480082-2000.jpg" width="350px" height="250px" alt="" style={{marginBottom: '50px'}} />
              </div>
              <div className="col-4">
                <img className="rounded shadow" src="https://images2.minutemediacdn.com/image/upload/c_crop,h_843,w_1500,x_0,y_78/f_auto,q_auto,w_1100/v1555182242/shape/mentalfloss/501389-istock-507640348.jpg" width="350px" height="250px" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}