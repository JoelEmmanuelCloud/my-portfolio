import puppeteer from 'puppeteer';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const { experience, hackathons } = await import('../data/experience.js');
const { projects } = await import('../data/projects.js');
const { skills } = await import('../data/skills.js');
const { certifications } = await import('../data/certifications.js');
const { education } = await import('../data/education.js');

const featuredProjects = projects.filter(p => p.featured).slice(0, 1);

const rewodBullets = [
  'Developed internal tools using Python and Java Spring Boot',
  'Created data processing pipelines handling millions of records daily',
];

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    font-size: 10px;
    color: #1a1a1a;
    line-height: 1.4;
    padding: 22px 32px;
  }
  a { color: #1a1a1a; text-decoration: none; }

  /* HEADER */
  .header { border-bottom: 2px solid #1a1a1a; padding-bottom: 10px; margin-bottom: 14px; }
  .header h1 { font-size: 22px; font-weight: 700; letter-spacing: 0.5px; }
  .header .title { font-size: 12px; color: #444; margin-top: 2px; margin-bottom: 6px; }
  .contact { display: flex; flex-wrap: wrap; gap: 14px; font-size: 9.5px; color: #333; }
  .contact span::before { content: '• '; color: #888; }
  .contact span:first-child::before { content: ''; }

  /* SECTIONS */
  .section { margin-bottom: 8px; }
  .section-title {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #333;
    border-bottom: 1px solid #ccc;
    padding-bottom: 3px;
    margin-bottom: 8px;
  }

  /* EXPERIENCE */
  .entry { margin-bottom: 7px; }
  .entry-header { display: flex; justify-content: space-between; align-items: baseline; }
  .entry-title { font-weight: 700; font-size: 10.5px; }
  .entry-sub { font-size: 9.5px; color: #555; margin-top: 1px; margin-bottom: 3px; }
  .entry-period { font-size: 9.5px; color: #666; white-space: nowrap; }
  ul { padding-left: 13px; }
  li { margin-bottom: 1.5px; font-size: 9.8px; }

  /* SKILLS */
  .skill-group { margin-bottom: 3px; }
  .skill-group-title { font-weight: 700; font-size: 9.5px; color: #333; }
  .skill-list { font-size: 9.5px; color: #444; }

  /* PROJECTS */
  .project-stack { font-size: 9px; color: #666; margin-top: 1px; font-style: italic; }

  /* TWO COL LAYOUT for bottom sections */
  .two-col { display: grid; grid-template-columns: 55% 42%; gap: 0 3%; break-inside: avoid; page-break-inside: avoid; }
</style>
</head>
<body>

<!-- HEADER -->
<div class="header">
  <h1>Joel Emmanuel</h1>
  <div class="title">Full-Stack Developer &amp; Production Engineer</div>
  <div class="contact">
    <span>ejoel0035@gmail.com</span>
    <span>github.com/JoelEmmanuelCloud</span>
    <span>linkedin.com/in/joel-emmanuel-149708202</span>
    <span>joelemmanuel.dev</span>
  </div>
</div>

<!-- SKILLS -->
<div class="section">
  <div class="section-title">Technical Skills</div>
  <div class="skill-group"><span class="skill-group-title">Backend: </span><span class="skill-list">Node.js, NestJS, Express.js, Python, Flask, Java, Spring Boot, REST APIs, GraphQL, Microservices, WebSockets</span></div>
  <div class="skill-group"><span class="skill-group-title">Production Engineering &amp; SRE: </span><span class="skill-list">Prometheus, Grafana, k6 Load Testing, Structured Logging, Health Checks, Runbooks, Failure Mode Analysis, Horizontal Scaling</span></div>
  <div class="skill-group"><span class="skill-group-title">Cloud &amp; Infrastructure: </span><span class="skill-list">AWS (EC2, S3, Lambda, RDS, SageMaker, Bedrock), Docker, Docker Compose, Nginx, GitHub Actions, CI/CD, DigitalOcean</span></div>
  <div class="skill-group"><span class="skill-group-title">Frontend &amp; Databases: </span><span class="skill-list">React.js, Next.js, TypeScript, Redux, Tailwind CSS &nbsp;|&nbsp; PostgreSQL, MongoDB, Redis, MySQL, Query Optimisation</span></div>
  <div class="skill-group"><span class="skill-group-title">AI &amp; Blockchain: </span><span class="skill-list">LangChain, AWS Bedrock, RAG Systems, LLMs, Vector Databases &nbsp;|&nbsp; Solidity, Web3.js, Lisk, Smart Contracts, Ethers.js</span></div>
</div>

<!-- EXPERIENCE -->
<div class="section">
  <div class="section-title">Experience</div>
  ${experience.map(e => {
    const allBullets = e.company === 'Rewod Technologies' ? rewodBullets : e.bullets;
    const bullets = allBullets.slice(0, 3);
    const period = e.period;
    return `
  <div class="entry">
    <div class="entry-header">
      <span class="entry-title">${e.company}${e.client ? ` — ${e.client}` : ''}</span>
      <span class="entry-period">${period}</span>
    </div>
    <div class="entry-sub">${e.role} &nbsp;·&nbsp; ${e.location}</div>
    <ul>
      ${bullets.map(b => `<li>${b}</li>`).join('')}
    </ul>
  </div>`;
  }).join('')}
</div>

<!-- FEATURED PROJECTS -->
<div class="section">
  <div class="section-title">Key Projects</div>
  ${featuredProjects.map(p => `
  <div class="entry">
    <div class="entry-header">
      <span class="entry-title">${p.title}</span>
      <span class="entry-period">${p.role}</span>
    </div>
    <div class="project-stack">${p.stack.join(' · ')}</div>
    <ul style="margin-top:3px">
      ${p.impact.slice(0, 3).map(i => `<li>${i}</li>`).join('')}
    </ul>
  </div>`).join('')}
</div>

<!-- HACKATHONS + CERTS + EDUCATION -->
<div class="two-col">
  <div>
    <!-- HACKATHONS -->
    <div class="section">
      <div class="section-title">Hackathons</div>
      ${hackathons.map(h => `
      <div class="entry">
        <div class="entry-header">
          <span class="entry-title">${h.name}</span>
          <span class="entry-period">${h.period}</span>
        </div>
        <div class="entry-sub">${h.role} &nbsp;·&nbsp; ${h.organizer}</div>
      </div>`).join('')}
    </div>
  </div>

  <div>
    <!-- CERTIFICATIONS -->
    <div class="section">
      <div class="section-title">Certifications</div>
      ${certifications.map(c => `
      <div class="entry">
        <div class="entry-header">
          <span class="entry-title">${c.name}</span>
          <span class="entry-period">${c.issueDate.slice(0, 7)}</span>
        </div>
        <div class="entry-sub">${c.issuer}</div>
      </div>`).join('')}
    </div>

  </div>
</div>

</body>
</html>`;

const htmlPath = join(__dirname, '../public/documents/resume.html');
writeFileSync(htmlPath, html);
console.log('HTML written');

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle0' });

const pdfPath = join(__dirname, '../public/documents/joel-emmanuel-resume.pdf');
await page.pdf({
  path: pdfPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
});

await browser.close();
console.log(`Resume saved to ${pdfPath}`);
