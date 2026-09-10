const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const TARGET_DIRS = ['app', 'components', 'lib', 'data', 'hooks']

const EMOJI_REGEX = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{27BF}]|[\u{FE00}-\u{FE0F}]|[\u{200D}]|\u{FE0F}/gu

function walk(dir) {
  const results = []
  if (!fs.existsSync(dir)) return results
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...walk(full))
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      results.push(full)
    }
  }
  return results
}

function clean(content) {
  content = content.replace(/[ \t]*\{\/\*[\s\S]*?\*\/\}[ \t]*/g, '')

  content = content.replace(/\/\*[\s\S]*?\*\//g, '')

  content = content.replace(/^[ \t]*\/\/.*(\r?\n|$)/gm, '')

  content = content.replace(/(?<![:/'"])[ \t]+\/\/(?!\/).*$/gm, '')

  content = content.replace(EMOJI_REGEX, '')

  content = content.replace(/(\r?\n){3,}/g, '\n\n')

  return content
}

function run() {
  const files = TARGET_DIRS.flatMap(d => walk(path.join(ROOT, d)))
  let changed = 0

  for (const file of files) {
    const original = fs.readFileSync(file, 'utf8')
    const cleaned = clean(original)
    if (cleaned !== original) {
      fs.writeFileSync(file, cleaned)
      const rel = path.relative(ROOT, file)
      console.log(`cleaned  ${rel}`)
      changed++
    }
  }

  console.log(`\nDone — ${changed} of ${files.length} files modified.`)
}

run()
