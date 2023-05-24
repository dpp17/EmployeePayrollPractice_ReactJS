
import '../App.css';

import Dashboard from './Dashboard';
import React, { useState } from 'react';

import ImageOne from '../Assets/profile-images/imgOne.png';
import ImageTwo from '../Assets/profile-images/imgTwo.png';
import ImageThree from '../Assets/profile-images/imgThree.png';
import ImageFour from '../Assets/profile-images/imgFour.png';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';


function RegistrationForm() {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
      setIsOpen(true);
    };
  return (
    <>
     <div className="form-content">
        <form action="" className="form">
            <div className="form-head">
                Employee Payroll Form
            </div>
            <div className="form-body">
            <div className="row-content">
            <label class="label text" for="name">Name</label>
                        <input class="input" type="text" id="name" name="name" required />
                        <error-output class="text-error" for="text"></error-output>
            </div>
            <div className="row-content">
            <label class="label text" for="profile">Profile image</label>
                    <div class="profile-radio-content">
                        <label>
                            <input type="radio" className="profile" name="profile"
                            value={ImageOne} required />
                            <img class="profile-image" className="image" src={ImageOne} alt="profile-img not found" />
                        </label>
                        <label>
                            <input type="radio" className="profile" name="profile"
                            value={ImageTwo} required />
                            <img class="profile-image" className="image" src={ImageTwo} alt="profile-img not found" />
                        </label>
                        <label>
                            <input type="radio" className="profile" name="profile"
                            value={ImageThree} required />
                            <img class="profile-image" className="image" src={ImageThree} alt="profile-img not found" />
                        </label>
                        <label>
                            <input type="radio" className="profile" name="profile"
                            value={ImageFour} required />
                            <img class="profile-image" className="image" src={ImageFour} alt="profile-img not found" />
                        </label>
                        {/* <label htmlFor=""></label> */}
                    </div>
            </div>
            <div className="row-content">
            <label class="label text" for="gender">Gender</label>
                    <div>
                        <input type="radio" id="male" name="gender" value="male"/>
                        <label class="text" for="male">Male</label>

                        <input type="radio" id="female" name="gender" value="female"/>
                        <label class="text" for="female">Female</label>
                        
                        <input type="radio" id="other" name="gender" value="other"/>
                        <label class="text" for="other">Other</label>
                    </div>
            </div>
            {/* <div class="row-content">
                    <label class="label text" for="email">Email ID</label>
                        <input class="input" type="email" id="email" name="email" placeholder="abc123@gmail.com" required/>
                </div> */}
                <div class="row-content">
                    <label class="label text" for="department">Department</label>
                    <div>
                        {/* <input class="checkbox" type="checkbox" id="hr" name="hr" value="HR"/> */}
                        <input class="checkbox" type="checkbox" id="hr" name="department" value="HR"/>
                        <label class="text" for="hr">HR</label>
                        {/* <input class="checkbox" type="checkbox" id="sales" name="sales" value="Sales"/> */}
                        <input class="checkbox" type="checkbox" id="sales" name="department" value="Sales"/>
                        <label class="text" for="sales">Sales</label>
                        {/* <input class="checkbox" type="checkbox" id="finance" name="finance" value="Finance"/> */}
                        <input class="checkbox" type="checkbox" id="finance" name="department" value="Finance"/>
                        <label class="text" for="finance">Finance</label>
                        {/* <input class="checkbox" type="checkbox" id="engineer" name="engineer" value="Engineer"/> */}
                        <input class="checkbox" type="checkbox" id="engineer" name="department" value="Engineer"/>
                        <label class="text" for="engineer">Engineer</label>
                        {/* <input class="checkbox" type="checkbox" id="others" name="others" value="Others"/> */}
                        <input class="checkbox" type="checkbox" id="others" name="department" value="Others"/>
                        <label class="text" for="others">Others</label>
                    </div>
                </div>
                <div class="row-content">
                    <label class="label text" for="salary">Salary</label>
                    <div>
                        <select name="Salary" class="Salary-option">
                        <option class="Salary-option" value="" disabled selected hidden>Select Salary</option>
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
                    <label class="label text" for="startDate">Start Date</label>
                    <div>
                        <select name="Day" id="day">
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
                        <select name="Month" id="month">
                        <option value="" disabled selected hidden>Month</option>
                            <option value="Jan">January</option>
                            <option value="Feb">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="Aug">August</option>
                            <option value="Sept">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option>
                        </select>
                        <select name="Year" id="year">
                        <option value="" disabled selected hidden>Year</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                        </select>
                    </div>
                </div>
                <div class="row-content">
                    <label class="label text" for="notes">Notes</label>
                    <inout type="text" class="input" name="Notes" className="notes" placeholder=""></inout>
                </div>
                <div class="buttonParent">
                
             
             {/* <Link className='a' to="/about">About</Link>
             <Link className='a' to="/contact">Contact</Link> */}
        
                    {/* <a href="./Employee.html" target="_self" class="resetButton button cancelButton">Cancel</a> */}
                    <div class="cancel"> <button type="cancel" class="cancelButton button">Cancel</button></div>
                    <div class="submit-reset"><nav>
                    {/* <button type="submit" class="submitButton button" id="submitButton"><Link className='a' to="/dashboard">Submit</Link></button> */}
                    <Link className='a' to="/dashboard"> <button type="submit" class="submitButton button" id="submitButton" onClickSubmit={handleButtonClick}>Submit</button></Link>
                    {isOpen && <Dashboard />}
                        <button type="reset" class="resetButton button">Reset</button>
                        </nav>
                    </div>
                </div>
                </div>
        </form>
     </div>
     {/* <Routes>
     <Route path="/dashboard" element={<Dashboard />} />
            </Routes> */}
   </>
  );
}

export default RegistrationForm;