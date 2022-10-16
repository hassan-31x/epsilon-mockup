import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './routes/Home.js';
import Modules from './routes/Modules.js';
import Register from './routes/Register.js';
import Error from './routes/Error.js';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/modules' element={<Modules />}/>
          <Route path='/register' element={<Register />}/>

          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
