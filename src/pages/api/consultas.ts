import type { APIRoute } from 'astro';
import { insertarConsulta } from '../../lib/consultas';

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();

  const nombre = form.get('nombre')?.toString() || '';
  const apellidos = form.get('apellidos')?.toString() || '';
  const correo = form.get('correo')?.toString() || '';
  const telefono = form.get('telefono')?.toString() || '';
  const mensaje = form.get('mensaje')?.toString() || '';

  if (!nombre || !apellidos || !correo || !telefono) {
    return new Response('Faltan datos obligatorios', { status: 400 });
  }

  try {
    await insertarConsulta(nombre, apellidos, correo, telefono, mensaje);
    return new Response('Consulta enviada correctamente', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error del servidor', { status: 500 });
  }
};