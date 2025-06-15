
"use client";

import { Card, Button, Checkbox, Label, TextInput } from "flowbite-react";
import Logo from "../assets/Logo.jpeg"


export function FormLogin() {
  return (
    <>
    <Card
      className="max-w-sm"
      
    >
        <img src={Logo}  className="rounded-2xl"/>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1">Email</Label>
          </div>
          <TextInput id="email1" type="email" placeholder="name@impresion-a.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1">Password</Label>
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Recordar</Label>
        </div>
        <Button type="submit">Ingresar</Button>
      </form>
    </Card>
    </>
  );
}
