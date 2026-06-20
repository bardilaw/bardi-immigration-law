import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Soft-launch password gate. Keeps the live site private while it runs on
// placeholder content (BAR-557). The board can rotate the password without a
// code change by setting a SITE_PASSWORD env var on the Pages project; the
// hardcoded default is the value the board chose for this launch.
const SITE_PASSWORD = process.env.SITE_PASSWORD || 'ultimate';
const REALM = 'Bardi Immigration Law — Preview';

function unauthorized(): NextResponse {
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
      'Cache-Control': 'no-store',
    },
  });
}

export function middleware(req: NextRequest): NextResponse {
  const header = req.headers.get('authorization');
  if (header?.startsWith('Basic ')) {
    try {
      // atob is available in the edge runtime.
      const decoded = atob(header.slice(6));
      const password = decoded.slice(decoded.indexOf(':') + 1);
      if (password === SITE_PASSWORD) {
        return NextResponse.next();
      }
    } catch {
      // Malformed header — fall through to the challenge.
    }
  }
  return unauthorized();
}

// Gate everything except Next internals and the favicon, so the challenge
// fires on the very first request to any page or asset.
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
