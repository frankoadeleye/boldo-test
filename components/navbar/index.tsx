import Button from "common/button";
import Logo from "common/logo";
import Link from "next/link";
import { NavbarBlock, NavItemsBlock } from "./styled";

function Navbar() {
  return (
    <NavbarBlock>
      <Logo />
      <NavItems />
    </NavbarBlock>
  );
}

const NavItems = () => {
  return (
    <NavItemsBlock>
      {NavData.map((itemData: { name: string; route: string }, index) => {
        return (
          <Link href={itemData.route} key={index}>
            <a>{itemData.name}</a>
          </Link>
        );
      })}
      <Button text="Login" />
    </NavItemsBlock>
  );
};

const NavData = [
  {
    name: "Product",
    route: "/",
  },
  {
    name: "Services",
    route: "/",
  },
  {
    name: "About",
    route: "/",
  },
];

export default Navbar;
