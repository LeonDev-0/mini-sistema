import { createClient } from "@supabase/supabase-js";
const url='https://hrxffgxmtjdrwomttuxl.supabase.co'
const key='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyeGZmZ3htdGpkcndvbXR0dXhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0ODcwNjYsImV4cCI6MjAyOTA2MzA2Nn0.mI8B3_gyRKfsIOMa-ZFDT_sejIowzx2qi_HMiodqPJY'
export const supabase = createClient(url,key
);
