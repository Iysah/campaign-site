import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-24">
      <div className="text-center px-4">
        <h1 className="font-heading text-4xl mb-4">Page Not Found</h1>
        <p className="mb-6">We couldn't find what you're looking for.</p>
        <Link href="/" className="px-6 py-3 rounded-full bg-[var(--primary)] text-white">Return Home</Link>
      </div>
    </main>
  );
}