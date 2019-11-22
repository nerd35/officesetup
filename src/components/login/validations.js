export default function validation(values) {
    let errors ={};
    //email error
    if(!values.email){
        errors.email = 'Email is Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test
        (values.email)
    ){
        errors.email = 'Invalid email address';
    }
    //Password errors
    if (!values.password){
        errors.password = 'Password is Required'
    } else if (values.password.length < 8 ) {
        errors.password = 'Password must be at least 6 characters'
    }
    return errors;
}