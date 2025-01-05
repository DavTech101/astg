'use client';

import cn from '@utils/styleMerger';
import { motion } from 'motion/react';
import Logo from '@components/core/Logo';
import NavMenu from '@components/core/navbar/NavMenu';
import { containerWidthStyles } from '@components/lib/Container';

//##########################################################################################
// NAVBAR TYPES
//##########################################################################################
type NavbarProps = {};

//##########################################################################################
// NAVBAR COMPONENT
//##########################################################################################
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={cn(
        containerWidthStyles,
        'fixed top-4 mx-auto left-0 right-0 w-11/12',
        'backdrop-blur-sm rounded-full shadow-lg py-2 px-4',
        'bg-app-secondary-lighter/90'
      )}
    >
      <div className='flex items-center justify-between'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='flex items-center gap-2'
        >
          <Logo className='size-12' />
        </motion.div>

        <NavMenu />
      </div>
    </motion.nav>
  );
};

export default Navbar;
