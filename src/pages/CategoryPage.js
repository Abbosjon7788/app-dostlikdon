import React, {Component} from 'react';
import TopTitle from "../components/TopTitle";
import NavbarPart from "../components/NavbarPart";
import News from "../components/News";
import Complaint from "../components/Complaint";
import FooterPart from "../components/FooterPart";

class CategoryPage extends Component {
    render() {
        return (
            <div>
                <TopTitle/>
                <NavbarPart/>

                <News/>


                <Complaint/>
                <FooterPart/>
            </div>
        );
    }
}

export default CategoryPage;