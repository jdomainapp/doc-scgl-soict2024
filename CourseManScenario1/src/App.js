import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Address from "./components/Address/Address";
import CourseModule from "./components/CourseModule/CourseModule";
import Enrolment from "./components/Enrolment/Enrolment";
import Student from "./components/Student/Student";
import StudentClass from "./components/StudentClass/StudentClass";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/address">Address</Link>
                        </li>
                        <li>
                            <Link to="/coursemodule">Course Module</Link>
                        </li>
                        <li>
                            <Link to="/enrolment">Enrolment</Link>
                        </li>
                        <li>
                            <Link to="/student">Student</Link>
                        </li>
                        <li>
                            <Link to="/studentclass">Student Class</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route path="/address" element={<Address />} />
                    <Route path="/coursemodule" element={<CourseModule />} />
                    <Route path="/enrolment" element={<Enrolment />} />
                    <Route path="/student" element={<Student />} />
                    <Route path="/studentclass" element={<StudentClass />} />
                    <Route element={NotFound} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
