export type Theme = 'light' | 'dark' | 'system';

const THEME_STORAGE_KEY = 'gso-theme';

export function getTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  
  const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  return stored || 'system';
}

export function setTheme(theme: Theme) {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  applyTheme(theme);
}

export function applyTheme(theme: Theme) {
  if (typeof window === 'undefined') return;
  
  const root = document.documentElement;
  const isDark = theme === 'dark' || 
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

export function initTheme() {
  if (typeof window === 'undefined') return;
  
  applyTheme(getTheme());
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const theme = getTheme();
    if (theme === 'system') {
      applyTheme('system');
    }
  });
}

