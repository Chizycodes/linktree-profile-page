import './App.css'
import LinksSection from './components/LinksSection';
import ProfileSection from './components/ProfileSection';
import Socials from './components/Socials';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="pt-[64px] pb-[34px]">
      <section>
        <ProfileSection />
      </section>
      
      <section className="">
        <LinksSection />
      </section>
      
      <section className="">
        <Socials />
      </section>
      
      <section className="">
        <Footer />
      </section>
    </main>
  );
}
