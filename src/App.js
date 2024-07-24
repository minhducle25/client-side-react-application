import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home/Home';
import Login from './pages/LoginPage/Login';
import VolPage from './pages/VolcanoListPage/VolPage';
import DetailVolcano from './pages/DetailVolcanoPage/DetailPage';
import RegistrationPage from './pages/RegisterationPage/RegistrationPage';
import './App.css';
import InitializeApp from './components/InitializeApp/InitializeApp';

function App() {
  return (
    <Provider store={store}>
      <InitializeApp />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/volcanoes" element={<VolPage />} />
          <Route path="/volcanoes/:id" element={<DetailVolcano />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
