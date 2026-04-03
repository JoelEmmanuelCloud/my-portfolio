const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const INPUT_DIR = path.join(__dirname, '../public/images/projects')
const files = fs.readdirSync(INPUT_DIR).filter(f => /\.(png|jpe?g)$/i.test(f))

async function compress() {
  let totalBefore = 0
  let totalAfter = 0

  for (const file of files) {
    const filePath = path.join(INPUT_DIR, file)
    const before = fs.statSync(filePath).size
    totalBefore += before

    const tmp = filePath + '.tmp'

    await sharp(filePath)
      .resize(1600, null, { withoutEnlargement: true })
      .png({ quality: 80, compressionLevel: 9, effort: 10 })
      .toFile(tmp)

    const after = fs.statSync(tmp).size

    // Only replace if we actually saved space
    if (after < before) {
      fs.renameSync(tmp, filePath)
      totalAfter += after
      const saved = (((before - after) / before) * 100).toFixed(0)
      console.log(`✓ ${file}: ${kb(before)} → ${kb(after)} (${saved}% saved)`)
    } else {
      fs.unlinkSync(tmp)
      totalAfter += before
      console.log(`- ${file}: kept original (already optimal)`)
    }
  }

  const totalSaved = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1)
  console.log(`\nTotal: ${mb(totalBefore)} → ${mb(totalAfter)} (${totalSaved} MB saved)`)
}

const kb = b => `${(b / 1024).toFixed(0)}KB`
const mb = b => `${(b / 1024 / 1024).toFixed(1)}MB`

compress().catch(console.error)
