import type { APIRoute } from 'astro';
import { insertarSuscripcion } from '../../lib/suscripciones';

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const email = form.get('email')?.toString() || '';

  if (!email) {
    return new Response('Correo requerido', { status: 400 });
  }

  try {
    await insertarSuscripcion(email);
    return new Response('Suscripción exitosa', { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response('Error al suscribirse', { status: 500 });
  }
};
