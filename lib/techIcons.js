import {
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiJavascript, SiPython,
  SiSolidity, SiEthereum, SiWeb3Dotjs, SiEthers,
  SiDocker, SiKubernetes, SiPostgresql, SiMongodb, SiMysql, SiRedis,
  SiGraphql, SiTailwindcss, SiNestjs, SiExpress, SiSpringboot, SiFlask,
  SiGit, SiGithub, SiGithubactions, SiNginx, SiVite, SiJest, SiCypress,
  SiVitest, SiSocketdotio, SiPrometheus, SiGrafana, SiVercel, SiNetlify,
  SiWebpack, SiNpm, SiEslint, SiShadcnui, SiCloudflare, SiDigitalocean,
  SiHtml5, SiCss, SiRedux, SiReacthookform, SiReactrouter, SiZod,
  SiKeycloak, SiTensorflow, SiPytorch, SiTerraform, SiJenkins, SiStripe,
  SiSelenium, SiPytest, SiSwagger, SiGooglecloud, SiOpenjdk, SiMui,
  SiFigma,
} from 'react-icons/si'
import { FaAws, FaMicrosoft, FaJava } from 'react-icons/fa6'

const tech = {
  react: { icon: SiReact, color: '#61DAFB' },
  nextjs: { icon: SiNextdotjs, color: '#EDEDED' },
  nodejs: { icon: SiNodedotjs, color: '#339933' },
  typescript: { icon: SiTypescript, color: '#3178C6' },
  javascript: { icon: SiJavascript, color: '#F7DF1E' },
  python: { icon: SiPython, color: '#3776AB' },
  solidity: { icon: SiSolidity, color: '#B4B4B4' },
  ethereum: { icon: SiEthereum, color: '#B4B4B4' },
  web3: { icon: SiWeb3Dotjs, color: '#F16822' },
  ethers: { icon: SiEthers, color: '#7D9CFF' },
  docker: { icon: SiDocker, color: '#2496ED' },
  kubernetes: { icon: SiKubernetes, color: '#326CE5' },
  postgresql: { icon: SiPostgresql, color: '#4169E1' },
  mongodb: { icon: SiMongodb, color: '#47A248' },
  mysql: { icon: SiMysql, color: '#4479A1' },
  redis: { icon: SiRedis, color: '#DC382D' },
  graphql: { icon: SiGraphql, color: '#E10098' },
  tailwindcss: { icon: SiTailwindcss, color: '#06B6D4' },
  nestjs: { icon: SiNestjs, color: '#E0234E' },
  express: { icon: SiExpress, color: '#EDEDED' },
  springboot: { icon: SiSpringboot, color: '#6DB33F' },
  flask: { icon: SiFlask, color: '#EDEDED' },
  git: { icon: SiGit, color: '#F05032' },
  github: { icon: SiGithub, color: '#EDEDED' },
  githubactions: { icon: SiGithubactions, color: '#2088FF' },
  nginx: { icon: SiNginx, color: '#009639' },
  vite: { icon: SiVite, color: '#646CFF' },
  jest: { icon: SiJest, color: '#C21325' },
  cypress: { icon: SiCypress, color: '#B4B4B4' },
  vitest: { icon: SiVitest, color: '#6E9F18' },
  socketio: { icon: SiSocketdotio, color: '#EDEDED' },
  prometheus: { icon: SiPrometheus, color: '#E6522C' },
  grafana: { icon: SiGrafana, color: '#F46800' },
  vercel: { icon: SiVercel, color: '#EDEDED' },
  netlify: { icon: SiNetlify, color: '#00C7B7' },
  webpack: { icon: SiWebpack, color: '#8DD6F9' },
  npm: { icon: SiNpm, color: '#CB3837' },
  eslint: { icon: SiEslint, color: '#4B32C3' },
  shadcnui: { icon: SiShadcnui, color: '#EDEDED' },
  cloudflare: { icon: SiCloudflare, color: '#F38020' },
  digitalocean: { icon: SiDigitalocean, color: '#0080FF' },
  html5: { icon: SiHtml5, color: '#E34F26' },
  css3: { icon: SiCss, color: '#663399' },
  redux: { icon: SiRedux, color: '#764ABC' },
  reacthookform: { icon: SiReacthookform, color: '#EC5990' },
  reactrouter: { icon: SiReactrouter, color: '#CA4245' },
  zod: { icon: SiZod, color: '#3E67B1' },
  keycloak: { icon: SiKeycloak, color: '#B4B4B4' },
  tensorflow: { icon: SiTensorflow, color: '#FF6F00' },
  pytorch: { icon: SiPytorch, color: '#EE4C2C' },
  terraform: { icon: SiTerraform, color: '#7B42BC' },
  jenkins: { icon: SiJenkins, color: '#D24939' },
  stripe: { icon: SiStripe, color: '#635BFF' },
  selenium: { icon: SiSelenium, color: '#43B02A' },
  pytest: { icon: SiPytest, color: '#0A9EDC' },
  swagger: { icon: SiSwagger, color: '#85EA2D' },
  googlecloud: { icon: SiGooglecloud, color: '#4285F4' },
  openjdk: { icon: SiOpenjdk, color: '#EDEDED' },
  mui: { icon: SiMui, color: '#007FFF' },
  figma: { icon: SiFigma, color: '#F24E1E' },
  java: { icon: FaJava, color: '#F89820' },
  aws: { icon: FaAws, color: '#FF9900' },
  azure: { icon: FaMicrosoft, color: '#00A4EF' },
}

const aliases = {
  'react': 'react',
  'react.js': 'react',
  'react native': 'react',
  'react 18': 'react',
  'next.js': 'nextjs',
  'nextjs': 'nextjs',
  'node.js': 'nodejs',
  'nodejs': 'nodejs',
  'typescript': 'typescript',
  'typescript 5': 'typescript',
  'javascript': 'javascript',
  'javascript es6+': 'javascript',
  'python': 'python',
  'solidity': 'solidity',
  'ethereum': 'ethereum',
  'ethereum development': 'ethereum',
  'ethereum sepolia': 'ethereum',
  'web3': 'web3',
  'web3.js': 'web3',
  'ethers.js': 'ethers',
  'docker': 'docker',
  'docker compose': 'docker',
  'kubernetes': 'kubernetes',
  'postgresql': 'postgresql',
  'mongodb': 'mongodb',
  'mysql': 'mysql',
  'redis': 'redis',
  'graphql': 'graphql',
  'tailwind css': 'tailwindcss',
  'tailwindcss': 'tailwindcss',
  'nestjs': 'nestjs',
  'express': 'express',
  'express.js': 'express',
  'spring boot': 'springboot',
  'flask': 'flask',
  'git': 'git',
  'github': 'github',
  'github actions': 'githubactions',
  'github actions ci': 'githubactions',
  'nginx': 'nginx',
  'vite': 'vite',
  'jest': 'jest',
  'cypress': 'cypress',
  'vitest': 'vitest',
  'socket.io': 'socketio',
  'prometheus': 'prometheus',
  'grafana': 'grafana',
  'vercel': 'vercel',
  'netlify': 'netlify',
  'webpack': 'webpack',
  'npm': 'npm',
  'eslint': 'eslint',
  'shadcn/ui': 'shadcnui',
  'cloudflare': 'cloudflare',
  'digitalocean': 'digitalocean',
  'html5': 'html5',
  'css3': 'css3',
  'redux': 'redux',
  'react hook form': 'reacthookform',
  'react router dom': 'reactrouter',
  'zod': 'zod',
  'keycloak': 'keycloak',
  'tensorflow': 'tensorflow',
  'pytorch': 'pytorch',
  'terraform': 'terraform',
  'jenkins': 'jenkins',
  'stripe': 'stripe',
  'selenium': 'selenium',
  'pytest': 'pytest',
  'swagger': 'swagger',
  'google cloud': 'googlecloud',
  'material ui': 'mui',
  'figma design': 'figma',
  'java': 'java',
  'aws': 'aws',
  'aws ec2': 'aws',
  'aws lambda': 'aws',
  'aws sagemaker': 'aws',
  'aws textract': 'aws',
  'aws bedrock': 'aws',
  'amazon bedrock': 'aws',
  'amazon lex': 'aws',
  'amazon web services': 'aws',
  'bedrock': 'aws',
  'lambda': 'aws',
  's3': 'aws',
  'rds': 'aws',
  'dynamodb': 'aws',
  'cloudfront': 'aws',
  'eventbridge': 'aws',
  'ec2': 'aws',
  'cloudwatch': 'aws',
  'iam': 'aws',
  'vpc': 'aws',
  'sagemaker': 'aws',
  'lex': 'aws',
  'textract': 'aws',
  'comprehend': 'aws',
  'rekognition': 'aws',
  'codedeploy': 'aws',
  'aws codedeploy': 'aws',
  'azure': 'azure',
  'azure application insights': 'azure',
  'microsoft azure': 'azure',
}

function resolveSlug(name) {
  if (!name) return null
  const key = name.trim().toLowerCase()
  if (tech[key]) return key
  if (aliases[key]) return aliases[key]

  if (key.includes('aws') || key.includes('amazon')) return 'aws'
  if (key.includes('azure')) return 'azure'
  if (key.includes('react') && !key.includes('router') && !key.includes('hook') && !key.includes('query') && !key.includes('europe')) return 'react'
  if (key.includes('node')) return 'nodejs'
  if (key.includes('postgres')) return 'postgresql'
  if (key.includes('mongo')) return 'mongodb'
  if (key.includes('docker')) return 'docker'
  if (key.includes('kubernetes')) return 'kubernetes'
  if (key.includes('typescript')) return 'typescript'
  if (key.includes('javascript')) return 'javascript'
  if (key.includes('solidity')) return 'solidity'
  if (key.includes('ethereum')) return 'ethereum'
  if (key.includes('tailwind')) return 'tailwindcss'
  if (key.includes('nest')) return 'nestjs'
  if (key.includes('spring')) return 'springboot'
  if (key.includes('graphql')) return 'graphql'
  if (key.includes('github')) return 'github'
  if (key.includes('python')) return 'python'
  if (key.includes('java') && !key.includes('javascript')) return 'java'

  return null
}

export function getTech(name) {
  const slug = resolveSlug(name)
  return slug ? tech[slug] : null
}

export function getTechIcon(name) {
  const entry = getTech(name)
  return entry ? entry.icon : null
}

export function getTechColor(name) {
  const entry = getTech(name)
  return entry ? entry.color : null
}

export default getTechIcon
