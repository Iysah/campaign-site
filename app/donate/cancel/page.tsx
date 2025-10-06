export default function DonateCancelPage() {
  return (
    <main className="container pt-24 px-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="font-heading text-2xl mb-2">Donation cancelled</h1>
        <p className="text-gray-700">No worries. You can try again at any time—every naira counts.</p>
        <a href="/donate" className="inline-block mt-4 px-4 py-2 rounded bg-[var(--secondary)] text-white">Return to Donate</a>
      </div>
    </main>
  );
}