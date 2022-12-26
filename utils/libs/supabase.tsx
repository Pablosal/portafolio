import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  process.env.NEXT_PUBLIC_URL_SUPABASE_PROJECT,
  process.env.NEXT_PUBLIC_BD_SUPABASE_SECRET
);

export default supabase;
