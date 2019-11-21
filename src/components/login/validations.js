export default function validation(values) {
    let errors ={};
    //email error
    if(!values.email){
        errors.email = 'Required Email';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test
        (values.email)
    ){
        errors.email = 'Invalid email address';
    }
    //Password errors
    if (!values.password){
        errors.password = 'Require Password'
    } else if (values.password.length < 6 ) {
        errors.password = 'Password must be at least 6 characters'
    }
    return errors;
}