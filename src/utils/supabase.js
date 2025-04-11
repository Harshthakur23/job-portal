
import { createClient } from '@supabase/supabase-js';
import header from '../components/header';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;


const supabaseClient = async()=>{
    const supabase = createClient(supabaseUrl, supabaseKey, {
        global: {
            headers: {
                Authorization: `Bearer ${supabaseAcessToken}`,
            },
        },
    });
};

export default supabase
        