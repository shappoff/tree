import FamilyTreeComponent from './components/FamilyTreeComponent';

import styles from "./page.module.css";

export default function Home() {
  return (
      <main style={{ width: '100%', height: '100vh', padding: 0, margin: 0 }}>
        <div style={{ width: '100%', height: 'calc(100vh - 80px)' }}>
          <FamilyTreeComponent />
        </div>
      </main>
  );
}
