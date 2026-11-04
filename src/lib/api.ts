import { treaty } from '@elysiajs/eden';
import type { App } from '../server/elysia';

// When running in the browser, treaty uses window.location.origin
export const api = treaty<App>(typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');
