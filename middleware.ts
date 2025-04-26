import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Détection des assets statiques par l'extension
  const isStaticAsset = request.nextUrl.pathname.match(
    /\.(jpg|jpeg|png|gif|svg|ico|css|js|woff|woff2)$/
  )

  if (isStaticAsset) {
    // Cache long pour les assets statiques
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    )
  } else {
    // Cache plus court pour les pages
    response.headers.set(
      'Cache-Control',
      'public, max-age=3600, must-revalidate'
    )
  }

  return response
}

// Spécifier les chemins à traiter
export const config = {
  matcher: [
    // Traiter tous les chemins sauf certains
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    // Ou spécifier des chemins précis
    '/images/:path*',
    '/fonts/:path*',
  ],
}