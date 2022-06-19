import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import BookPage from './View/BookPage';
import Header from './View/components/Header';
import Home from './View/Home';

function App()
{
  return (
    <Router>
      <Header/>
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="books" element={<BookPage />} />
      </Routes>
    </Router>
    );
}

export default App;
