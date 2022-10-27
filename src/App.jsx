import './App.css'
import LinksSection from './components/LinksSection';
import ProfileSection from './components/ProfileSection';
import Socials from './components/Socials';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="py-10">
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
