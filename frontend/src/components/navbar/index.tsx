import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css'

export default function Navbar() {
    return (
      <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1><a href="/">DogMovie</a> </h1>
            <a href="https://github.com/MarinaDonde" target="_blank" rel="noopener noreferrer">
              <div className="dsmovie-contact-container">
                <GithubIcon />
                <p className="dsmovie-contact-link">/MarinaDonde</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
}