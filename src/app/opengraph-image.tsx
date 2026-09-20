import { ImageResponse } from 'next/og';
import { personal } from '@/data/portfolioData';

export const alt = `${personal.name} — ${personal.title} (Next.js, TypeScript, PostgreSQL)`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const BG = '#F7F4EC';
const INK = '#16201B';
const TEXT = '#17211C';
const MUTED = '#677168';
const GREEN = '#0F6B52';
const GOLD = '#80680F';
const YELLOW = '#D9A621';
const GREEN_ACT = '#15803D';
const DARK = '#0B120F';
const OFF_WHITE = '#F3F0E7';
const DIM = '#7C877F';

const chips = ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MySQL', 'Tailwind CSS'];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 48,
          padding: 64,
          background: BG,
          color: TEXT,
        }}
      >
        {/* Left column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            flex: 1,
          }}
        >
          {/* Top: monogram + handle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div
              style={{
                width: 76,
                height: 76,
                background: DARK,
                border: `4px solid ${INK}`,
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: OFF_WHITE,
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              CT
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ color: MUTED, fontSize: 15, letterSpacing: 2 }}>
                christiantesiswiantoportofolio.vercel.app
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 999,
                    background: GREEN,
                    display: 'flex',
                  }}
                />
                <span style={{ fontSize: 17, fontWeight: 600, color: INK, letterSpacing: 1 }}>
                  OPEN TO OPPORTUNITIES · FREELANCE
                </span>
              </div>
            </div>
          </div>

          {/* Middle: name + role + tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: 57, fontWeight: 800, lineHeight: 1.04, color: TEXT, letterSpacing: -1 }}>
              <div>CHRISTIAN</div>
              <div>TESISWIANTO</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 12, height: 12, background: GOLD, borderRadius: 2, display: 'flex' }} />
              <span style={{ fontSize: 25, fontWeight: 700, color: GREEN, letterSpacing: 1 }}>FULL-STACK DEVELOPER</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: 17, color: MUTED, lineHeight: 1.45 }}>
              <div>Building reliable digital solutions with Next.js, TypeScript,</div>
              <div>PostgreSQL &amp; MySQL — from frontend to backend and database.</div>
            </div>
          </div>

          {/* Bottom: tech chips */}
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {chips.map((c) => (
              <div
                key={c}
                style={{
                  padding: '8px 14px',
                  border: `3px solid ${INK}`,
                  borderRadius: 10,
                  background: '#FFFFFF',
                  fontSize: 15,
                  fontWeight: 600,
                  color: TEXT,
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Right: code card */}
        <div
          style={{
            width: 430,
            background: DARK,
            border: `4px solid ${INK}`,
            borderRadius: 18,
            padding: 26,
            color: OFF_WHITE,
            fontSize: 16,
            lineHeight: 1.5,
            fontFamily: 'monospace',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 14, height: 14, borderRadius: 999, background: GOLD, display: 'flex' }} />
            <span style={{ width: 14, height: 14, borderRadius: 999, background: YELLOW, display: 'flex' }} />
            <span style={{ width: 14, height: 14, borderRadius: 999, background: GREEN_ACT, display: 'flex' }} />
            <span style={{ marginLeft: 8, color: DIM }}>developer.ts</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 15 }}>
            <span style={{ color: DIM }}>{'// building reliable software'}</span>
            <span>
              <span style={{ color: GOLD }}>const</span>{' '}
              <span style={{ color: GREEN_ACT }}>profile</span>
              <span style={{ color: DIM }}>{': Developer = {'}</span>
            </span>
            <span style={{ color: DIM }}>
              {'  '}Name: <span style={{ color: '#4ADE80' }}>{'"Christian"'}</span>,
            </span>
            <span style={{ color: DIM }}>
              {'  '}Role: <span style={{ color: '#4ADE80' }}>{'"Full-Stack"'}</span>,
            </span>
            <span style={{ color: DIM }}>
              {'  '}Stack: <span style={{ color: '#4ADE80' }}>{'"Next.js · TypeScript"'}</span>,
            </span>
            <span style={{ color: DIM }}>
              {'  '}DB: <span style={{ color: '#4ADE80' }}>{'"PostgreSQL · MySQL"'}</span>,
            </span>
            <span style={{ color: GOLD }}>{'};'}</span>
            <span>
              <span style={{ color: GOLD }}>export</span>{' '}
              <span style={{ color: GOLD }}>default</span>{' '}
              <span style={{ color: GREEN_ACT }}>profile</span>;
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}