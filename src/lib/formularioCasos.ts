import pool from './db';

export async function insertarFormularioCasosExito(nombre: string, correo: string, telefono: string) {
  const sql = `
    INSERT INTO FormularioCasosExito (nombre, correo, telefono, fecha_envio, estado)
    VALUES (?, ?, ?, NOW(), 'nuevo')
  `;
  await pool.execute(sql, [nombre, correo, telefono]);
}
