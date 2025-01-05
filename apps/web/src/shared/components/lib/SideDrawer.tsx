// import { Button } from '@components/ui/button';
import useNavMenuStore from '@shared/stores/useNavMenuStore';

// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from '@components/ui/sheet';

//##########################################################################################
// SIDE DRAWER TYPES
//##########################################################################################
type SideDrawerProps = {};

//##########################################################################################
// SIDE DRAWER COMPONENT
//##########################################################################################
const SideDrawer: React.FC<SideDrawerProps> = () => {
  const { isOpen, onOpen, onClose } = useNavMenuStore();
  return (
    <>
      {/* <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>Open</Button>
        </SheetTrigger>
        
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className='grid gap-4 py-4'></div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type='submit'>Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet> */}
    </>
  );
};

export default SideDrawer;
