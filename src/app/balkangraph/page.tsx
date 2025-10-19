import Link from 'next/link';
import FamilyTreeComponent from '../components/FamilyTreeComponent';

export default function BalkangraphPage() {
  return (
    <main style={{ width: '100%', height: '100vh', padding: 0, margin: 0, position: 'relative' }}>
      {/* Navigation */}
      <div style={{ 
        position: 'absolute', 
        top: '20px', 
        left: '20px', 
        zIndex: 1000,
        background: 'white',
        padding: '10px 20px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <Link 
          href="/" 
          style={{ 
            color: '#666', 
            textDecoration: 'none',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          ← Назад на Главную
        </Link>
      </div>

      <div style={{ width: '100%', height: '100vh' }}>
        <FamilyTreeComponent />
      </div>
    </main>
  );
}
