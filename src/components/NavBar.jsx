
import {
  Avatar,
  Badge,
  Button,
  NavbarBrand,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar  
} from "flowbite-react";
import { Link } from "react-router";
import { IoIosNotificationsOutline } from "react-icons/io";



export function NavBar(){
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} to="/">
        <img src="/LogoICono.svg" className="mr-3 h-6 sm:h-9 rounded-2xl" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">IMPRESION-A</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className="mr-3">
          <p ><IoIosNotificationsOutline className="text-2xl"/></p>
          <Badge className="ms-2 rounded-full px-1.5">2</Badge>
        </Button>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Rodrigo Roldan</span>
            <span className="block truncate text-sm font-medium">rcroldan@impresion-a.com</span>
          </DropdownHeader>
          <DropdownItem>Menu</DropdownItem>
          <DropdownItem>Configuracion</DropdownItem>
          <DropdownItem>Ganancias</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Salir</DropdownItem>
        </Dropdown>
        
        
      </div>      
    </Navbar>
  );
}
