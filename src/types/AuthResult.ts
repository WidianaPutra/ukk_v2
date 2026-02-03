export type AuthResult =
  | { ok: true; token: string }
  | { ok: false; error: string };
