import { Component } from "react";
import './Home.css';
import { Link } from "react-router-dom";


class Home extends Component {

    render() {
        return (
            <body>
                <header>
                    <h1>Welcome to my facebook account</h1>,
                    <Link to="/">
                        <button className="btn btn-primary" routerLink="logout">Logout</button>
                    </Link>
                </header>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, consequuntur ipsum commodi adipisci iure
                    esse totam, nostrum quasi itaque, non modi sint fugit unde doloremque in maiores amet omnis iste!
                    Maxime tempora, beatae repudiandae, labore iure tempore veritatis, maiores cumque dolore commodi mollitia ea eum
                    non voluptates sed. Ex inventore necessitatibus molestias doloribus ratione laborum adipisci iusto dolore id ad?
                    Vitae accusamus facere porro ex eum impedit maxime quaerat? Eveniet mollitia rem impedit aliquid quia aliquam
                    eligendi nihil ea animi! Sint voluptatem voluptas voluptates nemo, recusandae deleniti ab impedit
                    exercitationem?
                    Modi consectetur, sunt sint a, quam doloribus, veritatis incidunt quo ea nam voluptatum nihil debitis sit
                    quidem. Consequuntur illum debitis, autem cumque enim similique at. Voluptates, quam! Tempore, alias modi!
                    Consequuntur, est. Voluptates maxime quaerat minima pariatur impedit inventore nihil fugiat facilis dolor
                    doloremque labore eligendi saepe earum incidunt, debitis exercitationem ut hic! Ea eveniet quas omnis quos, eius
                    atque.
                </p>
            </body>
        );
    }

}

export default Home;