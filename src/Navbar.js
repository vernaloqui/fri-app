// Link - to : similar with anchor tag and href attribute change all a to link and href to to
import { Link } from 'react-router-dom';

function Navbar(){

    return(
        <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/home">The App</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/features">Features</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/pricing">Pricing</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar;