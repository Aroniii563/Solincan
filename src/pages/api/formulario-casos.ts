import type { APIRoute } from 'astro';
import { insertarFormularioCasosExito } from '../../lib/formularioCasos';

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const nombre = form.get('nombre')?.toString() || '';
  const correo = form.get('correo')?.toString() || '';
  const telefono = form.get('telefono')?.toString() || '';

  if (!nombre || !correo || !telefono) {
    return new Response('Campos requeridos', { status: 400 });
  }

  try {
    await insertarFormularioCasosExito(nombre, correo, telefono);
    return new Response('Formulario enviado', { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response('Error en el formulario', { status: 500 });
  }
};
