import { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './AddUserStyles';
import { Context } from '../../App';
import { Button, TextField, Typography } from '@material-ui/core';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";
import SnackBar from '../../components/SnackBar';

const AddUser = () => {
    const consumer = useContext(Context)
    const classes = useStyles();
    let history = useHistory();

    const formik = useFormik({
        initialValues: {
            customerNumber: "",
            userName: "",
            firstName: "",
            lastName: "",
            email: "",
            dateOfBirth: "",
            password1: "",
            password2: ""
        },
        validationSchema: Yup.object().shape({
            customerNumber: Yup.number()
                .required('Required')
                .min(10000, "Must be 5 digits")
                .max(99999, "Must be 5 digits"),
            userName: Yup.string()
                .required('Required')
                .min(3, "Must be min 3 character")
                .max(30, "Must be max 30 character")
                .matches(/^[a-zA-Z0-9]/,
                    "It is not a valid User Name"),
            firstName: Yup.string()
                .required('Required')
                .min(2, "Must be min 2 character")
                .max(150, "Must be max 150 character"),
            lastName: Yup.string()
                .required('Required')
                .min(2, "Must be min 2 character")
                .max(150, "Must be max 150 character"),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required')
                .max(300, "Must be max 300 character"),
            dateOfBirth: Yup.date()
                .required('Required'),
            password1: Yup.string()
                .required('Required')
                .min(8, "Must be min 8 character")
                .max(150, "Must be max 150 character"),
            password2: Yup.string()
                .oneOf([Yup.ref('password1'), null], 'Passwords must match')
                .required('Required')
        }),
        onSubmit: async () => {
            const isUsed = consumer.users.filter((user) =>
                user.user_name === formik.values.userName
            )
            if (isUsed.length === 0) {
                consumer.addUser(formik.values);
                console.log("Success");
                console.log("formik.values", formik.values);
                consumer.setMessage("Saved");
                consumer.setSeverity("success");
                await consumer.handleClick();
                history.push("/");
            }
            else {
                console.log("isUsed", isUsed)
                consumer.setMessage("This username is used.");
                consumer.setSeverity("error")
                consumer.handleClick();
            }
        },
    });

    return (
        <Grid container>
            <Grid item xs={8} md={4} className={classes.formWrapper}>
                <SnackBar />
                <Typography variant="h5">Add User</Typography>
                <form className={classes.root} onSubmit={formik.handleSubmit} validationSchema autoComplete="off">
                    <TextField
                        name="customerNumber"
                        value={formik.values.customerNumber}
                        onChange={formik.handleChange}
                        helperText={formik.touched.customerNumber && formik.errors.customerNumber}
                        error={formik.touched.customerNumber && formik.errors.customerNumber}
                        fullWidth
                        id="customerNumber"
                        label="Customer Number"
                        type="number"
                        onBlur={formik.handleBlur}
                    />
                    <TextField
                        name="userName"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        helperText={formik.touched.userName && formik.errors.userName}
                        error={formik.touched.userName && formik.errors.userName}
                        fullWidth
                        id="userName"
                        label="User Name"
                        onBlur={formik.handleBlur}
                    />
                    <TextField
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        error={formik.touched.firstName && formik.errors.firstName}
                        fullWidth
                        id="firstName"
                        label="First Name"
                        onBlur={formik.handleBlur}  
                    />
                    <TextField
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                        error={formik.touched.lastName && formik.errors.lastName}
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        onBlur={formik.handleBlur}
                    />
                    <TextField
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        helperText={formik.touched.email && formik.errors.email}
                        error={formik.touched.email && formik.errors.email}
                        fullWidth
                        id="email"
                        label="Email Address"
                        onBlur={formik.handleBlur}
                    />
                    <TextField
                        className={classes.date}
                        name="dateOfBirth"
                        value={formik.values.dateOfBirth}
                        onChange={formik.handleChange}
                        helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                        error={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                        fullWidth
                        id="dateOfBirth"
                        label="Date of Birth"
                        type="date"
                        onBlur={formik.handleBlur}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        name="password1"
                        value={formik.values.password1}
                        onChange={formik.handleChange}
                        helperText={formik.touched.password1 && formik.errors.password1}
                        error={formik.touched.password1 && formik.errors.password1}
                        fullWidth
                        type="password"
                        id="password1"
                        label="Password"
                        onBlur={formik.handleBlur}
                    />
                    <TextField
                        name="password2"
                        value={formik.values.password2}
                        onChange={formik.handleChange}
                        helperText={formik.touched.password2 && formik.errors.password2}
                        error={formik.touched.password2 && formik.errors.password2}
                        fullWidth
                        type="password"
                        id="password2"
                        label=" Repeat Password"
                        onBlur={formik.handleBlur}
                    />
                    <Button
                        className={classes.button}
                        size="small" variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        disabled={!formik.isValid}
                    >
                        Save
                    </Button>
                    <Button
                        className={classes.button}
                        size="small" variant="contained"
                        color="primary"
                        fullWidth
                        onClickCapture
                        onClick={() => history.push("/")}
                    >
                        Home Page
                    </Button>
                </form>
            </Grid>
        </Grid>
    )
}
export default AddUser;