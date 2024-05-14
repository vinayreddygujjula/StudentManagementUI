<template>
    <div class="container">
        <div>
            <button class="btn btn-success" @click="AddStudent()">+ Add Student</button>
        </div>
        <br>
        <table class="table">
            <thead>
                <tr>
                    <th>SID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in students" v-bind:key="student.sId">

                    <td>{{ student.sId }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.age }}</td>
                    <td>{{ student.grade }}</td>
                    <td>
                        <button class="btn btn-warning" @click="UpdateStudent(student.sId, student.grade)">
                            Update
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-danger" @click="DeleteStudent(student.sId)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import APIService from "../APIService";

export default {
    name: "Students",
    data() {
        return {
            students: []
        };
    },
    methods: {
        loadStudentDetails() {
            APIService.GetAllStudents().then((res) => {
                this.students = res.data;
                console.log(JSON.stringify(res.data, null, 2));
            });
        },
        AddStudent() {
            this.$router.push(`/student/-1`);
        },
        UpdateStudent(sId, grade) {
            console.log(grade)
            this.$router.push(`/student/${sId}`);
        },
        DeleteStudent(id) {
            APIService.DeleteStudent(id).then(() => {
                alert("Student record deleted successfully.")
                this.loadStudentDetails();
            });
        },
    },
    created() {
        this.loadStudentDetails();
    },
};
</script>