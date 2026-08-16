import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SidebarProvider } from './context/SidebarContext';
import Router from './Router';

function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SidebarProvider>
    </AuthProvider>
  );
}

export default App;