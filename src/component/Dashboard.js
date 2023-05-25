import './Dashboard.css';
import ImageOne from '../Assets/profile-images/imgOne.png';
import Delete from '../Assets/icons/delete-black-18dp.svg';
import Create from '../Assets/icons/create-black-18dp.svg';
import AddLogo from '../Assets/icons/add-24px.svg';
// import RegistrationFrom from './RegistrationForm';
import {Link} from 'react-router-dom';

function Dashboard(){
    return(
        <>
             <div class="main-content">
        <div class="header-content">
            <div class="emp-detail-text">Employee Details
            </div>
            <Link className='a' to="/registration-form" style={{ textDecoration: 'none' }}> 
                <button className="addUser">
                    <div className="addUser-img"><img src={AddLogo} className="addUser-img" alt=""/></div>
                    <div className="addUser-text">Add User</div>
                </button>
            </Link>
        </div>
        <div class="table-main">
            <table id="display" class="table">
             
                <tr className="mytab">
                    <th></th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Start Date</th>
                    <th>Actions</th>
                </tr>
                <tr className="dash">
                    <td><img class="profile" src={ImageOne} alt=""/></td>
                    <td>Narayan MahaDevan</td>
                    <td>Male</td>
                    <td>
                        <div class="dept-label">HR</div>
                        <div class="dept-label">Finance</div>
                    </td>
                    <td>3000000</td>
                    <td>1 nov 2020</td>
                    <td>
                        <img src={Delete} alt="delete" id="1"/>
                        <img src={Create} alt="create" id="1"/>
                    </td>
                </tr>
            </table>
            </div>
        </div>
        </>
    );
}
export default Dashboard;