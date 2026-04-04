import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const BUILD_ID = process.env.VERCEL_GIT_COMMIT_SHA ?? process.env.NEXT_PUBLIC_BUILD_ID ?? String(Date.now())

export function GET() {
  return NextResponse.json(
    { id: BUILD_ID },
    { headers: { 'Cache-Control': 'no-store' } }
  )
}
