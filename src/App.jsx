import './App.css'
import LinksSection from './components/LinksSection';
import ProfileSection from './components/ProfileSection';

export default function App() {
  return (
    <main className="py-10">
      <section>
        <ProfileSection />
      </section>
      <section className="">
        <LinksSection />
      </section>
    </main>
  );
}
