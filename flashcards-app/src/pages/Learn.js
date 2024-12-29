
import CategoriesList from "../components/CategoriesList";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Update from "../components/Update";
import { useNavigate } from 'react-router-dom';

function Learn() {
    return (
        <div className="learn">
            <Update buttonClass={'recent-cathegory'} route="/continue-learning" title={"Continue learning..."} paragraph={"Start learning exactly where you left previously."} />
            
            <CategoriesList />
        </div>
        
    )
}

export default Learn;


// The second Update for searching through categories
//<Update buttonClass={'see-categories'} route="/categories-list" title={"Search categories"} paragraph={"Look through your categories and learn the one you're looking for."}/>