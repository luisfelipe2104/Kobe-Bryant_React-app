import React from 'react'
import logo from '../images/logo.png' 
import logo2 from '../images/logo2.png' 
import logo4 from '../images/logo4.png'

function Header() {
  return (
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light orange">
          <a class="navbar-brand" href="#"><img class="img-fluid logo" src={logo}/></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="conteudoNavbarSuportado">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link h5 text-secondary" href="#">Home <span class="sr-only">(página atual)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link h5 text-secondary" href="https://www.nba.com">Nba <span class="sr-only">(página atual)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link h5 text-secondary" href="#">About <span class="sr-only">(página atual)</span></a>
              </li>
              
            </ul>
          </div>
        </nav>     

        {/* <div class="row justify-content-center">
          <img class="img-fluid w-25" src={logo2} />
        </div> */}
    </div>
  )
}

export default Header

// rfce