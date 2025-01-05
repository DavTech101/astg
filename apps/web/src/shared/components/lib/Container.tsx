import cn from '@utils/styleMerger';

//##########################################################################################
// CONTAINER TYPES
//##########################################################################################
type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

//##########################################################################################
// CONTAINER STYLES
//##########################################################################################
export const containerPaddingStyles = 'px-6 lg:px-8';
export const containerWidthStyles = 'mx-auto xl:max-w-7xl';

//##########################################################################################
// CONTAINER COMPONENT
//##########################################################################################
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(containerPaddingStyles, containerWidthStyles, className)}
    >
      {children}
    </div>
  );
};

export default Container;
