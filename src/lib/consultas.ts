import pool from './db';

export async function insertarConsulta(
  nombre: string,
  apellidos: string,
  correo: string,
  telefono: string,
  mensaje: string
) {
  const sql = `
    INSERT INTO Consultas (nombre, apellidos, correo, telefono, mensaje, fecha_envio, estado)
    VALUES (?, ?, ?, ?, ?, NOW(), 'nuevo')
  `;
  await pool.execute(sql, [nombre, apellidos, correo, telefono, mensaje]);
}
