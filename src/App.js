import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import InspectorDashboard from './InspectorDashboard';
import SubInspectorDashboard from './SubInspectorDashboard';
import AcpDashboard from './AcpDashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<SignInPage/>} />
    <Route path="/InspectorDashboard" element={<InspectorDashboard/>} />
    <Route path="/SubInspectorDashboard" element={<SubInspectorDashboard/>} />
    <Route path="/AcpDashboard" element={<AcpDashboard/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
