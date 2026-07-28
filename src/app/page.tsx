import AboutSection from './packages/components/about/about-section';
import Header from './packages/components/header/header';
import './ui/styles/globals.scss';
import Footer from './packages/components/footer/footer';
import { GoToWhatsapp } from './packages/components/go-to-whatsapp/go-to-whatsapp';
import { BackToTopButton } from './packages/components/back-to-top/back-to-top-button';
import Banner from './packages/components/banner/banner';
import Servicos from './packages/components/servicos/servicos';
import VideosSection from './packages/components/videos/videos-section';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Servicos />
      <VideosSection />
      <AboutSection />
      <GoToWhatsapp />
      <BackToTopButton />
      <Footer />
    </>
  );
}
