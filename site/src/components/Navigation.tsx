import { createSignal, Show, onMount } from 'solid-js';
import ThemeToggle from './ThemeToggle';
import { cn } from '../lib/utils';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [isLoggedIn, setIsLoggedIn] = createSignal(false);
  const [openDropdown, setOpenDropdown] = createSignal<string | null>(null);

  onMount(() => {
    // Check if user is logged in
    const token = localStorage.getItem('auth_token');
    setIsLoggedIn(!!token);
  });

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown() === name ? null : name);
  };

  return (
    <nav class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-16 items-center justify-between px-4 md:px-8">
        <a href="/" class="flex items-center h-[54px]">
          <img 
            src="/gso-final-logo-2023-transparent.png" 
            alt="Germantown Symphony Orchestra"
            class="h-[54px] w-auto object-contain"
          />
        </a>
        
        <div class="flex items-center gap-4 md:gap-6 relative">
          <div class={cn(
            "hidden md:flex items-center gap-6",
            isMenuOpen() && "flex flex-col absolute top-full left-0 right-0 bg-background border-b p-6 gap-4 shadow-lg"
          )}>
            <a href="/" class="text-sm font-medium uppercase tracking-wide text-foreground hover:text-teal transition-colors">
              Home
            </a>
            
            <div 
              class="relative group"
              onMouseEnter={() => window.innerWidth > 767 && setOpenDropdown('season')}
              onMouseLeave={() => window.innerWidth > 767 && setOpenDropdown(null)}
            >
              <a 
                href="/season"
                onClick={(e) => {
                  if (window.innerWidth <= 767) {
                    e.preventDefault();
                    toggleDropdown('season');
                  }
                }}
                class="text-sm font-medium uppercase tracking-wide text-foreground hover:text-teal transition-colors flex items-center gap-1"
              >
                2025-2026 Season
                <span class="text-xs">▼</span>
              </a>
              <div 
                class={cn(
                  "absolute top-full left-0 pt-1 min-w-[220px] bg-popover border border-border rounded-md shadow-lg p-2 z-50",
                  openDropdown() === 'season' ? 'block' : 'hidden',
                  "md:group-hover:block"
                )}
                onMouseEnter={() => window.innerWidth > 767 && setOpenDropdown('season')}
                onMouseLeave={() => window.innerWidth > 767 && setOpenDropdown(null)}
              >
                <a href="/season/young-artist" class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm">
                  Nov 8 - Young Artist
                </a>
                <a href="/season/holiday-concert" class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm">
                  Dec 13 - Germantown Holiday Concert
                </a>
              </div>
            </div>
            
            <div 
              class="relative group"
              onMouseEnter={() => window.innerWidth > 767 && setOpenDropdown('about')}
              onMouseLeave={() => window.innerWidth > 767 && setOpenDropdown(null)}
            >
              <a 
                href="/about"
                onClick={(e) => {
                  if (window.innerWidth <= 767) {
                    e.preventDefault();
                    toggleDropdown('about');
                  }
                }}
                class="text-sm font-medium uppercase tracking-wide text-foreground hover:text-teal transition-colors flex items-center gap-1"
              >
                About
                <span class="text-xs">▼</span>
              </a>
              <div 
                class={cn(
                  "absolute top-full left-0 pt-1 min-w-[220px] bg-popover border border-border rounded-md shadow-lg p-2 z-50",
                  openDropdown() === 'about' ? 'block' : 'hidden',
                  "md:group-hover:block"
                )}
                onMouseEnter={() => window.innerWidth > 767 && setOpenDropdown('about')}
                onMouseLeave={() => window.innerWidth > 767 && setOpenDropdown(null)}
              >
                <div class="relative group/sub">
                  <a 
                    href="/about/music-director"
                    onClick={(e) => {
                      if (window.innerWidth <= 767) {
                        e.preventDefault();
                        toggleDropdown('music-director');
                      }
                    }}
                    class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm flex items-center justify-between"
                  >
                    Music Director
                    <span class="text-xs">▶</span>
                  </a>
                  <div 
                    class={cn(
                      "absolute left-full top-0 ml-1 min-w-[200px] bg-popover border border-border rounded-md shadow-lg p-2 z-50",
                      openDropdown() === 'music-director' ? 'block' : 'hidden',
                      "md:group-hover/sub:block"
                    )}
                    onMouseEnter={() => window.innerWidth > 767 && setOpenDropdown('music-director')}
                    onMouseLeave={() => window.innerWidth > 767 && setOpenDropdown('about')}
                  >
                    <a href="/about/music-director/vernon-to-retire" class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm">
                      Vernon to Retire
                    </a>
                  </div>
                </div>
                <a href="/about/orchestra" class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm">
                  The Orchestra
                </a>
                <a href="/about/join" class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm">
                  Join
                </a>
                <a href="/about/history" class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm">
                  History
                </a>
                <a href="/about/outreach" class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm">
                  Outreach
                </a>
                <div class="relative group/sub">
                  <a 
                    href="/about/board-of-directors"
                    onClick={(e) => {
                      if (window.innerWidth <= 767) {
                        e.preventDefault();
                        toggleDropdown('board');
                      }
                    }}
                    class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm flex items-center justify-between"
                  >
                    Board of Directors
                    <span class="text-xs">▶</span>
                  </a>
                  <div 
                    class={cn(
                      "absolute left-full top-0 ml-1 min-w-[200px] bg-popover border border-border rounded-md shadow-lg p-2 z-50",
                      openDropdown() === 'board' ? 'block' : 'hidden',
                      "md:group-hover/sub:block"
                    )}
                    onMouseEnter={() => window.innerWidth > 767 && setOpenDropdown('board')}
                    onMouseLeave={() => window.innerWidth > 767 && setOpenDropdown('about')}
                  >
                    <a href="/about/board-of-directors/board-meeting" class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm">
                      Board Meeting
                    </a>
                    <a href="/about/board-of-directors/by-law" class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm">
                      By-Law
                    </a>
                  </div>
                </div>
                <a href="/contact" class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm">
                  Contact
                </a>
              </div>
            </div>
            
            <div 
              class="relative group"
              onMouseEnter={() => window.innerWidth > 767 && setOpenDropdown('concerto')}
              onMouseLeave={() => window.innerWidth > 767 && setOpenDropdown(null)}
            >
              <a 
                href="/concerto-competition-2026"
                onClick={(e) => {
                  if (window.innerWidth <= 767) {
                    e.preventDefault();
                    toggleDropdown('concerto');
                  }
                }}
                class="text-sm font-medium uppercase tracking-wide text-foreground hover:text-teal transition-colors flex items-center gap-1"
              >
                Concerto Competition 2026
                <span class="text-xs">▼</span>
              </a>
              <div 
                class={cn(
                  "absolute top-full left-0 pt-1 min-w-[220px] bg-popover border border-border rounded-md shadow-lg p-2 z-50",
                  openDropdown() === 'concerto' ? 'block' : 'hidden',
                  "md:group-hover:block"
                )}
                onMouseEnter={() => window.innerWidth > 767 && setOpenDropdown('concerto')}
                onMouseLeave={() => window.innerWidth > 767 && setOpenDropdown(null)}
              >
                <a href="/concerto-competition-2026/rules" class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm">
                  Rules
                </a>
                <a href="/concerto-competition-2026/application" class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm">
                  Application
                </a>
              </div>
            </div>
            
            <div 
              class="relative group"
              onMouseEnter={() => window.innerWidth > 767 && setOpenDropdown('supporting')}
              onMouseLeave={() => window.innerWidth > 767 && setOpenDropdown(null)}
            >
              <a 
                href="/supporting"
                onClick={(e) => {
                  if (window.innerWidth <= 767) {
                    e.preventDefault();
                    toggleDropdown('supporting');
                  }
                }}
                class="text-sm font-medium uppercase tracking-wide text-foreground hover:text-teal transition-colors flex items-center gap-1"
              >
                Supporting
                <span class="text-xs">▼</span>
              </a>
              <div 
                class={cn(
                  "absolute top-full left-0 pt-1 min-w-[220px] bg-popover border border-border rounded-md shadow-lg p-2 z-50",
                  openDropdown() === 'supporting' ? 'block' : 'hidden',
                  "md:group-hover:block"
                )}
                onMouseEnter={() => window.innerWidth > 767 && setOpenDropdown('supporting')}
                onMouseLeave={() => window.innerWidth > 767 && setOpenDropdown(null)}
              >
                <a href="/supporting/donation" class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm">
                  Donation
                </a>
                <a href="/supporting/advertise" class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm">
                  Advertise
                </a>
                <a href="/supporting/supporter" class="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground rounded-sm">
                  Supporter
                </a>
              </div>
            </div>
            
            <a href="/50th-anniversary" class="text-sm font-medium uppercase tracking-wide text-foreground hover:text-teal transition-colors">
              50th Anniversary
            </a>
            <a href="/members" class="text-sm font-medium uppercase tracking-wide text-foreground hover:text-teal transition-colors">
              Members
            </a>
            <Show when={isLoggedIn()}>
              <a href="/admin" class="text-sm font-medium uppercase tracking-wide text-foreground hover:text-teal transition-colors">
                Admin
              </a>
            </Show>
          </div>
          
          <ThemeToggle client:load />
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen())}
            class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground"
            aria-label="Toggle menu"
          >
            <span class="text-xl">☰</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
