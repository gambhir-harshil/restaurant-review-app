import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://czknoobowriypwmqohhc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6a25vb2Jvd3JpeXB3bXFvaGhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4NTk1NzEsImV4cCI6MjAxNzQzNTU3MX0.eS3UhF5S8jgFttLtzDd8W5SZ0Y8YmPmOfl2Qj1kOXj4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
