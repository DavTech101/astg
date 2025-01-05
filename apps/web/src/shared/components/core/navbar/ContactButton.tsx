import cn from '@utils/styleMerger';
import { motion } from 'motion/react';
import { Button } from '@astg/elements';

//##########################################################################################
// CONTACT BUTTON TYPES
//##########################################################################################
type ContactButtonProps = {};

//##########################################################################################
// CONTACT BUTTON COMPONENT
//##########################################################################################
const ContactButton: React.FC<ContactButtonProps> = () => {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Button
        className={cn(
          'font-medium rounded-full px-6',
          'bg-app-primary-light hover:bg-app-primary-lighter hover:scale-110'
        )}
      >
        Contact Us
      </Button>
    </motion.div>
  );
};

export default ContactButton;
