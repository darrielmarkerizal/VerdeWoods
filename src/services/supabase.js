import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ggeupujxvypwoomrgeky.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnZXVwdWp4dnlwd29vbXJnZWt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0MTQ5MjEsImV4cCI6MjAwNzk5MDkyMX0.dnEFzFu0fDEFO_9VgF_I8wEipEqoYWRy9uC34XoY0HE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
