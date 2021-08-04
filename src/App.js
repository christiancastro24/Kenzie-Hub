import './App.css';
import { GlobalStyle } from './components/GlobalStyle/global';
import { Routes } from './components/Routes';
import { Toast } from './components/Toastify';

function App() {
  return (
    <div className="App">
      <Toast />
      <Routes />
      <GlobalStyle />
    </div>
  );
}

export default App;
