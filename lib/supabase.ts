// Cliente Supabase — server-side com a secret key.
// NUNCA expor a secret key pro client.

import { createClient } from "@supabase/supabase-js";

export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) {
    throw new Error("Faltando NEXT_PUBLIC_SUPABASE_URL ou SUPABASE_SECRET_KEY");
  }
  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
