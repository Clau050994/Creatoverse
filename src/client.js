import { createClient } from "@supabase/supabase-js";

const url = 'https://crbgjmnaqxpkzefxrrek.supabase.co';
const key ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyYmdqbW5hcXhwa3plZnhycmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NzA5NzksImV4cCI6MjAzNTU0Njk3OX0.RFf3_AKN6R2AsEWgApnutVxCdeMlFk7Wpy73jOOgjz4';
const supabase = createClient(url, key);

export default supabase;