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

    updateEmployee(id, data){
        return axios.put(`${this.baseUrl}/editEmp/${id}`,data);
    }
    getEmployeeById(id){
        return axios.get(`${this.baseUrl}/getEmp/${id}`);
    }
}

export default new EmployeePayrollServices();
