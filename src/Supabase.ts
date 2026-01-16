import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../schema';

// Configuración de Supabase
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Cliente de Supabase tipado
let supabaseClient: SupabaseClient<Database> | null = null;

/**
 * Obtiene la instancia tipada del cliente de Supabase
 * @returns {SupabaseClient<Database>} Cliente de Supabase tipado
 */
export function getSupabaseClient(): SupabaseClient<Database> {
  if (!supabaseClient) {
    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Las variables de entorno SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY son requeridas');
    }
    
    supabaseClient = createClient<Database>(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });
  }
  
  return supabaseClient;
}

// Instancia tipada por defecto
export const supabase = getSupabaseClient();