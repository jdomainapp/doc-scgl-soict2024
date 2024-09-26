import React from "react";
import AddressForm from "./components/Address/AddressForm";
import AddressList from "./components/Address/AddressList";
import StudentForm from "./components/Student/StudentForm";
import StudentList from "./components/Student/StudentList";
import EnrolmentForm from "./components/Enrolment/EnrolmentForm";
import EnrolmentList from "./components/Enrolment/EnrolmentList";
import StudentClassForm from "./components/StudentClass/StudentClassForm";
import StudentClassList from "./components/StudentClass/StudentClassList";
import CompulsoryModuleForm from "./components/CompulsoryModule/CompulsoryModuleForm";
import CompulsoryModuleList from "./components/CompulsoryModule/CompulsoryModuleList";
import ElectiveModuleForm from "./components/ElectiveModule/ElectiveModuleForm";
import ElectiveModuleList from "./components/ElectiveModule/ElectiveModuleList";

function App() {
    return (
        <div className="App">
            <h1>Course Management System</h1>

            {/* Address Section */}
            <AddressForm />
            <AddressList />

            {/* Student Section */}
            <StudentForm />
            <StudentList />

            {/* Enrolment Section */}
            <EnrolmentForm />
            <EnrolmentList />

            {/* Student Class Section */}
            <StudentClassForm />
            <StudentClassList />

            {/* Compulsory Module Section */}
            <CompulsoryModuleForm />
            <CompulsoryModuleList />

            {/* Elective Module Section */}
            <ElectiveModuleForm />
            <ElectiveModuleList />
        </div>
    );
}

export default App;
