import Footer from "../components/Footer";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import '../styles/components/Main.scss';

function Add() {
    return (
        <div className="add">
            <h1>Add page</h1>
            <div className="content">
                <div>
                    <div className="category-form">
                        <form>
                            <input type="text" placeholder="Category title"></input>
                            <div className="inline">
                                <label>Color theme: </label>
                                <input type="color"></input>
                        
                            </div>
                        </form> 
                    </div>
                    <div className="card-form">
                        <form>
                            <input type="text" placeholder="Card question"></input>
                            <textarea rows="3" placeholder="Card answer"></textarea>
                            <button type="submit">Next</button>
                        </form>
                    </div>
                </div>
                
                
                
                <div className="card-list">
                    <div className="card">Card 1</div>
                    <div className="card">Card 2</div>
                    <div className="card">Card 3</div>
                    <div className="card">Card 4</div>
                    <div className="card">Card 5</div>
                    <div className="card">Card 6</div>
                    <div className="card">Card 7</div>
                    <div className="card">Card 8</div>
                    <div className="card">Card 9</div>
                    <div className="card">Card 10</div>
                </div>
                
            </div>
            
            
        </div>
        

        
    )
}

export default Add;