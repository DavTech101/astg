import Navbar from '@components/core/navbar/Navbar';
import Footer from '@components/core/footer/Footer';
import ComingSoon from '@components/lib/ComingSoon';
import { SHOW_COMING_SOON } from '@shared/config/featureFlags';

//##########################################################################################
// HOME PAGE LAYOUT
//##########################################################################################
export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (SHOW_COMING_SOON) {
    return <ComingSoon />;
  }

  return (
    <>
      {/* Header */}
      <header className='mb-5'>
        <Navbar />
      </header>

      {/* Main */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
}
