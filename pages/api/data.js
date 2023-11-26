import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'process.env.SUPABASE_URL';
const supabaseKey = 'process.env.SUPABASE_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch data from Supabase table
    const { data, error } = await supabase.from('tce_ppk').select('*');

    if (error) {
      return res.status(500).json({ error: 'Error fetching data from Supabase' });
    }

    return res.status(200).json(data);
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
