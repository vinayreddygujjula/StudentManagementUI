<template>
    <div>
        <h3>Student Details</h3>
        <div class="container">
            <form @submit="Save">
                <fieldset class="form-group">
                    <label>SID</label>
                    <input type="text" class="form-control" v-model="sId" :disabled="isHidden" />
                </fieldset>
                <fieldset class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="name" :disabled="isHidden" />
                </fieldset>
                <fieldset class="form-group">
                    <label>Age</label>
                    <input type="number" class="form-control" v-model="age" :disabled="isHidden" />
                </fieldset>
                <fieldset class="form-group">
                    <label>Grade</label>
                    <input type="number" class="form-control" v-model="grade" />
                </fieldset>
                <br>
                <button class="btn btn-success" type="submit">Save</button>
            </form>
        </div>
    </div>
</template>
<script>
import APIService from "../APIService";

export default {
    name: "Student",
    data() {
        return {
            sId: "",
            name: "",
            age: 0,
            grade: 0,
            isHidden: false,
        };
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
    },
    methods: {
        loadStudentDetails() {
            console.log("loadStudentDetails")
            console.log(this.id)
            console.log(this.isHidden)
            if(this.id == -1){
                this.isHidden = false;
            }else{
                this.isHidden = true;
                APIService.GetStudentById(this.id).then((res) => {
                this.sId = res.data.sId;
                this.name = res.data.name;
                this.age = res.data.age;
                this.grade = res.data.grade;
            });
            }
        },
        Save(e) {
            console.log("Save")
            e.preventDefault();
            console.log(this.id)
            if (this.id == -1) {
                APIService.AddStudent(
                    this.sId,
                    this.name,
                    this.age,
                    this.grade,
                ).then(() => {
                    this.$router.push("/");
                }, err => console.log(err));
            } else {
                APIService.UpdateStudent(
                    this.sId,
                    this.grade,
                ).then(() => {
                    this.$router.push("/");
                }, err => console.log(err));
            }
        },
    },
    created() {
        console.log("created");
        this.loadStudentDetails();
    },
};
</script>