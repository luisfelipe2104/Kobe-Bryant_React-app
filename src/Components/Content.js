import React from 'react'
import iverson from '../images/iverson.jpg'
import kobe from '../images/21-1.jpg'
import kobe2 from '../images/40-1.jpg'
import kobe3 from '../images/107-1.jpg'
import kobeBack from '../images/kobeBack.webp'
import michael_jordan from '../images/michael_jordan.jpg'

function Content(props) {
  return (
    <div class="container mb-5">
        <div class="row ml-auto text-color mr-auto justify-content-center my-5">
          <div class="col-12 text-center">
          
          <h1>Dear Basketball</h1>
          <p>From the moment<br></br>
          I started rolling my dad’s tube socks<br></br>
          And shooting imaginary<br></br>
          Game-winning shots<br></br>
          In the Great Western Forum<br></br>
          I knew one thing was real:<br></br>

          I fell in love with you.<br></br>

          A love so deep I gave you my all —<br></br>
          From my mind & body<br></br>
          To my spirit & soul.<br></br>
          As a six-year-old boy<br></br>
          Deeply in love with you<br></br>
          I never saw the end of the tunnel.<br></br>
          I only saw myself<br></br></p>
          </div>

        </div>

        <div class="row top-down justify-content-center">
            <h1 class="text-center">Kobe Bryant's memorial</h1>
        </div>

        <div class="row my-5">
        <div class="card-group">
            <div class="card col-md-4">
            <img src={kobe} class="card-img-top img-fluid" alt="..."/>
            <div class="card-body">
                {/* <h5 class="card-title">Card title</h5> */}
                <blockquote class="blockquote mb-0">
                            <p class="cursive text-secondary"> "If you do not believe in yourself no one will do it for you."</p>
                            <footer class="blockquote-footer text-right">Kobe Bryant</footer>
                        </blockquote>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
            </div>

            <div class="card col-md-4">
            <img src={kobe2} class="card-img-top img-fluid" alt="..."/>
            <div class="card-body">
                {/* <h5 class="card-title">Card title</h5> */}
                <blockquote class="blockquote mb-0">
                            <p class="cursive text-secondary">“There are no limitations to the mind except those we acknowledge.”</p>
                            <footer class="blockquote-footer text-right">Napoleon Hill</footer>
                        </blockquote>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
            </div>

            <div class="card col-md-4">
            <img src={kobe3} class="card-img-top img-fluid" alt="..."/>
            <div class="card-body">
                {/* <h5 class="card-title">Card title</h5> */}
                <blockquote class="blockquote mb-0">
                            <p class="cursive text-secondary">"To be a star, you must shine your own light, follow your own path, and don't worry about darkness, for that is when the stars shine brightest." </p>
                            <footer class="blockquote-footer text-right">Napoleon Hill</footer>
                        </blockquote>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
            </div>
          
        </div>
        </div>
    </div>
  )
}

export default Content