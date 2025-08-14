export const projects = [
  {
    slug: "freedom-ride-hailing",
    title: "Freedom – Ride Hailing Platform",
    role: "Full-stack Developer (Present)",
    featured: true,
    links: {
      live: "https://www.freedomghana.com/",
    },
    stack: [
      "React", "JavaScript", "Node.js", "Express", "MongoDB", 
      "SendGrid", "Twilio", "Google Maps", "AWS EC2", "FCM", 
      "Socket.IO", "Redis", "S3", "Nginx", "GitHub Actions", 
      "CodeDeploy", "Paystack"
    ],
    summary: "Built comprehensive full-stack e-hailing platform with real-time ride matching, payment processing, and AWS infrastructure for seamless ride-hailing experience in Ghana.",
    context: "Freedom is a production ride-hailing platform serving passengers and drivers in Ghana, requiring real-time matching, secure payments, and scalable infrastructure.",
    challenge: "Building a complete ride-hailing ecosystem from scratch with real-time features, geospatial optimization, payment integration, and robust AWS deployment pipeline.",
    solution: "Architected full-stack solution with React frontend, Node.js/Express backend, MongoDB database, real-time Socket.IO communication, Google Maps integration for distance calculation, and comprehensive AWS infrastructure with CI/CD automation.",
    impact: [
      "Real-time ride matching with optimized driver-passenger distance calculation via Google Maps Distance Matrix API",
      "Automated CI/CD pipeline: GitHub Actions → AWS CodeDeploy for seamless updates",
      "Scalable infrastructure: EC2 + Nginx + Redis + S3 handling production traffic",
      "Integrated payment processing with Paystack for secure transactions",
      "SMS/Email notifications via Twilio and SendGrid for enhanced user experience"
    ],
    images: ["/screenshots/freedom-1.png", "/screenshots/freedom-2.png"],
    technologies: {
      frontend: ["React", "JavaScript", "Tailwind CSS", "Redux"],
      backend: ["Node.js", "Express", "MongoDB", "Socket.IO", "Redis"],
      cloud: ["AWS EC2", "S3", "Nginx", "GitHub Actions", "CodeDeploy"],
      integrations: ["Google Maps", "Paystack", "SendGrid", "Twilio", "FCM"]
    }
  },
  {
    slug: "invillia-enterprise-ai",
    title: "Invillia – Enterprise AI/Automation Apps",
    role: "Frontend Developer (Present)", 
    featured: true,
    links: { 
      live: "https://invillia.ai/en/home" 
    },
    stack: ["React", "TypeScript", "Enterprise UI", "API Integration"],
    summary: "Frontend development for enterprise web applications in the AI/automation space, building robust and scalable user interfaces for complex business workflows.",
    context: "Invillia is a leading AI and automation company serving enterprise clients with sophisticated web applications requiring high performance and reliability.",
    challenge: "Developing complex frontend interfaces for enterprise AI applications with TypeScript, ensuring code quality, maintainability, and seamless integration with backend systems.",
    solution: "Built responsive, accessible React components with TypeScript for type safety, implemented modern UI patterns, and collaborated with cross-functional teams for seamless API integration.",
    impact: [
      "Delivered robust frontend components for enterprise AI workflows",
      "Collaborated with backend and product teams for scalable feature development",
      "Implemented TypeScript for enhanced code quality and maintainability",
      "Built responsive interfaces serving enterprise clients globally"
    ],
    images: ["/screenshots/invillia-1.png", "/screenshots/invillia-2.png"],
    technologies: {
      frontend: ["React", "TypeScript", "Modern UI", "Responsive Design"],
      integration: ["REST APIs", "Enterprise Systems", "Real-time Data"]
    }
  },
  {
    slug: "mumalieff-ecommerce",
    title: "Mumalieff – E-commerce Platform",
    role: "Full-stack Developer",
    links: { 
      live: "https://www.mumalieff.com/" 
    },
    stack: ["React", "Node.js", "SendGrid", "Paystack", "MongoDB"],
    summary: "Complete e-commerce solution for branded conviction T-shirts with modern storefront, secure payments, and automated email notifications.",
    context: "Mumalieff is an e-commerce brand selling conviction-based T-shirts, requiring a modern storefront with seamless shopping experience and secure payment processing.",
    challenge: "Building a complete e-commerce platform with product catalog, shopping cart, secure checkout, payment integration, and automated customer communications.",
    solution: "Developed React-based storefront with Node.js backend, integrated Paystack for payments, SendGrid for automated emails, and MongoDB for product and order management.",
    impact: [
      "Built responsive e-commerce storefront with modern UI/UX",
      "Integrated secure payment processing with Paystack",
      "Automated email notifications for orders and customer communications",
      "Scalable backend architecture supporting business growth"
    ],
    images: ["/screenshots/mumalieff-1.png"],
    technologies: {
      frontend: ["React", "JavaScript", "Responsive Design"],
      backend: ["Node.js", "Express", "MongoDB"],
      integrations: ["Paystack", "SendGrid"]
    }
  },
  {
    slug: "gilt-counselling",
    title: "Gilt Counselling – Website & Booking",
    role: "Full-stack Developer",
    links: { 
      live: "https://giltcounselling.com/" 
    },
    stack: ["Next.js", "TidyCal", "SendGrid", "Magic-link Auth"],
    summary: "Professional counselling website with integrated booking system, email notifications, and passwordless authentication for enhanced user experience.",
    context: "Gilt Counselling is a professional counselling firm in Nigeria requiring a modern website with seamless appointment booking and client communication.",
    challenge: "Creating a professional healthcare website with booking integration, secure authentication, and automated client communications while maintaining privacy and trust.",
    solution: "Built Next.js website with TidyCal booking integration, implemented magic-link authentication for security, and automated email workflows via SendGrid.",
    impact: [
      "Professional website enhancing client trust and credibility",
      "Seamless appointment booking with TidyCal integration",
      "Passwordless authentication improving user experience",
      "Automated email notifications for appointments and communications"
    ],
    images: ["/screenshots/gilt-1.png"],
    technologies: {
      frontend: ["Next.js", "React", "Responsive Design"],
      integrations: ["TidyCal", "SendGrid", "Magic-link Auth"]
    }
  },
  {
    slug: "yamaha-ml-recommendation",
    title: "Yamaha USA – ML Recommendation Engine",
    role: "ML Developer",
    links: { 
      company: "https://yamaha-motor.com/" 
    },
    stack: ["Python", "Django", "React", "AWS SageMaker", "CloudWatch"],
    summary: "Machine learning recommendation engine for Yamaha USA with predictive analytics to enhance customer engagement and decision-making processes.",
    context: "Yamaha USA needed an intelligent recommendation system to improve customer engagement and provide personalized product suggestions based on user behavior and preferences.",
    challenge: "Designing and implementing a scalable ML recommendation engine with real-time predictions, intuitive visualization, and integration with existing systems.",
    solution: "Built recommendation engine using AWS SageMaker for ML model training/deployment, Django REST Framework for API layer, and React frontend for visualization with CloudWatch monitoring.",
    impact: [
      "Enhanced customer engagement through personalized recommendations",
      "Improved decision-making processes with predictive analytics",
      "Built intuitive React interface for recommendation visualization",
      "Implemented scalable ML pipeline on AWS infrastructure"
    ],
    technologies: {
      ml: ["AWS SageMaker", "Python", "Predictive Analytics"],
      backend: ["Django REST Framework", "AWS CloudWatch"],
      frontend: ["React", "Data Visualization", "Tailwind CSS"]
    }
  },
  {
    slug: "nsight-ai-chatbot",
    title: "nSight Live – AI Customer Support Bot",
    role: "AI Developer",
    links: { 
      company: "https://nsightlive.com/" 
    },
    stack: ["Amazon Lex", "Bedrock", "React", "Lambda", "DynamoDB", "Twilio Flex"],
    summary: "AI-powered conversational bot for car dealership customer support with knowledge base integration and multi-channel communication capabilities.",
    context: "nSight Live USA required an intelligent customer support solution for car dealerships to handle inquiries, provide accurate information, and improve customer engagement.",
    challenge: "Building a sophisticated AI chatbot with natural language understanding, dynamic knowledge base integration, and multi-channel communication capabilities.",
    solution: "Implemented conversational bot using Amazon Lex and Bedrock (Claude 3.5), built React admin panel, created knowledge base pipeline with Lambda/DynamoDB, and integrated Twilio Flex for SMS/email.",
    impact: [
      "Automated customer support with AI-powered responses and dealership knowledge base",
      "Built comprehensive admin panel for bot management and interaction monitoring",
      "Implemented end-to-end pipeline for dynamic knowledge base updates",
      "Enhanced customer engagement via multi-channel communication (SMS, email)",
      "Applied robust security measures with AWS CloudWatch, IAM, and Secrets Manager"
    ],
    technologies: {
      ai: ["Amazon Lex", "Amazon Bedrock", "Claude 3.5", "Embeddings"],
      backend: ["AWS Lambda", "DynamoDB", "EventBridge"],
      frontend: ["React", "Admin Dashboard"],
      integrations: ["Twilio Flex", "nSight CRM"]
    }
  }
];

export const otherEngagements = [
  {
    name: "Compass UOL",
    url: "https://compass.uol/en/about-us/",
    role: "Full Stack Developer",
    period: "Feb 2023 – Present"
  },
  {
    name: "SLB",
    url: "https://www.slb.com/",
    role: "End-of-Well Report Automation",
    period: "Project"
  },
  {
    name: "Rewod Technologies", 
    url: "https://www.rewodtechnologies.com/",
    role: "Backend Developer",
    period: "Oct 2022 – Mar 2023"
  }
];