import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { AuthContextProvider } from './components/context/AuthContext';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Nav />
        <Outlet />
      </AuthContextProvider>
    </>
  );
}

export default App;
