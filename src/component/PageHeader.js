import '../App.css';
import logo from '../Assets/images/logo.png';
import {Link} from 'react-router-dom';

function PageHeader() {
  return (
    <Link className='a' to="/" style={{ textDecoration: 'none' }}> 
      <div className="header-container header">
        <div className="logo">
                <img src={logo} className="logo-image" alt="EMployee-Payroll_Logo" />
            <div className="logo-name">
                <span className="logo-content">Employee</span>
                <span className="logo-content logo-payroll">Payroll</span>
            </div>
        </div>
    </div>
    </Link>
  );
}
export default PageHeader;