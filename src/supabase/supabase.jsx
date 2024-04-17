import { createClient } from "@supabase/supabase-js";
const url='https://gbigtekadifijicuveke.supabase.co'
const key='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiaWd0ZWthZGlmaWppY3V2ZWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzMjk5MzUsImV4cCI6MjAyODkwNTkzNX0.nUEVoJeqvoHYYxgCAP-t0_rzDoyYJxkYwJQzBxQkYKw'
export const supabase = createClient(url,key
);
