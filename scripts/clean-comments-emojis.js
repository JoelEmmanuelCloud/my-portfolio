const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const TARGET_DIRS = ['app', 'components', 'lib', 'data', 'hooks']

// Emoji Unicode ranges (covers all standard emoji blocks)
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
  // 1. JSX block comments: {/* ... */}  (including multiline)
  content = content.replace(/[ \t]*\{\/\*[\s\S]*?\*\/\}[ \t]*/g, '')

  // 2. Block comments: /* ... */  (including JSDoc /** ... */)
  content = content.replace(/\/\*[\s\S]*?\*\//g, '')

  // 3. Pure single-line comment lines (entire line is // comment, optional leading whitespace)
  content = content.replace(/^[ \t]*\/\/.*(\r?\n|$)/gm, '')

  // 4. Inline trailing comments after code: e.g.  const x = 1 // comment
  //    Guard: skip if // is preceded by : or / to avoid stripping https:// in strings
  content = content.replace(/(?<![:/'"])[ \t]+\/\/(?!\/).*$/gm, '')

  // 5. Emojis
  content = content.replace(EMOJI_REGEX, '')

  // 6. Collapse 3+ consecutive blank lines down to 2
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
