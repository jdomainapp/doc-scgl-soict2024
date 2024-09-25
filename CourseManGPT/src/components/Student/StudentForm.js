import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const StudentForm = ({ onSubmit }) => {
    const studentValidationSchema = Yup.object().shape({
        id: Yup.string()
            .length(6, "ID must be exactly 6 characters long")
            .required("ID is required"),
        name: Yup.string()
            .max(30, "Name must be at most 30 characters long")
            .required("Name is required"),
        gender: Yup.string()
            .oneOf(["Male", "Female", "Others"], "Invalid gender")
            .required("Gender is required"),
        dob: Yup.date().required("Date of Birth is required"),
        email: Yup.string()
            .max(30, "Email must be at most 30 characters long")
            .required("Email is required")
            .email("Invalid email address"),
        address: Yup.string()
            .max(20, "Address must be at most 20 characters long")
            .nullable(),
        studentClass: Yup.string()
            .max(6, "Student Class must be at most 6 characters long")
            .nullable(),
    });

    return (
        <Formik
            initialValues={{
                id: "",
                name: "",
                gender: "",
                dob: "",
                email: "",
                address: "",
                studentClass: "",
            }}
            validationSchema={studentValidationSchema}
            onSubmit={(values) => {
                onSubmit(values);
            }}>
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="id">ID</label>
                        <Field type="text" name="id" />
                        <ErrorMessage name="id" component="div" />
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <Field as="select" name="gender">
                            <option value="" label="Select gender" />
                            <option value="Male" label="Male" />
                            <option value="Female" label="Female" />
                            <option value="Others" label="Others" />
                        </Field>
                        <ErrorMessage name="gender" component="div" />
                    </div>
                    <div>
                        <label htmlFor="dob">Date of Birth</label>
                        <Field type="date" name="dob" />
                        <ErrorMessage name="dob" component="div" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <Field type="text" name="address" />
                        <ErrorMessage name="address" component="div" />
                    </div>
                    <div>
                        <label htmlFor="studentClass">Student Class</label>
                        <Field type="text" name="studentClass" />
                        <ErrorMessage name="studentClass" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default StudentForm;
