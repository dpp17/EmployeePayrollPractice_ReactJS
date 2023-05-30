import axios from 'axios';

class EmployeePayrollServices{
    baseUrl = "http://localhost:8080/employee-payroll";

    addEmployee(data) {
        return axios.post( `${this.baseUrl + "/add"}`,data);
    }

    getAllEmployee(){
        return axios.get(`${this.baseUrl}/getAllEmp`);
    }
    
    deleteEmployee(id){
        return axios.delete(`${this.baseUrl}/deleteEmp/${id}`);
    }

    updateEmployee(id){
        return axios.put(`${this.baseUrl}/editEmp/${id}`);
    }
}

export default new EmployeePayrollServices();
