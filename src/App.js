import './App.css';
import PageHeader from "./component/PageHeader";
import RegistrationForm from "./component/RegistrationForm";
import Dashboard from './component/Dashboard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
  <div className="registration-page-body">
      <PageHeader/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
        {/* <Route path="/registration-form" element={<RegistrationForm />} /> */}
      </Routes>
      </div>
  );
}

export default App;
