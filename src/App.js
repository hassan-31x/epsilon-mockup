import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './routes/Home.js';
import Modules from './routes/Modules.js';
import Request from './routes/Request.js';
import Register from './routes/Register.js';
import Another from './routes/Another.js';
import Another2 from './routes/Another2.js';
import Loader from './components/Loader.js';
import Xd from './routes/Xd.js';
import Error from './routes/Error.js';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/modules' element={<Modules />}/>
          <Route path='/request' element={<Request />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/another' element={<Another />}/>
          <Route path='/another2' element={<Another2 />}/>
          <Route path='/xd' element={<Xd />}/>
          <Route path='/loader' element={<Loader />}/>

          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
