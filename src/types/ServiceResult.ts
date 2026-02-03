export type ServiceResultType<T> =
  | { ok: true; data: T }
  | { ok: true; data: T[] }
  | { ok: false; error: string }
  | { ok: true; data: string };
