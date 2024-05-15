import { createClient } from "@supabase/supabase-js";
const url='https://ppjycaopepgezicyvpgm.supabase.co'
const key='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwanljYW9wZXBnZXppY3l2cGdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4MDczOTgsImV4cCI6MjAzMTM4MzM5OH0.e447N1jnzKsRRZDtBg1D9Sh-PoTI1UqetGn4I2EGFmI'
export const supabase = createClient(url,key
);
