import CategoriesList from "../components/CategoriesList";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

import '../styles/components/pages-styles/Progress.scss';
import '../styles/components/Main.scss';

function Progress() {
    return (
        <div className="progress">
            <h2>Progress page</h2>

            <div className="content">
                <CategoriesList title={"Your categories"} />

                <div className="stats-container">
                    <div className="stat">
                        <h3>Total cards learned: </h3>
                        <p className="stat-data">1500</p>
                    </div>
                    <div className="stat">
                        <h3>Average accuracy: </h3>
                        <p className="stat-data">100</p>
                    </div>
                    <div className="stat">
                        <h3>Time spent studying: </h3>
                        <p className="stat-data">900</p>
                    </div>
                </div>
            </div>
            
            
        </div>
        
    )
}

export default Progress;