export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full glass mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {currentYear} Camivitae. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

