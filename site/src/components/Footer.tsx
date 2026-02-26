import { cn } from '../lib/utils';

export default function Footer() {
  return (
    <footer class="border-t bg-muted/50 mt-16">
      <div class="container mx-auto px-4 md:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 class="text-gold font-serif text-lg font-semibold uppercase tracking-wide mb-4">
              Connect With Us
            </h3>
            <div class="flex gap-4 mb-4 flex-wrap">
              <a 
                href="https://www.facebook.com/germantownsymphony" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-teal hover:text-teal-light transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/germantownsymphony" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-teal hover:text-teal-light transition-colors"
              >
                Instagram
              </a>
              <a 
                href="mailto:info@germantownsymphony.org" 
                class="text-teal hover:text-teal-light transition-colors"
              >
                Email
              </a>
            </div>
            <a href="/members" class="text-teal hover:text-teal-light transition-colors">
              Member Login
            </a>
          </div>
          
          <div>
            <h3 class="text-gold font-serif text-lg font-semibold uppercase tracking-wide mb-4">
              Subscribe
            </h3>
            <p class="text-muted-foreground mb-4 leading-relaxed">
              Subscribe to our email newsletter for updates and concert announcements.
            </p>
            <a 
              href="mailto:info@germantownsymphony.org?subject=Subscribe" 
              class="text-teal hover:text-teal-light transition-colors"
            >
              SUBSCRIBE TO Email
            </a>
          </div>
          
          <div>
            <h3 class="text-gold font-serif text-lg font-semibold uppercase tracking-wide mb-4">
              Policies
            </h3>
            <div class="flex flex-col gap-2">
              <a href="/privacy-policy" class="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/nondiscrimination-policy" class="text-muted-foreground hover:text-foreground transition-colors">
                Nondiscrimination Policy
              </a>
            </div>
          </div>
        </div>
        
        <div class="border-t pt-8 text-center">
          <p class="text-muted-foreground text-sm mb-2">
            Community Orchestra of the Mid-South.
          </p>
          <p class="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Germantown Symphony Orchestra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
