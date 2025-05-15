import type { APIRoute } from 'astro';
import { insertarConsulta } from '../../lib/consultas';

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const nombre = form.get('nombre')?.toString() || '';
  const correo = form.get('correo')?.toString() || '';
  const telefono = form.get('telefono')?.toString() || '';

  if (!nombre || !correo || !telefono) {
    return new Response('Faltan datos', { status: 400 });
  }

  try {
    await insertarConsulta(nombre, correo, telefono);
    return new Response('Consulta enviada', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error de servidor', { status: 500 });
  }
};
