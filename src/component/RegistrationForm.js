import '../App.css';
import React, { useState } from 'react';
import EmployeeService from '../Service/EmployeePayrollServices';

import ImageOne from '../Assets/profile-images/imgOne.png';
import ImageTwo from '../Assets/profile-images/imgTwo.png';
import ImageThree from '../Assets/profile-images/imgThree.png';
import ImageFour from '../Assets/profile-images/imgFour.png';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



function RegistrationForm() {
    const navigate = useNavigate();
        let initialValues = {
            name:'',
            // profileArray:[
            //     {url:"../Assets/profile-images/imgOne.png"},
            //     {url:"../Assets/profile-images/imgTwo.png"},
            //     {url:"../Assets/profile-images/imgThree.png"},
            //     {url:"../Assets/profile-images/imgFour.png"},
            // ],
            department:["HR","Sales","Finance","Engineer","Others"],
            departmentValue:[],
            day:'',
            month:'',
            year:'',
            salary:'',
            gender:'',
            profile:'',
            startDate:'',
            notes:'',
            isUpdate:false,
        };
   

    const [formValue, setValue] = useState(initialValues);
    
    let onChangeFormValue = (event) => {
        console.log(event.target.name);
        setValue({...formValue, [event.target.name]: event.target.value });  
    };

    ////////////////////////////////////// Force_Submit To Stay On The Same Page ////////////////////////////////
    let handleAutoSubmit = (event)=>{
        event.preventDefault();
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////



    
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////******************************//////////////////////////////////
    //////////////////////////////////         onSubmit             //////////////////////////////////
    //////////////////////////////////******************************//////////////////////////////////
   
    let save = () =>{
        let object = {
            name: formValue.name,
            startDate: `${formValue.day} ${formValue.month} ${formValue.year}`,
            salary: formValue.salary,
            note: formValue.notes,
            gender: formValue.gender,
            departments: formValue.departmentValue,
            profilePic:formValue.profile,
        }
        console.log(formValue);
        console.log(object);

        EmployeeService.addEmployee(object)
            .then((response) => {
                console.log(response);
                alert("Data Added successfully..");
        })
            .catch((error) => {
                console.log(error);
        });
        //////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////
        if(formValue.isUpdate){
            var ans = window.confirm("Confirm the Change That have been made..!!");
            if(ans === true){
                EmployeeService.updateEmployee(params.id, object)
                .then((data)=>{
                    console.log(data.data.data);
                    navigate('/');
                    alert("Data updated successfully..!!");
                })
                .catch((error)=>{
                    console.log(error);
                });
            }   
        }

    };
        ///////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////******************************//////////////////////////////////
    //////////////////////////////////         Reset             //////////////////////////////////
    //////////////////////////////////******************************//////////////////////////////////
    let reset = (event) => {
        console.log(event.target.name);
            setValue({...formValue, [event.target.name]:initialValues });
    };
   
    /////////////////////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////// On Changing Department Name ////////////////////////////////
    let onDepartmentChange = (event) => {
        let departmentName =  event.target.value;
        onCheckChangeDept(departmentName);
        // let index = formValue.departmentValue.indexOf(departmentName);
        // let checkArray = [ ...formValue.departmentValue];
        // if(index > -1) {checkArray.splice(index,1);}
        // else {checkArray.push(departmentName);}
        // setValue({ ...formValue, departmentValue: checkArray});
    }

    let onCheckChangeDept=(item)=>{
        let index = formValue.departmentValue.indexOf(item);
        let checkArray = [ ...formValue.departmentValue];
        if(index > -1) {checkArray.splice(index,1);}
        else {checkArray.push(item);}
        setValue({ ...formValue, departmentValue: checkArray});
    
    }

    let getChecked
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////

    const params = useParams();
    useEffect(()=>{
        console.log("useEffect Starting...");
        if(params.id){
            console.log("inner Step Conditions....");
            getDateById(params.id);
        }
    },[params.id]);

    const getDateById = (id)=>{
        EmployeeService.getEmployeeById(id)
        .then((response)=>{
            console.log(response.data.name);
            let object = response.data;
            // console.log(object);
            setData(object);
            // setValue({...formValue, [response.target.name]:object});
        })
        .catch((error) => {
            console.log("error is " + error);
        });
    }
    const setData = (obj) => {
        let array = obj.startDate;
        console.log(array);
        console.log(obj);

        setValue({
            ...formValue,
            ...obj,
            id:obj.emp_id,
            name:obj.name,
            departmentValue: obj.departments,
            isUpdate:true,
            day: array[0] + array[1],
            month: array[3] + array[4] + array[5],
            year: array[7] + array[8] + array[9] + array[10],
            notes: obj.note,

        });
        
    }
    ///////////////////////////////////////////////////////////////////////////////////
return(
    <>
     <div className="form-content">
        <form action="" className="form" onSubmit={handleAutoSubmit}>
            <div className="form-head">
                Employee Payroll Form
            </div>
            <div className="form-body">
            <div className="row-content">
            <label class="label text" for="name">Name</label>
                        <input class="input" type="text" id="name" name="name" onChange={onChangeFormValue} value={formValue.name} required />
                        <error-output class="text-error" for="text"></error-output>
            </div>
            <div className="row-content">
            <label class="label text" for="profile">Profile image</label>
                    <div class="profile-radio-content">
                        <label>
                            <input type="radio" className="profile" name="profile"
                            value="../Assets/profile-images/imgOne.png" checked={formValue.profile === "../Assets/profile-images/imgOne.png"}  onChange={onChangeFormValue} required />
                            <img class="profile-image" className="image"  src={ImageOne} alt="profile-img not found" />
                        </label>
                        <label>
                            <input type="radio" className="profile" name="profile"
                            value="../Assets/profile-images/imgTwo.png"
                            checked={formValue.profile === "../Assets/profile-images/imgTwo.png"} onChange={onChangeFormValue} required />
                            <img class="profile-image" className="image" src={ImageTwo} alt="profile-img not found" />
                        </label>
                        <label>
                            <input type="radio" className="profile" name="profile"
                            value="../Assets/profile-images/imgThree.png"
                             checked={formValue.profile === "../Assets/profile-images/imgThree.png"} onChange={onChangeFormValue} required />
                            <img class="profile-image" className="image" src={ImageThree} alt="profile-img not found" />
                        </label>
                        <label>
                            <input type="radio" className="profile" name="profile"
                            value="../Assets/profile-images/imgFour.png"
                              checked={formValue.profile === "../Assets/profile-images/imgFour.png"} onChange={onChangeFormValue} required />
                            <img class="profile-image" className="image" src={ImageFour} alt="profile-img not found" />
                        </label>
                    </div>
            </div>
            <div className="row-content">
            <label class="label text" for="gender">Gender</label>
                    <div>
                        <input type="radio" id="male" name="gender" onChange={onChangeFormValue} value="male" checked={formValue.gender === "male"}/>
                        <label class="text" for="male">Male</label>

                        <input type="radio" id="female" name="gender" onChange={onChangeFormValue} value="female" checked={formValue.gender === "female"} />
                        <label class="text" for="female">Female</label>
                        
                        <input type="radio" id="other" name="gender" onChange={onChangeFormValue} value="other" checked={formValue.gender === "other"} />
                        <label class="text" for="other">Other</label>
                    </div>
            </div>
                <div class="row-content">
                    <label class="label text" for="department">Department</label>
                    <div>
{/*                         
                        {formValue.department.map((item)=>{
                            <span key={item}>
                            <input type="checkbox" className="checkbox"
                            onChange={()=> onCheckChangeDept(item)}
                            name={item}
                            checked={getChecked(item)}
                            value={item}
                            />
                            <label className="text" htmlFor={item}>{item}</label>
                            </span>
                        })} */}

                    
                        <input class="checkbox" type="checkbox" id="hr" name="department" onChange={onDepartmentChange}  value="HR" checked={formValue.department[0] === "HR"} />
                        <label class="text" for="hr">HR</label>
                        
                        <input class="checkbox" type="checkbox" id="sales" name="department" onChange={onDepartmentChange}  value="Sales" checked={formValue.department[1] === "Sales"} />
                        <label class="text" for="sales">Sales</label>
                      
                        <input class="checkbox" type="checkbox" id="finance" name="department" onChange={onDepartmentChange}  value="Finance" checked={formValue.department[2] === "Finance"} />
                        <label class="text" for="finance">Finance</label>
                        
                        <input class="checkbox" type="checkbox" id="engineer" name="department" onChange={onDepartmentChange} value="Engineer" checked={formValue.department[3] === "Engineer"} />
                        <label class="text" for="engineer">Engineer</label>
                       
                        <input class="checkbox" type="checkbox" id="others" name="department" onChange={onDepartmentChange} value="Others" checked={formValue.department[4] === "Others"} />
                        <label class="text" for="others">Others</label>
                    </div>
                </div>
                <div class="row-content">
                    <label class="label text" for="salary">Salary</label>
                    <div>
                        <select name="salary" class="Salary-option" value={formValue.salary} onChange={onChangeFormValue}>
                        <option class="Salary-option"  disabled selected hidden>Select Salary</option>
                            <option value="<100000" class="Salary-option">&lt;100000</option>
                            <option value="200000" >200000</option>
                            <option value="250000" >2800000</option>
                            <option value="300000">2900000</option>
                            <option value="350000" >3000000</option>
                            <option value="400000" >3100000</option>
                            <option value="450000" >300000</option>
                            <option value="500000" >400000</option>
                            <option value="550000" >500000</option>
                            <option value="600000" >600000</option>
                            <option value="900000" >900000</option>
                            <option value="1200000">1200000</option>
                            <option value="1500000">1500000</option>
                            <option value="1800000">1800000</option>
                            <option value="2000000">2000000</option>
                            <option value="2500000">2500000</option>
                            <option value="3000000">3000000</option>
                            <option value="3500000">3500000</option>
                            <option value="4000000">4000000</option>
                            <option value="4500000">4500000</option>
                            <option value="5000000">5000000</option>
                            <option value="5500000">5500000</option>
                            <option value="6000000">6000000</option>
                            <option value="6500000">6500000</option>
                            <option value="7000000">7000000</option>
                            <option value="7500000">7500000</option>
                            <option value="8000000">8000000</option>
                            <option value="8500000">8500000</option>
                            <option value="9000000">9000000</option>
                            <option value="9500000">9500000</option>
                            <option value="9500000 >">9500000&gt;</option>
                        </select>
                    </div>
                   
                </div>
                <div class="row-content">
                    <label class="label text" for="startDate" onChange={onChangeFormValue}>Start Date</label>
                    <div>
                        <select name="day" id="day" value={formValue.day} onChange={onChangeFormValue} >
                        <option value="" disabled selected hidden>Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                            
                        </select>
                        <select name="month" id="month" value={formValue.month} onChange={onChangeFormValue}>
                        <option value="" disabled selected hidden>Month</option>
                            <option value="Jan">January</option>
                            <option value="Feb">February</option>
                            <option value="Mar">March</option>
                            <option value="Apr">April</option>
                            <option value="May">May</option>
                            <option value="Jun">June</option>
                            <option value="Jul">July</option>
                            <option value="Aug">August</option>
                            <option value="Sep">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option>
                        </select>
                        <select name="year" id="year" value={formValue.year} onChange={onChangeFormValue}>
                        <option value="" disabled selected hidden>Year</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                        </select>
                    </div>
                </div>
                <div class="row-content">
                    <label class="label text" for="notes">Notes</label>
                    <input type="text" class="input" name="notes" className="notes" value={formValue.notes} onChange={onChangeFormValue} placeholder=""></input>
                </div>
                <div class="buttonParent">
        
                    {/* <a href="./Employee.html" target="_self" class="resetButton button cancelButton">Cancel</a> */}
                    <div class="cancel"> <button type="cancel" class="cancelButton button">Cancel</button></div>
                    <div class="submit-reset"><nav>
                    {/* <Link className='a' to="/dashboard"> <button type="submit" class="submitButton button" id="submitButton" >Submit</button></Link> */}
                    {/* {isOpen && <Dashboard />} */}
                    <button type="submit" class="submitButton button" id="submitButton"  onClick={save}>{formValue.isUpdate ? "Update" : "Submit"}</button>
                        <button type="reset" class="resetButton button" onReset={reset}>Reset</button>
                        </nav>
                    </div>
                </div>
                </div>
        </form>
     </div>
   </>
  );
}

export default RegistrationForm;