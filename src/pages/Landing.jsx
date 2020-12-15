import React, { useEffect } from 'react';
import { FilterDropdowns, Cards, Loading } from '../components';
import { fetchAllPets } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AboutCat } from '.';

export default function Landing() {
  const dispatch = useDispatch()
  const { petList, loading }  = useSelector(state => state)
  const history = useHistory()

  useEffect(() => {
    dispatch(fetchAllPets())
  }, [dispatch])
  
  if (loading) {
    return <Loading />
  }

  const aboutDog = () => {
    history.push('/about/dog')
  }

  const aboutCat = () => {
    history.push('/about/cat')
  }

  return(
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-3">
            <FilterDropdowns />
          </div>
          <div className="col-9 d-flex" style={{marginBottom: '50px'}}>
            <div className="row">
            <div className="col-6 text-center">
              <img src="https://images.squarespace-cdn.com/content/v1/5cd493f1185add0001e4670d/1558988155986-PY602J3JHUN77WUMVRXS/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/image-asset.jpeg?format=2500w" width="80%" height="auto" className="rounded w3-card-4" alt="baba" style={{ borderColor: '#f0199a' }} />
              <button style={{ paddingRight: '60px', paddingLeft: '60px', borderRadius: '25px' }} className="my-3 btn btn-outline-primary"><span className="fas fa-dog"></span>  ABOUT DOG</button>
            </div>
            <div className="col-6 text-center">
              <img src="https://catrescue.id/wp-content/uploads/2020/01/cat-rescue-03.jpg" width="80%" height="auto" className="rounded w3-card-4" alt="" style={{borderColor: '#f0199a'}} />
              <button style={{ paddingRight: '60px', paddingLeft: '60px', borderRadius: '25px' }} className="my-3 btn btn-outline-primary"><span className="fas fa-cat"></span>  ABOUT CAT</button>
            </div>
              <Cards petList={petList} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}