import sharp from 'sharp'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const svgPath = join(root, 'public', 'logos', 'favicon-master.svg')
const iconsDir = join(root, 'public', 'icons')

const targets = [
  { file: 'favicon-16x16.png', size: 16 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'android-chrome-192x192.png', size: 192 },
  { file: 'android-chrome-512x512.png', size: 512 },
]

async function run() {
  for (const { file, size } of targets) {
    const outPath = join(iconsDir, file)
    await sharp(svgPath, { density: 384 })
      .resize(size, size)
      .png()
      .toFile(outPath)
    console.log('wrote', file, size)
  }

  const png16 = await sharp(svgPath, { density: 384 }).resize(16, 16).png().toBuffer()
  const png32 = await sharp(svgPath, { density: 384 }).resize(32, 32).png().toBuffer()

  const images = [
    { size: 16, data: png16 },
    { size: 32, data: png32 },
  ]

  const headerSize = 6
  const dirEntrySize = 16
  const offsetStart = headerSize + dirEntrySize * images.length

  const header = Buffer.alloc(headerSize)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(images.length, 4)

  let offset = offsetStart
  const dirEntries = []
  const dataChunks = []
  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize)
    entry.writeUInt8(img.size === 256 ? 0 : img.size, 0)
    entry.writeUInt8(img.size === 256 ? 0 : img.size, 1)
    entry.writeUInt8(0, 2)
    entry.writeUInt8(0, 3)
    entry.writeUInt16LE(1, 4)
    entry.writeUInt16LE(32, 6)
    entry.writeUInt32LE(img.data.length, 8)
    entry.writeUInt32LE(offset, 12)
    dirEntries.push(entry)
    dataChunks.push(img.data)
    offset += img.data.length
  }

  const ico = Buffer.concat([header, ...dirEntries, ...dataChunks])
  writeFileSync(join(iconsDir, 'favicon.ico'), ico)
  console.log('wrote favicon.ico')
}

run()
