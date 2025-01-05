import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import cn from '@utils/styleMerger';
import { HOME_ROUTE } from '@data/routes';
import LineSkeleton from '@components/skeletons/LineSkeleton';
import { COMPANY_LOGO, COMPANY_LOGO_ALT } from '@data/companyData';

//##########################################################################################
// LOGO TYPES
//##########################################################################################
type LogoProps = {
  className?: string;
};

//##########################################################################################
// LOGO COMPONENT
//##########################################################################################
const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link href={HOME_ROUTE}>
      <div
        className={cn('size-20', 'relative my-auto overflow-hidden', className)}
      >
        <Suspense fallback={<LineSkeleton h='h-20' />}>
          <Image
            fill
            src={COMPANY_LOGO}
            alt={COMPANY_LOGO_ALT}
            className='object-cover object-center'
          />
        </Suspense>
      </div>
    </Link>
  );
};

export default Logo;
