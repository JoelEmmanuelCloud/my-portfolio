import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Joel Emmanuel - Fullstack & Blockchain Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >

        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >

            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#2563eb',
              }}
            />
            <span
              style={{
                color: '#6b7280',
                fontSize: '20px',
                letterSpacing: '0.05em',
              }}
            >
              joelemmanuel.dev
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(37,99,235,0.08)',
              border: '1px solid rgba(37,99,235,0.3)',
              borderRadius: '100px',
              padding: '8px 18px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
              }}
            />
            <span style={{ color: '#2563eb', fontSize: '16px' }}>
              Available for work
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#000000',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Joel Emmanuel
          </div>

          <div
            style={{
              fontSize: '28px',
              color: '#2563eb',
              fontWeight: 500,
              letterSpacing: '0.01em',
            }}
          >
            Fullstack &amp; Blockchain Developer
          </div>

          <div
            style={{
              fontSize: '20px',
              color: '#6b7280',
              maxWidth: '620px',
              lineHeight: 1.5,
            }}
          >
            Building scalable Web3 apps, AI platforms, and production systems.
            Working on Avigate, a personal navigation app.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {['React', 'NestJS', 'Lisk Blockchain', 'AWS', 'TypeScript', 'AI/ML'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  background: '#f3f4f6',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  color: '#374151',
                  fontSize: '16px',
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
