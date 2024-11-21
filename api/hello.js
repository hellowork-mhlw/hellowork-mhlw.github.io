import { simpleParser } from 'mailparser';
import Imap from 'imap';

export function GET(request) {
  return new Response(`Hello2 from ${process.env.VERCEL_REGION}`);
}
