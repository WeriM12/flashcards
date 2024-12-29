import Footer from "../components/Footer";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import '../styles/components/Main.scss';

function Add() {
    return (
        <div className="add">
            <h2>Add new flashcards</h2>
            <div className="content">
                <div className="form-container">
                    <div className="category-form">
                        <h3>Category</h3>
                        <form>
                            
                            <input type="text" placeholder="Title"></input>
                            <div className="inline">
                                <label>Color theme: </label>
                                <input type="color" value="#abcdef"></input>
                        
                            </div>
                        </form> 
                    </div>
                    <div className="card-form">
                        <h3>Card</h3>
                        <form>
                            <input type="text" placeholder="Question"></input>
                            <textarea rows="3" placeholder="Answer"></textarea>
                            <button className="submit" type="submit">Next</button>
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