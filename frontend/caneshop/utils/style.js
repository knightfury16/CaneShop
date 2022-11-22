import { makeStyles } from '@material-ui/core';

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
});
export default useStyles;
