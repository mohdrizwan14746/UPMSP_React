import DashboardIcon from '@mui/icons-material/Dashboard';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
export  const sidebarData= [
{
    title:"Dashboard",
    icon:<DashboardIcon/>,
    link:"/login"
},
{
    title:"Registartion",
    icon:<AppRegistrationIcon/>,
    link:"/registration"
},
{
    title:"Login",
    icon:<LoginIcon/>,
    link:"/login"
},
{
    title:"Apply for Services",
    icon:<MiscellaneousServicesIcon/>,
    link:"/services"
},
{
    title:"Student Profile",
    icon:<PersonOutlineIcon/>,
    link:"/student_profile"
}
]