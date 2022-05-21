import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

export const SidebarData = [
  {
    title: "Home",
    link: "/Home",
    icon: <HomeIcon/>,
  },
  {
    title: "About",
    link: "/About",
    icon: <HomeRepairServiceIcon/>,
  },
 
  {
    title: "Services",
    link: "/Services",
    icon: <AccountCircleIcon/>,
  },
 
  {
    title: "Dashboard",
    link: "/Dashboard",
    icon: <DashboardIcon/>,
  },
 
  {
    title: "Analytics",
    link: "/Analytics",
    icon: <AnalyticsIcon/>,
  },
 
  {
    title: "Contact Us",
    link: "/Contact us",
    icon: <ContactPhoneIcon/>,
  },
 
  {
    title: "Settings",
    link: "/Settings",
    icon: <SettingsIcon/>,
  },
  {
    title: "Geography and access",
    link: "/Geography and access",
    icon: <AddLocationAltIcon/>,
  },
 
 
]
