import React, { useState } from 'react';
import NavItem from './NavItems';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png';
import CartBag from './CartBag';

const Navbar = () => {
  const nav = [
    { text: 'Home', href: '/' },
    { text: 'Shop', href: '/Shop' },
    { text: 'Contact', href: '/Contact' },
    { text: 'About', href: '/About' },
    { text: 'Blog', href: '/Blog' },
  ];

  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={'/'}>
          <a>
            <Image src={logo} alt="logo" />
          </a>
        </Link>
        <Link href="/Carts">
          <a>
            <CartBag />
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
          {nav.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
