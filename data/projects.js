//data/projects.js - Updated with resume data
export const projects = [
  {
    slug: "avigate-navigation",
    title: "Avigate – Smart Transportation Navigation",
    role: "Co-Founder & Chief Technology Officer",
    featured: true,
    links: {
      live: "https://avigate.co./",
      company: "https://avigate.co/"
    },
    stack: [
      "TypeScript", "React Native", "NestJS", "PostgreSQL", 
      "Google Maps API", "Redis", "JWT", "TOTP 2FA"
    ],
    images: ["/images/projects/avigate.png"],
    summary: "Smart transportation navigation startup solving local transit challenges in Nigerian cities with buses, keke napep, taxis, and okada. Leading full-stack development with real-time route matching and community features.",
    context: "Co-founded Avigate to address the lack of reliable navigation solutions for local Nigerian transportation. Users struggle to find efficient routes using multiple transit modes, leading to wasted time and poor travel experiences.",
    challenge: "Building comprehensive route matching with complex transfer logic, real-time location sharing, and scalable infrastructure optimized for Nigerian transportation patterns and traffic conditions.",
    solution: "Architected full-stack solution with React Native mobile apps, NestJS backend, PostgreSQL database, and Redis caching. Implemented sophisticated routing algorithms, Google Maps integration, and enterprise-grade security with Google OAuth and TOTP 2FA.",
    impact: [
      "Comprehensive route matching system with complex transfer logic and community-driven features",
      "Real-time location sharing and optimized routing algorithms for Nigerian infrastructure",
      "Scalable backend APIs supporting thousands of concurrent users",
      "Enterprise-grade security with Google OAuth, TOTP 2FA, JWT tokens, and device tracking"
    ],
    technologies: {
      mobile: ["React Native", "TypeScript", "Dark Mode", "Real-time Updates"],
      backend: ["NestJS", "PostgreSQL", "Redis", "WebSockets"],
      integrations: ["Google Maps API", "Google OAuth", "TOTP 2FA"],
      security: ["JWT", "Device Tracking", "Session Management"]
    }
  },
  {
    slug: "learnway-blockchain",
    title: "Learnway – Blockchain Education Platform",
    role: "Backend Developer",
    featured: true,
    links: {
      live: "https://learnway.xyz/",
      company: "https://learnway.xyz/"
    },
    stack: [
      "NestJS", "TypeScript", "Lisk Blockchain", "PostgreSQL", 
      "Redis", "Smart Contracts", "Web3"
    ],
    images: ["/images/projects/learnway.png"],
    summary: "Backend infrastructure for blockchain-based educational platform on Lisk blockchain that gamifies learning through point-based rewards and token incentives.",
    context: "Learnway combines education with blockchain technology to create engaging learning experiences. Students earn tokens for completing milestones, creating a gamified ecosystem that incentivizes continuous learning.",
    challenge: "Architecting scalable backend to handle user progress tracking, achievement systems, and blockchain reward distribution while maintaining performance and security.",
    solution: "Designed NestJS APIs with TypeScript for robust type safety. Integrated Lisk smart contracts for token rewards, built gamification systems with leaderboards and badges, optimized with PostgreSQL and Redis.",
    impact: [
      "Scalable APIs handling user progress tracking and achievement systems on Lisk blockchain",
      "Secure wallet connections and blockchain transaction monitoring for milestone completions",
      "Gamification systems with leaderboards, badges, and point-to-token conversion",
      "Comprehensive testing and CI/CD pipelines ensuring reliable blockchain integrations"
    ],
    technologies: {
      backend: ["NestJS", "TypeScript", "PostgreSQL", "Redis"],
      blockchain: ["Lisk Blockchain", "Smart Contracts", "Web3.js", "Token Systems"],
      gamification: ["Leaderboards", "Badges", "Point Systems", "Reward Distribution"],
      devops: ["CI/CD", "Testing", "Monitoring"]
    }
  },
  {
    slug: "freedom-ride-hailing",
    title: "Freedom – Ride Hailing Platform",
    role: "Full-stack Developer",
    featured: true,
    links: {
      live: "https://www.freedomghana.com/",
    },
    stack: [
      "React", "Node.js", "MongoDB", "AWS EC2", "Socket.IO", 
      "Google Maps", "Paystack", "Redis", "GitHub Actions"
    ],
    images: ["/images/projects/freedom.png"],
    summary: "Production ride-hailing platform serving thousands of daily ride requests across multiple Ghanaian cities with real-time matching and secure payments.",
    context: "Freedom provides reliable transportation services in Ghana, connecting passengers with drivers through an intuitive mobile platform. The system handles real-time ride booking, driver dispatch, and payment processing.",
    challenge: "Building complete ride-hailing ecosystem with real-time features, payment integration, scalable infrastructure, and 99.9% uptime for production traffic.",
    solution: "Full-stack solution with React frontend, Node.js/Express backend, real-time Socket.IO communication, MongoDB with geospatial indexes, and comprehensive AWS deployment with automated CI/CD.",
    impact: [
      "Real-time ride matching with optimized distance calculation reducing wait times by 45%",
      "Automated CI/CD pipeline with GitHub Actions and AWS CodeDeploy",
      "Scalable infrastructure handling thousands of daily requests with 99.9% uptime",
      "Integrated payment processing with Paystack and automated notifications"
    ],
    technologies: {
      frontend: ["React", "JavaScript", "Tailwind CSS", "Redux"],
      backend: ["Node.js", "Express", "MongoDB", "Socket.IO"],
      cloud: ["AWS EC2", "RDS", "S3", "CloudFront", "Redis", "GitHub Actions"],
      integrations: ["Google Maps", "Paystack", "SendGrid", "Twilio"]
    }
  },
  {
    slug: "ethglobal-defi",
    title: "EthGlobal Unite DeFi – Cross-chain Solutions",
    role: "Blockchain Developer",
    featured: false,
    links: {
      live: "https://ethglobal.com/events/unite",
    },
    stack: [
      "Solidity", "Ethereum", "1inch", "Web3.js", "React", 
      "Smart Contracts", "DeFi Protocols"
    ],
    images: ["/images/projects/ethglobal-defi.png"],
    summary: "Innovative cross-chain DeFi solutions addressing interoperability challenges, competing for $525,000 in bounties at EthGlobal Unite hackathon.",
    context: "Cross-chain interoperability remains a major challenge in DeFi. Users struggle to move assets between networks efficiently, limiting liquidity access and trading opportunities.",
    challenge: "Building seamless multi-chain applications enabling users to move assets effortlessly between blockchain networks while maintaining security and minimizing costs.",
    solution: "Developed smart contract integrations aggregating liquidity across multiple chains, created unified dApp interfaces, and implemented cross-chain communication patterns using 1inch's tech stack.",
    impact: [
      "Smart contracts aggregating liquidity across multiple blockchain networks",
      "Reduced slippage and improved trading efficiency through unified liquidity pools",
      "Intuitive dApp interfaces allowing access to all liquidity from single entry point",
      "Presented solutions to industry leaders demonstrating deep DeFi protocol understanding"
    ],
    technologies: {
      blockchain: ["Ethereum", "Solidity", "Smart Contracts", "1inch Protocol"],
      frontend: ["React", "Web3.js", "Ethers.js"],
      defi: ["Liquidity Aggregation", "Cross-chain Swaps", "DEX Integration"]
    }
  },
  {
    slug: "ethglobal-avail",
    title: "EthGlobal x Avail – Unchained Apps",
    role: "Web3 Developer",
    featured: false,
    links: {
      live:"https://ethglobal.com/events/ethonline2025",
    },
    stack: [
      "Avail Nexus SDK", "Solidity", "Web3", "React", 
      "Cross-chain", "DeFi", "Smart Contracts"
    ],
    images: ["/images/projects/ethglobal-avail.png"],
    summary: "Cross-chain applications leveraging Avail Nexus SDK for seamless asset transfer and liquidity sharing across multiple blockchain networks.",
    context: "Traditional blockchain bridges create fragmentation, requiring users to manage multiple wallets, switch networks constantly, and pay high fees for cross-chain operations.",
    challenge: "Building unified cross-chain experiences allowing users to interact with multiple blockchains simultaneously without traditional bridge limitations.",
    solution: "Implemented Avail's Bridge & Execute functionality and cross-chain swap (XCS) features. Architected intent systems for adaptive yield routing and automated fund management across chains.",
    impact: [
      "Seamless asset transfer across multiple blockchains without bridge limitations",
      "Unified token spending across different chains without switching contexts",
      "Adaptive yield routing automatically moving funds to highest APY opportunities",
      "Comprehensive technical documentation showcasing real-world cross-chain flows"
    ],
    technologies: {
      blockchain: ["Avail Nexus SDK", "Solidity", "Multi-chain"],
      features: ["Bridge & Execute", "Cross-chain Swaps", "Intent Systems"],
      frontend: ["React", "Web3.js", "dApp Interface"]
    }
  },
  {
    slug: "red-warehouse-system",
    title: "RED Transport – Warehouse Management System",
    role: "Full-stack Developer (Freelance)",
    featured: false,
    links: {
      company: "https://www.redtransportltd.com/",
    },
    stack: [
      "Odoo Framework", "Python", "XML", "PostgreSQL", 
      "QR Codes", "JavaScript", "Custom Modules"
    ],
    images: ["/images/projects/red-warehouse.png"],
    summary: "Complete warehouse management system for RED Transport Limited, a leading maritime logistics company in Lagos, Nigeria.",
    context: "RED Transport manages complex maritime cargo operations requiring efficient inventory tracking, vessel management, and automated billing for Nigerian customs compliance.",
    challenge: "Building comprehensive warehouse system with inventory tracking, prepaid storage, vessel management, and automated billing tailored to maritime logistics requirements.",
    solution: "Developed custom Odoo modules with inventory tracking, QR code scanning for put-away processes, real-time stock monitoring, and integrated reporting dashboards.",
    impact: [
      "Custom inventory modules with prepaid storage and vessel management features",
      "QR code scanning reducing manual errors by 90% in receiving and dispatching",
      "Responsive UI components reducing average processing time by 35%",
      "Real-time dashboards for warehouse operations, utilization, and financial reconciliation"
    ],
    technologies: {
      framework: ["Odoo", "Python", "XML", "JavaScript"],
      database: ["PostgreSQL", "Custom Queries"],
      features: ["QR Code Scanning", "Inventory Tracking", "Billing Automation", "Reporting"]
    }
  },
  {
    slug: "laila-ai-hiring",
    title: "Laila – AI Hiring Platform",
    role: "Frontend Developer",
    featured: false,
    links: {
      company: "https://invillia.ai/en/home",
    },
    stack: [
      "React", "Redux", "Tailwind CSS", "Material UI", 
      "WebSockets", "REST APIs"
    ],
    images: ["/images/projects/laila-ai.png"],
    summary: "AI-powered interview platform conducting automated technical and behavioral assessments for candidates across Brazil, Canada, and USA.",
    context: "Invillia needed scalable interview solution to evaluate candidates efficiently across international markets while maintaining consistency and reducing recruiter workload.",
    challenge: "Building responsive interview interfaces with real-time AI interactions, complex state management, and seamless integration with AI backend services.",
    solution: "Developed React interfaces with Redux state management, WebSocket connections for real-time interviews, and reusable UI components with Tailwind CSS and Material UI.",
    impact: [
      "Responsive interview interfaces for candidate sessions and recruiter dashboards",
      "Complex state management handling multiple assessment stages and real-time updates",
      "Reusable UI components maintaining design consistency across regions",
      "Real-time conversational interviews with automated evaluation and instant feedback"
    ],
    technologies: {
      frontend: ["React", "Redux", "Tailwind CSS", "Material UI"],
      realtime: ["WebSockets", "Real-time Updates"],
      integration: ["REST APIs", "AI Backend Services"]
    }
  },
  {
    slug: "usp-rag-education",
    title: "USP – Educational RAG Application",
    role: "AI/ML Developer",
    featured: false,
    links: {
      company: "https://compass.uol/en/about-us/",
    },
    stack: [
      "LangChain", "AWS Textract", "AWS Bedrock", "Pinecone", 
      "React", "Python", "Vector Databases"
    ],
    images: ["/images/projects/usp-rag.png"],
    summary: "Retrieval-Augmented Generation application for Universidade de São Paulo enabling intelligent question-answering for educational content.",
    context: "USP needed intelligent system allowing students and faculty to interact conversationally with vast academic materials, lecture notes, and research papers.",
    challenge: "Building accurate question-answering system with document processing pipelines, semantic search, and optimized retrieval for educational queries.",
    solution: "Implemented LangChain with large language models and vector databases (Pinecone/Weaviate). Built document processing with AWS Textract and React-based natural language search interface.",
    impact: [
      "Intelligent question-answering with conversational interaction for educational queries",
      "Document processing pipelines for academic materials and research papers",
      "Advanced embedding strategies improving response relevance by 40%",
      "Natural language search interface for students and faculty"
    ],
    technologies: {
      ai: ["LangChain", "AWS Bedrock", "Large Language Models", "NLP"],
      processing: ["AWS Textract", "Document Processing", "Custom Workflows"],
      search: ["Pinecone", "Weaviate", "Vector Embeddings", "Semantic Search"],
      frontend: ["React", "Natural Language Interface"]
    }
  },
  {
    slug: "invillia-enterprise-ai",
    title: "Invillia – Enterprise AI Applications",
    role: "Frontend Engineer", 
    featured: false,
    links: { 
      live: "https://invillia.ai/en/home" 
    },
    stack: ["React", "TypeScript", "Enterprise UI"],
    images: ["/images/projects/invillia.png"],
    summary: "Frontend development for enterprise AI/automation platforms with complex business workflows and high performance requirements.",
    challenge: "Building robust frontend interfaces for enterprise AI applications with seamless API integration and type safety.",
    solution: "React components with TypeScript for type safety, modern UI patterns, and effective cross-functional team collaboration.",
    impact: [
      "Scalable frontend components for AI workflows",
      "Enhanced code quality through TypeScript implementation",
      "Effective collaboration with cross-functional teams"
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Modern UI"],
      integration: ["REST APIs", "Enterprise Systems"]
    }
  },
  {
    slug: "mumalieff-ecommerce",
    title: "Mumalieff – E-commerce Platform",
    role: "Full-stack Developer",
    featured: false,
    links: { 
      live: "https://www.mumalieff.com/" 
    },
    stack: ["React", "Node.js", "MongoDB", "Paystack"],
    images: ["/images/projects/mumalieff.png"],
    summary: "Complete e-commerce solution for branded T-shirts with modern storefront, product catalog, and secure payment processing.",
    challenge: "Creating full e-commerce experience with shopping cart, inventory management, and payment integration.",
    solution: "React storefront with Node.js backend, MongoDB database, integrated Paystack payments, and automated customer communications.",
    impact: [
      "Modern responsive e-commerce interface",
      "Secure payment processing integration",
      "Automated customer communication system"
    ],
    technologies: {
      frontend: ["React", "JavaScript"],
      backend: ["Node.js", "MongoDB"],
      integrations: ["Paystack", "SendGrid"]
    }
  },
  {
    slug: "gilt-counselling",
    title: "Gilt Counselling – Professional Website",
    role: "Full-stack Developer",
    featured: false,
    links: { 
      live: "https://giltcounselling.com/" 
    },
    stack: ["Next.js", "TidyCal", "SendGrid"],
    images: ["/images/projects/gilt.png"],
    summary: "Professional counselling website with integrated booking system and secure passwordless authentication.",
    challenge: "Creating trustworthy healthcare website with seamless appointment booking and secure client communications.",
    solution: "Next.js website with TidyCal booking integration, magic-link authentication, and automated email communications via SendGrid.",
    impact: [
      "Professional website enhancing client trust",
      "Seamless appointment booking system",
      "Secure passwordless authentication"
    ],
    technologies: {
      frontend: ["Next.js", "React"],
      integrations: ["TidyCal", "SendGrid", "Magic-link Auth"]
    }
  },
  {
    slug: "nsight-ai-chatbot",
    title: "nSight Live – AI Customer Support",
    role: "AI Developer",
    featured: false,
    links: { 
      company: "https://nsightlive.com/" 
    },
    stack: ["Amazon Lex", "Bedrock", "React", "Lambda", "Twilio"],
    images: ["/images/projects/nsight.png"],
    summary: "AI-powered customer support bot for automotive dealerships with knowledge base integration and multi-channel communication.",
    challenge: "Building sophisticated AI chatbot with natural language understanding, accurate responses, and multi-channel delivery.",
    solution: "Amazon Lex and Bedrock (Claude 3.5) implementation with React admin panel, Lambda serverless pipeline, and Twilio Flex integration.",
    impact: [
      "Automated customer support with AI responses and knowledge base queries",
      "Admin panel for bot management and conversation monitoring",
      "Multi-channel communication (SMS, email, web) improving engagement by 60%",
      "Reduced average response times by 75% while maintaining satisfaction"
    ],
    technologies: {
      ai: ["Amazon Lex", "Amazon Bedrock", "Claude 3.5"],
      backend: ["AWS Lambda", "DynamoDB", "EventBridge"],
      frontend: ["React", "Admin Dashboard"],
      integration: ["Twilio Flex", "Multi-channel Communication"]
    }
  }
]

export const otherEngagements = [
  {
    name: "Compass UOL",
    url: "https://compass.uol/en/about-us/",
    role: "Software Developer",
    period: "Feb 2023 – Present"
  },
  {
    name: "SLB",
    url: "https://www.slb.com/",
    role: "Automation Project",
    period: "Project"
  },
  {
    name: "Rewod Technologies", 
    url: "https://www.rewodtechnologies.com/",
    role: "Backend Developer",
    period: "Oct 2022 – Mar 2023"
  }
]