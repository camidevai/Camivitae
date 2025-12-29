import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Camivitae
            </h1>
          </Link>

          {/* Navigation Links - Placeholder for future navigation */}
          <div className="flex items-center space-x-6">
            {/* Future navigation items will go here */}
          </div>
        </nav>
      </div>
    </header>
  );
}

