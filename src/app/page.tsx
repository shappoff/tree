import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main style={{ 
      width: '100%', 
      height: '100vh', 
      padding: '40px', 
      margin: 0, 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: '700' }}>
          Примеры Генеалогических Деревьев
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px' }}>
          Изучите различные реализации генеалогических деревьев с использованием различных библиотек и фреймворков
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        width: '100%',
        maxWidth: '900px'
      }}>
        <Link 
          href="/balkangraph" 
          className={styles.navCard}
        >
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🌳</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#2563eb' }}>
            Генеалогическое Дерево BalkanGraph
          </h3>
          <p style={{ color: '#666', lineHeight: '1.5' }}>
            Профессиональное генеалогическое дерево с расширенными возможностями используя @balkangraph/familytree.js
          </p>
        </Link>

        <Link 
          href="/react-d3-tree" 
          className={styles.navCard}
        >
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📊</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#0070f3' }}>
            React D3 Tree
          </h3>
          <p style={{ color: '#666', lineHeight: '1.5' }}>
            Интерактивная визуализация дерева с использованием библиотеки React D3 Tree с D3.js
          </p>
        </Link>

        <Link 
          href="/react-family-tree" 
          className={styles.navCard}
        >
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>👨‍👩‍👧‍👦</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#28a745' }}>
            React Family Tree
          </h3>
          <p style={{ color: '#666', lineHeight: '1.5' }}>
            Чистый и простой компонент генеалогического дерева, созданный на React
          </p>
        </Link>

        <Link 
          href="/react-complex-tree" 
          className={styles.navCard}
        >
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🌲</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#6f42c1' }}>
            React Complex Tree
          </h3>
          <p style={{ color: '#666', lineHeight: '1.5' }}>
            Продвинутый компонент дерева с функциями перетаскивания, поиска и редактирования
          </p>
        </Link>
      </div>
    </main>
  );
}
