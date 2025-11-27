import { createSignal } from 'solid-js';

interface LoginFormProps {
  type: 'member' | 'editor' | 'board';
  onSuccess?: () => void;
}

export default function LoginForm(props: LoginFormProps) {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [error, setError] = createSignal('');
  const [loading, setLoading] = createSignal(false);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: props.type,
          email: email(),
          password: password(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      localStorage.setItem('auth_token', data.token);
      localStorage.setItem('user_role', data.role);
      if (data.email) {
        localStorage.setItem('user_email', data.email);
      }

      if (props.onSuccess) {
        props.onSuccess();
      } else {
        window.location.href = '/';
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      'max-width': '400px',
      margin: '2rem auto',
      padding: '2rem',
      background: 'rgba(22, 33, 62, 0.8)',
      'border-radius': '8px',
      'border': '1px solid rgba(212, 175, 55, 0.3)',
    }}>
      <h2 style={{
        'margin-bottom': '1.5rem',
        color: '#d4af37',
        'font-family': 'Georgia, serif',
      }}>
        {props.type === 'member' && 'Members Login'}
        {props.type === 'editor' && 'Editor Login'}
        {props.type === 'board' && 'Board Member Login'}
      </h2>

      {props.type !== 'member' && (
        <div style={{ 'margin-bottom': '1rem' }}>
          <label style={{ display: 'block', 'margin-bottom': '0.5rem', color: '#f5f5f5' }}>
            Email
          </label>
          <input
            type="email"
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'rgba(26, 26, 46, 0.8)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              'border-radius': '4px',
              color: '#f5f5f5',
              'font-size': '1rem',
            }}
          />
        </div>
      )}

      {props.type !== 'board' && (
        <div style={{ 'margin-bottom': '1rem' }}>
          <label style={{ display: 'block', 'margin-bottom': '0.5rem', color: '#f5f5f5' }}>
            {props.type === 'member' ? 'Password' : 'Password'}
          </label>
          <input
            type="password"
            value={password()}
            onInput={(e) => setPassword(e.currentTarget.value)}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'rgba(26, 26, 46, 0.8)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              'border-radius': '4px',
              color: '#f5f5f5',
              'font-size': '1rem',
            }}
          />
        </div>
      )}

      {props.type === 'board' && (
        <p style={{ 'margin-bottom': '1rem', color: '#b0b0b0', 'font-size': '0.9rem' }}>
          Please use your @germantownsymphony.org email address
        </p>
      )}

      {error() && (
        <div style={{
          padding: '0.75rem',
          background: 'rgba(233, 69, 96, 0.2)',
          border: '1px solid #e94560',
          'border-radius': '4px',
          'margin-bottom': '1rem',
          color: '#e94560',
        }}>
          {error()}
        </div>
      )}

      <button
        type="submit"
        disabled={loading()}
        style={{
          width: '100%',
          padding: '0.75rem',
          background: '#d4af37',
          color: '#1a1a2e',
          border: 'none',
          'border-radius': '4px',
          'font-size': '1rem',
          'font-weight': 'bold',
          cursor: loading() ? 'not-allowed' : 'pointer',
          opacity: loading() ? 0.6 : 1,
        }}
      >
        {loading() ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}

