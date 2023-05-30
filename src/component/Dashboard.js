import './Dashboard.css';
import ImageOne from '../Assets/profile-images/imgOne.png';
import Delete from '../Assets/icons/delete-black-18dp.svg';
import Create from '../Assets/icons/create-black-18dp.svg';
import AddLogo from '../Assets/icons/add-24px.svg';
import Services from '../Service/EmployeePayrollServices';
// import RegistrationFrom from './RegistrationForm';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import profile1 from '../Assets/profile-images/imgOne.png';
import profile2 from '../Assets/profile-images/imgTwo.png';
import profile3 from '../Assets/profile-images/imgThree.png';
import profile4 from '../Assets/profile-images/imgFour.png';

function Dashboard(){
    
    let initialValue = {
        // allEmployees:[],
        employeeArray:[],
    }

    const [formValue, setValue] = useState({initialValue});

    
            let displayEmployee = ()=> {
                   Services.getAllEmployee()
                   .then((response)=>{
                    console.log(response);
                    setValue({employeeArray: response.data});
                   }           
            )};

            useEffect(()=>{
                displayEmployee();
                console.log(displayEmployee);
                console.log("useEffect activated...");
            },[])


            ///////////////////////////////////////////////////

            
    // const params = useParams(); 

    // console.log(props.employeeArray);

    let deleteEmp = (id) => { 
        var answer = window.confirm("Data once deleted cant be retrived..");
    if(answer === true){
        Services.deleteEmployee(id).then((data)=>{
            alert("Employee deleted successfully..!!");
            window.location.reload();
            displayEmployee();
        })
        .catch((error)=>{
            console.log(error);
        });
    }else{
        alert("Employee not Deleted");
    }
    };
    let updateEmp = (id) => {
        const value = parseInt(id);
        Services.deleteEmployee(value);
    }
            ///////////////////////////////////////////////////

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
        <div class="main-content">
        <div class="table-main">
        <table id="display" class="table">
         <thead>
            <tr className="mytab">
                <th></th>
                <th>Name</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Start Date</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
        {
            formValue.employeeArray && formValue.employeeArray.map((employee, index)=>(
            <tr className="dash" key={`${index}`}>
                <td><img class="profile" src={
                    employee.profilePic === "../Assets/profile-images/imgOne.png" ? profile1
                    : employee.profilePic === "../Assets/profile-images/imgTwo.png" ? profile2
                    : employee.profilePic === "../Assets/profile-images/imgThree.png" ? profile3
                    :profile4
                    } alt=""/></td>
                 
                <td>{employee.name}</td>
                <td>{employee.gender}</td>

                <td>
                {employee.departments.map((dep, i) => (
                    <div class="dept-label">{dep}</div>
                    ))}
                </td>
                
                <td>{employee.salary}</td>
                <td>{employee.startDate}</td>
                
                <td>
                    <img src={Delete} alt="delete" id="1" onClick={()=>{deleteEmp(employee.emp_id)}}/>
                    <img src={Create} alt="create" id="1" onClick={()=>{updateEmp(employee.emp_id)}}/>
                </td>
            </tr>
            
        ))};
        </tbody>
        </table>
        </div>
        </div>
        </div>
        </>
    );
}
export default Dashboard;