import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import MainContent from '@/components/MainContent';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
}
