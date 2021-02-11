import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import Header from './partials/Header';
import Content from './pages/Content';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Content />
        </main>
      </div>
    </Router>
  );
}

export default App;
