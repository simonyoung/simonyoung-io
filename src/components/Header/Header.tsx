import { Logo } from '@/components/Header/Logo';
import { Hamburger } from '@/components/Header/Hamburger';
import { NavBar } from '@/components/Header/NavBar';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <div className="container mx-auto flex flex-wrap p-2 pt-4 flex-row items-center">
          <div className="flex w-2/5 flex-wrap items-center text-base ml-auto"></div>
          <Logo />
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>

      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
