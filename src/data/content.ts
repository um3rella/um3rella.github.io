// Content sourced from Adrian_An_CV_Updated_July2026.pdf.
// Components read only from this file, so edits here update the whole site.

export interface SocialLink {
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'mail' | 'globe'
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  highlights: string[]
}

export interface Project {
  name: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

export const profile = {
  name: 'Adrian An',
  title: 'Data & Software Engineer',
  tagline:
    'I build HIPAA-compliant data platforms, cloud ETL pipelines, and agentic AI systems — with 10+ years of experience turning complex compliance requirements into scalable, auditable engineering solutions.',
  location: 'Sacramento, CA',
  email: 'adriandongan@gmail.com',
  phone: '(916) 396-3021',
  resumeUrl: '/resume.pdf',
  bio: [
    `I'm a data and software engineer with over 10 years of experience building
     and modernizing HIPAA-compliant data platforms for the California
     Department of Developmental Services. I led the Department's data
     de-identification guidelines (DDG) program — developing policies,
     reviewing over 1,000 data release requests, and protecting sensitive
     individual information while enabling agency-wide compliance.`,
    `My work spans large-scale ETL/ELT migrations from legacy SAS and Qlik
     pipelines to hybrid cloud architectures on AWS Glue, Lambda, and
     Snowflake, as well as a production-grade agentic AI system built with
     CrewAI, RAG architectures, AWS Bedrock, and a React/Next.js frontend.
     I bring an analytical, evidence-based approach to secure data
     governance and emerging AI/ML technologies.`,
  ],
  quickFacts: [
    { label: 'Location', value: 'Sacramento, CA' },
    { label: 'Focus', value: 'Data Engineering, AI/ML Systems, Data Governance' },
    {
      label: 'Education',
      value: 'M.S. Computer Science, CSU Sacramento',
    },
    {
      label: 'Recognition',
      value: 'Superior Accomplishment Award, DDS (2024)',
    },
    { label: 'Status', value: 'Open to opportunities' },
  ],
}

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/adriandongan',
    icon: 'linkedin',
  },
  { label: 'Email', url: 'mailto:adriandongan@gmail.com', icon: 'mail' },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Data Platforms & Warehousing',
    items: [
      'Snowflake',
      'AWS Glue',
      'AWS Lambda',
      'Step Functions',
      'S3',
      'Hybrid/CDC architectures',
      'Near-real-time pipelines',
    ],
  },
  {
    category: 'ETL/ELT & Data Integration',
    items: [
      'Python',
      'SQL',
      'SAS/Qlik migrations',
      'Data lineage',
      'Validation frameworks',
      'Orchestration & schedulers',
    ],
  },
  {
    category: 'AI/ML & Agentic Systems',
    items: [
      'CrewAI',
      'AWS Bedrock',
      'SageMaker',
      'RAG architectures',
      'React.js / Next.js',
      'Neural networks',
    ],
  },
  {
    category: 'Business Intelligence',
    items: [
      'Power BI',
      'DAX',
      'Qlik Data Catalog',
      'ArcGIS',
      'Public dashboards',
      'Workflow automation',
    ],
  },
  {
    category: 'Governance, Privacy & Security',
    items: [
      'HIPAA Privacy Rule',
      'California IPA',
      'Expert Determination',
      'PII/PHI risk assessment',
      'Encryption & allow-listing',
      'Public Records Act',
    ],
  },
  {
    category: 'Languages & Tools',
    items: [
      'Python',
      'SQL',
      'JavaScript / TypeScript',
      'Git',
      'Linux / Bash',
      'ServiceNow',
    ],
  },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'California Dept. of Developmental Services',
    period: 'May 2025 — Present',
    location: 'Sacramento, CA',
    highlights: [
      'Architected and deployed a production-grade agentic AI system automating quality assessment reviews of de-identified public data reports, using CrewAI multi-agent orchestration, AWS Bedrock for secure LLM inference, and a responsive React.js/Next.js frontend.',
      'Streamlined manual review processes while maintaining strict HIPAA compliance and full auditability.',
      'Lead technical aspects of the DDG program — final sign-off on data releases, risk assessments, and cross-agency coordination with 21 regional centers.',
    ],
  },
  {
    role: 'Data Engineer',
    company: 'California Dept. of Developmental Services',
    period: 'Sep 2020 — May 2025',
    location: 'Sacramento, CA',
    highlights: [
      "Led the Department's data de-identification guidelines (DDG) program, reviewing and approving over 1,000 requests for public information and Public Records Act inquiries.",
      'Led the full-lifecycle migration of legacy on-premises SAS and Qlik ETL pipelines to a hybrid/cloud platform on AWS Glue, Lambda, and Snowflake — reducing manual processes by 80%.',
      'Developed and operationalized the enterprise Power BI workflow and dashboard ecosystem for internal stakeholders and publicly released data products.',
      'Administered Qlik Data Catalog (metadata, lineage, governance) and ArcGIS environments supporting geospatial data integration.',
      'Performed Expert Determination and re-identification risk assessments for statewide data releases; developed SOPs, trained staff, and supported court testimony on data governance practices.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'California Dept. of Developmental Services',
    period: 'Jul 2020 — Sep 2020',
    location: 'Sacramento, CA',
    highlights: [
      'Supported data analysis, reporting, and monthly data production processes; managed production pipelines, refactored legacy code, and built data marts for reporting workflows.',
      'Rapid promotion to Information Technology Specialist I within three months.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'Agentic AI De-Identification Review System',
    description:
      'Production-grade multi-agent AI system that automates quality assessment reviews of de-identified public data reports, with secure LLM inference and full HIPAA auditability.',
    tech: ['CrewAI', 'AWS Bedrock', 'RAG', 'React.js', 'Next.js'],
  },
  {
    name: 'Legacy-to-Cloud ETL Migration',
    description:
      'Full-lifecycle migration of on-premises SAS and Qlik pipelines to AWS and Snowflake with raw/staging/curated layering, CDC patterns, and parallel validation cutover — cutting manual processes by 80%.',
    tech: ['AWS Glue', 'Lambda', 'Snowflake', 'Python', 'SQL'],
  },
  {
    name: 'Enterprise Power BI Ecosystem',
    description:
      'Department-wide Power BI workflows and dashboards for internal stakeholders and publicly released data products, with standardized models, governance guardrails, and staff training for self-service reporting.',
    tech: ['Power BI', 'DAX', 'Snowflake', 'Data Modeling'],
  },
  {
    name: 'Data De-Identification Guidelines Program',
    description:
      'Policies, processes, and tooling enabling department-wide HIPAA privacy compliance — over 1,000 data release requests reviewed, protecting sensitive information and shielding the Department from liability.',
    tech: ['HIPAA', 'Expert Determination', 'Risk Assessment', 'SOPs'],
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
