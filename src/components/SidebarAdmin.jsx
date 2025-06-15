"use client";

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { Link } from "react-router";

export function SidebarAdmin() {
  return (
    <Sidebar className="h-screen">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem icon={HiChartPie}>
            <Link to="/preciosmasivos">Precios Masivos</Link>
          </SidebarItem>
          <SidebarItem icon={HiViewBoards}>
            <Link to="/almacenes">Almacenes</Link>
          </SidebarItem>
          <SidebarItem icon={HiInbox}>
            <Link to="/creditos">Creditos</Link>
          </SidebarItem>
          <SidebarItem icon={HiUser}>
            <Link to="/clientes">Clientes</Link>
          </SidebarItem>
          <SidebarItem icon={HiShoppingBag}>
            <Link to="/productos">Productos</Link>
          </SidebarItem>
        </SidebarItemGroup>
        <SidebarItemGroup>
          
          <SidebarItem icon={HiArrowSmRight}><Link to="login">Salir</Link></SidebarItem>
          
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
