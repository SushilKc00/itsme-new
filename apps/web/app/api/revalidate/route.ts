import { revalidatePath } from 'next/cache';
export function GET() {
  revalidatePath('/', 'layout'); // revalidate every page with layout
  return Response.json({ revalidated: true, now: Date.now() });
}
