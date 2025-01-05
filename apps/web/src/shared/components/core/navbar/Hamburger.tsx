import { animation } from '@shared/styles/coreStyles';

//##########################################################################################
// HAMBURGER TYPES
//##########################################################################################
type HamburgerProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

//##########################################################################################
// HAMBURGER COMPONENT
//##########################################################################################
const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggleMenu }) => {
  const lineStyle = `h-1 w-6 sm:w-8 bg-primary transform ${animation}`;

  return (
    <div
      onClick={toggleMenu}
      className='flex h-10 w-10 flex-col items-center justify-evenly'
    >
      {/* Hamburger Icon Lines */}
      <div
        className={`${lineStyle} ${isOpen ? 'translate-y-[0.7rem] rotate-[405deg]' : ''}`}
      />
      <div className={`${lineStyle} ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
      <div
        className={`${lineStyle} ${isOpen ? '-translate-y-[0.7rem] -rotate-[405deg]' : ''}`}
      />
    </div>
  );
};

export default Hamburger;
