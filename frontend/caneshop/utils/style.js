import { makeStyles } from '@material-ui/core';
import { red, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#1B2430',
        '& a': {
            color: '#EAEAEA',
            marginLeft: 10,
        },
    },
    main: {
        minHeight: '80vh',
    },
    footer: {
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    grow: {
        flexGrow: 1,
    },
    foot: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    section: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    paper:{
        padding: 20,
        height:'70vh',
        width: 420,
        margin: "20px auto"
    },
    email:{
        margin:"10px 0"
    },
    password:{
        margin:"10px 0"
    },
    address:{
        margin:"10px 0"
    },
    phoneNo:{
        margin:"10px 0"
    },
    submit:{
        margin:"10px 0"
    },
    forgot_password:{
        margin:"10px 0",
        color: red[700]
    },
    register:{
        margin:"10px 0",
        color: red[700]
    },
    signin:{
        margin:"10px 0",
    },
});
export default useStyles;
