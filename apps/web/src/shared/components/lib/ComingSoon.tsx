import cn from '@utils/styleMerger';
import Logo from '@components/core/Logo';
import Container from '@components/lib/Container';
import { COMPANY_NAME, TAGLINE } from '@data/companyData';

//##########################################################################################
// COMING SOON TYPES
//##########################################################################################
type ComingSoonProps = {};

//##########################################################################################
// COMING SOON COMPONENT
//##########################################################################################
const ComingSoon: React.FC<ComingSoonProps> = () => {
  return (
    <div
      className={cn(
        'absolute inset-0 z-50 flex h-screen flex-col',
        'items-center justify-center gap-5 bg-white'
      )}
    >
      <Container className='flex flex-col items-center justify-center gap-5'>
        <Logo className='size-40' />
        <h1 className='text-center text-4xl font-medium capitalize text-app-primary'>
          {COMPANY_NAME}
        </h1>
        <p className='max-w-[35rem] text-center text-2xl font-bold text-app-primary'>
          {TAGLINE}
        </p>
        <p className='text-lg text-app-primary-lighter'>Coming soon...</p>
      </Container>
    </div>
  );
};

export default ComingSoon;
