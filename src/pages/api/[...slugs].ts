import type { APIRoute } from 'astro';
import { app } from '../../server/elysia';

const handle: APIRoute = ({ request }) => app.handle(request);

export const ALL: APIRoute = handle;
export const GET: APIRoute = handle;
export const POST: APIRoute = handle;
export const PUT: APIRoute = handle;
export const DELETE: APIRoute = handle;
export const PATCH: APIRoute = handle;
