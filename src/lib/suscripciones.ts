import pool from './db';

export async function insertarSuscripcion(email: string) {
  const sql = `
    INSERT INTO SuscripcionesBoletin (email, fecha_alta, confirmado)
    VALUES (?, NOW(), false)
  `;
  await pool.execute(sql, [email]);
}
