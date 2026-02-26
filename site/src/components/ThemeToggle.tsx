import { createSignal, onMount, Show } from 'solid-js';
import { Moon, Sun } from 'lucide-solid';
import { getTheme, setTheme, applyTheme, type Theme } from '../lib/theme';
import { cn } from '../lib/utils';

export default function ThemeToggle() {
  const [isDark, setIsDark] = createSignal(false);
  const [mounted, setMounted] = createSignal(false);

  onMount(() => {
    const theme = getTheme();
    const dark = theme === 'dark' || 
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(dark);
    setMounted(true);
    applyTheme(theme);
  });

  function toggleTheme() {
    const newIsDark = !isDark();
    setIsDark(newIsDark);
    const newTheme: Theme = newIsDark ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <button
      onClick={toggleTheme}
      class={cn(
        "inline-flex items-center justify-center rounded-md p-2",
        "text-foreground hover:bg-accent hover:text-accent-foreground",
        "transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      )}
      aria-label={isDark() ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark() ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Show when={mounted()} fallback={<div class="h-5 w-5" />}>
        {isDark() ? (
          <Sun class="h-5 w-5" />
        ) : (
          <Moon class="h-5 w-5" />
        )}
      </Show>
    </button>
  );
}

