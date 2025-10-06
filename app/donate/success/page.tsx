export default function DonateSuccessPage() {
  return (
    <main className="container pt-24 px-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="font-heading text-2xl mb-2">Thank you for your donation!</h1>
        <p className="text-gray-700">Your support helps us reach more families and communities across Benue.</p>
        <a href="/donate" className="inline-block mt-4 px-4 py-2 rounded bg-[var(--accent)] text-white">Back to Donate</a>
      </div>
    </main>
  );
}