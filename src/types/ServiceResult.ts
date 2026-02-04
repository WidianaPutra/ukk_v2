export type GeneralServiceResult<T> =
  | { ok: true; data: T }
  | { ok: true; data: T[] }
  | { ok: false; error: string };

export type AuthServiceResult =
  | { ok: true; token: string }
  | { ok: false; error: string };

// export type GeneralServiceResult =
//  | {ok: true}
