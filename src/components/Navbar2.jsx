
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarCollapse,
  NavbarBrand,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router";

export function Navbar2(){
  return (
    <>
    <Navbar fluid rounded>
      <NavbarBrand as={Link} to="">
              <img src="/LogoICono.svg" className="mr-3 h-6 sm:h-9 rounded-2xl" alt="Flowbite React Logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">IMPRESION-A</span>
    </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </DropdownHeader>          
          <DropdownItem>Settings</DropdownItem>          
          <DropdownDivider />
          <DropdownItem>Salir</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          
        </NavbarLink>
        <NavbarLink href="#"></NavbarLink>
        <NavbarLink href="#"></NavbarLink>
        <NavbarLink href="#"></NavbarLink>
        <NavbarLink href="#"></NavbarLink>
      </NavbarCollapse>
    </Navbar>
    </>
  );
}
