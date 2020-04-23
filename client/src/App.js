import React from 'react';
import './App.css';
import ShopForm from './components/ShopForm';
import ShopList from './components/ShopList';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <ShopForm />
     <hr />
     <ShopList />
    </div>
  );
}

export default App;
