import { createSignal, Show } from 'solid-js';

interface Article {
  id?: string;
  title: string;
  content: string;
  author: string;
  publishedAt?: string;
  featured?: boolean;
}

export default function ArticleEditor() {
  const [title, setTitle] = createSignal('');
  const [content, setContent] = createSignal('');
  const [author, setAuthor] = createSignal('');
  const [featured, setFeatured] = createSignal(false);
  const [loading, setLoading] = createSignal(false);
  const [message, setMessage] = createSignal<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const token = localStorage.getItem('auth_token');
    if (!token) {
      setMessage({ type: 'error', text: 'Not authenticated' });
      setLoading(false);
      return;
    }

    try {
      const article: Article = {
        title: title(),
        content: content(),
        author: author(),
        featured: featured(),
      };

      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(article),
      });

      if (!response.ok) {
        throw new Error('Failed to save article');
      }

      setMessage({ type: 'success', text: 'Article saved successfully!' });
      setTitle('');
      setContent('');
      setAuthor('');
      setFeatured(false);
    } catch (error) {
      setMessage({ type: 'error', text: error instanceof Error ? error.message : 'An error occurred' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      'max-width': '800px',
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
        Create Article
      </h2>

      <div style={{ 'margin-bottom': '1rem' }}>
        <label style={{ display: 'block', 'margin-bottom': '0.5rem', color: '#f5f5f5' }}>
          Title
        </label>
        <input
          type="text"
          value={title()}
          onInput={(e) => setTitle(e.currentTarget.value)}
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

      <div style={{ 'margin-bottom': '1rem' }}>
        <label style={{ display: 'block', 'margin-bottom': '0.5rem', color: '#f5f5f5' }}>
          Author
        </label>
        <input
          type="text"
          value={author()}
          onInput={(e) => setAuthor(e.currentTarget.value)}
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

      <div style={{ 'margin-bottom': '1rem' }}>
        <label style={{ display: 'block', 'margin-bottom': '0.5rem', color: '#f5f5f5' }}>
          Content
        </label>
        <textarea
          value={content()}
          onInput={(e) => setContent(e.currentTarget.value)}
          required
          rows={10}
          style={{
            width: '100%',
            padding: '0.75rem',
            background: 'rgba(26, 26, 46, 0.8)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            'border-radius': '4px',
            color: '#f5f5f5',
            'font-size': '1rem',
            'font-family': 'inherit',
          }}
        />
      </div>

      <div style={{ 'margin-bottom': '1.5rem' }}>
        <label style={{ display: 'flex', 'align-items': 'center', gap: '0.5rem', color: '#f5f5f5' }}>
          <input
            type="checkbox"
            checked={featured()}
            onChange={(e) => setFeatured(e.currentTarget.checked)}
            style={{ width: '1.2rem', height: '1.2rem' }}
          />
          Featured Article
        </label>
      </div>

      <Show when={message()}>
        <div style={{
          padding: '0.75rem',
          background: message()?.type === 'success' 
            ? 'rgba(76, 175, 80, 0.2)' 
            : 'rgba(233, 69, 96, 0.2)',
          border: `1px solid ${message()?.type === 'success' ? '#4caf50' : '#e94560'}`,
          'border-radius': '4px',
          'margin-bottom': '1rem',
          color: message()?.type === 'success' ? '#4caf50' : '#e94560',
        }}>
          {message()?.text}
        </div>
      </Show>

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
        {loading() ? 'Saving...' : 'Save Article'}
      </button>
    </form>
  );
}

