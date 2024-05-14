import axios from 'axios'

const API_URL = 'https://localhost:44309/Student'

class APIService {

    GetAllStudents() {
        return axios.get(`${API_URL}`);
    }

    GetStudentById(id) {
        return axios.get(`${API_URL}/GetStudentById?sId=${id}`);
    }

    DeleteStudent(id) {
        return axios.delete(`${API_URL}/DeleteStudent?sId=${id}`);
    }

    UpdateStudent(sId, grade) {
        const queryParams = new URLSearchParams({ sId, grade }).toString();
        return axios.put(`${API_URL}/UpdateStudent?${queryParams}`);
    }

    AddStudent(sId, name, age, grade) {
        const queryParams = new URLSearchParams({ sId, name, age, grade }).toString();
        return axios.post(`${API_URL}/AddStudent?${queryParams}`);
    }
  }
export default new APIService()