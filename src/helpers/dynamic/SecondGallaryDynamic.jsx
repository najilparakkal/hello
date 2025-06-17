import dynamic from 'next/dynamic';

export const SecondGalleryDynamic = dynamic(
    () => import('../components/SecondGallery'), 
    { 
      loading: () => <p>Loading gallery...</p>,
      ssr: true
    }
  );