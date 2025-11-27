import { createSignal, Show, onMount } from 'solid-js';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [isLoggedIn, setIsLoggedIn] = createSignal(false);

  onMount(() => {
    // Check if user is logged in
    const token = localStorage.getItem('auth_token');
    setIsLoggedIn(!!token);
  });

  return (
    <>
      <style>{`
        .nav-menu {
          display: none;
        }
        @media (min-width: 768px) {
          .nav-menu {
            display: flex !important;
            position: static !important;
            flex-direction: row !important;
            background: transparent !important;
            padding: 0 !important;
          }
        }
        .nav-menu.open {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(26, 26, 46, 0.98);
          padding: 1rem;
          gap: 1rem;
        }
        .menu-toggle {
          background: transparent;
          border: none;
          color: #d4af37;
          cursor: pointer;
          font-size: 1.5rem;
        }
        @media (min-width: 768px) {
          .menu-toggle {
            display: none;
          }
        }
      `}</style>
      <nav style={{
        background: 'rgba(26, 26, 46, 0.95)',
        'backdrop-filter': 'blur(10px)',
        position: 'sticky',
        top: '0',
        'z-index': '1000',
        'border-bottom': '1px solid rgba(212, 175, 55, 0.2)',
      }}>
        <div style={{
          'max-width': '1200px',
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          'justify-content': 'space-between',
          'align-items': 'center',
        }}>
          <a href="/" style={{
            'font-size': '1.5rem',
            'font-weight': 'bold',
            color: '#d4af37',
            'font-family': 'Georgia, serif',
          }}>
            GSO
          </a>
          
          <div style={{ display: 'flex', 'align-items': 'center', gap: '2rem', position: 'relative' }}>
            <div class={`nav-menu ${isMenuOpen() ? 'open' : ''}`}>
              <a href="/">Home</a>
              <a href="/season">Season</a>
              <a href="/about">About</a>
              <a href="/members">Members</a>
              <a href="/contact">Contact</a>
              <Show when={isLoggedIn()}>
                <a href="/admin">Admin</a>
              </Show>
            </div>
            
            <button
              class="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen())}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
