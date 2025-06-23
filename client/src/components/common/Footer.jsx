export default function Footer() {
  return (
    <footer className="w-full bg-brand-primary/5 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center text-brand-gray">
        &copy; {new Date().getFullYear()} Swanthana. All rights reserved.
      </div>
    </footer>
  );
}
