'use client';

import { useEffect } from 'react';
import useScreen from '@shared/hooks/useScreen';
import useIsMounted from '@shared/hooks/useIsMounted';
import Hamburger from '@components/core/navbar/Hamburger';
import useNavMenuStore from '@shared/stores/useNavMenuStore';

//##########################################################################################
// NAV MENU TYPES
//##########################################################################################
type NavMenuProps = {};

//##########################################################################################
// NAV MENU COMPONENT
//##########################################################################################
const NavMenu: React.FC<NavMenuProps> = () => {
  const [isMobile] = useScreen();
  const isMounted = useIsMounted();
  const { isOpen, onOpen, onClose } = useNavMenuStore();

  const toggleMenu = () => {
    if (1 == 1) {
      ('onClose');
    } else {
      ('onOpen()');
    }
  };

  useEffect(() => {
    onClose();
  }, [isMobile, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // HYDRATION GUARD
  if (!isMounted) return null;

  return (
    <div className='relative flex items-center justify-center gap-5'>
      {/* HAMBURGER MENU */}
      <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default NavMenu;
