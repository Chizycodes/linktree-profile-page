import './App.css'
import LinksSection from './components/LinksSection';
import ProfileSection from './components/ProfileSection';

export default function App() {
  return (
    <main className="w-full">
      <div>
        <ProfileSection />
      </div>
      <div className="w-full">
        <LinksSection />
      </div>
    </main>
  );
}
