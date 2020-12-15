import React from 'react';

export default function AboutDog() {
  return (
    <>
      <div className="container my-5">
        <h1 className="">About Dog</h1>
        <div className="row">
          <div className="border px-5 py-3 my-3 shadow-lg" style={{ borderRadius: '10px '}}>

            <h3>10 Facts That You Must Know About Dog</h3>
            <ol>
              <li>
                <p>Dogs sense have a time</p>
                <small>It's already proven that they know the difference between a hour and five. Under certain condition, the can predict future events, such as regular walk times.</small>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}