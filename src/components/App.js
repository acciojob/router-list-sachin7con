//SGN
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import './../styles/App.css';

const items = [
  { id: 1, name: 'Item 1', description: 'Description of Item 1.' },
  { id: 2, name:'Item 2', description:'Description of Item 2.'},
  {id: 3,name: 'Item 3', description: 'Description of Item 3'},
];


const ItemList =() => {
      return(
        <div>
          <nav>
            <div>
               <h1>Item List</h1>
               <ul>
                {items.map((item) => 
                <li key={item.id}>
                  <Link to={`/item/${item.id}`}>{item.name}</Link>
                </li> )}
                </ul> 
            </div>
            
          </nav>
        </div>
      )
}

const ItemDetail =() => {
      let {id} = useParams();
      const item = items.find(item => item.id === parseInt(id));
      
      if(!item){
        return <p>Item not found.</p>
      }

      return(
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <Link to="/">Back to List</Link>
        </div>
      )
}

const App = () => {
  return (
    <div>
        {/*ONS Do not remove the main div */}
        <Router>
          
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/item/:id" element={<ItemDetail />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
