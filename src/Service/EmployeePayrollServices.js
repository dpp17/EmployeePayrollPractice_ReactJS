import axios from 'axios';

class EmployeePayrollServices{
    baseUrl = "http://localhost:8080/employee-payroll";

    addEmployee(data) {
        return axios.post( `${this.baseUrl + "/add"}`,data);
    }
}

export default new EmployeePayrollServices();
