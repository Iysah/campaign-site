type Entry = { count: number; expiresAt: number };
const store = new Map<string, Entry>();

export function rateLimit(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const existing = store.get(key);
  if (!existing || existing.expiresAt < now) {
    store.set(key, { count: 1, expiresAt: now + windowMs });
    return { ok: true } as const;
  }
  if (existing.count >= limit) {
    return { ok: false } as const;
  }
  existing.count += 1;
  store.set(key, existing);
  return { ok: true } as const;
}