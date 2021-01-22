import React, {Component} from 'react';
import TopTitle from "../components/TopTitle";
import NavbarPart from "../components/NavbarPart";
// import HomeCarousel from "../components/HomeCarousel";
// import News from "../components/News";
// import NewsCompany from "../components/NewsCompany";
import Complaint from "../components/Complaint";
import '../main.css';
class Home extends Component {
    render() {
        return (
            <div>

                <TopTitle/>
                <NavbarPart/>
                {/*<HomeCarousel/>*/}
                {/*<News/>*/}
                {/*<NewsCompany/>*/}
                {/*<Complaint/>*/}
                {/*<FooterPart/>*/}
            </div>
        );
    }
}

export default Home;