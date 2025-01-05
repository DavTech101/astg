'use client';

import { motion } from 'motion/react';
import Logo from '@components/core/Logo';
// import { Button } from '@components/ui/button';

export function FloatingNavbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className='fixed top-4 mx-auto left-0 right-0 w-11/12 max-w-5xl bg-[#1a1a1a]/90 backdrop-blur-sm rounded-full shadow-lg py-2 px-4'
    >
      <div className='flex items-center justify-between'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='flex items-center gap-2'
        >
          <Logo className='size-14' />
        </motion.div>

        <div className='hidden md:flex items-center gap-8'>
          {[
            { name: 'Product', active: false },
            { name: 'Pricing', active: true },
            { name: 'About', active: false },
          ].map((item, index) => (
            <motion.a
              key={item.name}
              href='#'
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`text-sm font-medium ${
                item.active
                  ? 'bg-black/40 text-white px-4 py-2 rounded-full'
                  : 'text-gray-300 hover:text-white transition-colors'
              }`}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button className='bg-[#98FB98] hover:bg-[#98FB98]/90 text-black font-medium rounded-full px-6'>
            Contact Us
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
}
