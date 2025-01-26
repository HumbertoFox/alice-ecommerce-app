import HeaderComponent from '@/components/header';
import NecklacesComponent from '@/components/necklace';
import SlidesMainComponent from '@/components/slide';

export default function HomePage() {
  return (
    <div className='relative w-full min-h-screen'>
      <HeaderComponent />
      <SlidesMainComponent />
      <main className='w-full max-w-screen-2xl mx-auto'>
        <NecklacesComponent />
      </main>
    </div>
  );
}