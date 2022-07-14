import LoginForm from "../pages/auth/LoginForm"
import SignupForm from "../pages/auth/SignupForm"
import Dashboard from "../pages/dashboard/index"

const routes = [
    {
        pathname: '/login',
        exact: true,
        element: () =>  <LoginForm /> 
    },
    {
        pathname: '/sign-up',
        exact: true,
        element: () => <SignupForm />
    },
    {
        pathname: '/dashboard',
        exact: true,
        element: () => <Dashboard />
    }        
];


export default routes;