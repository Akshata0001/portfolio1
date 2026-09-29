export interface Project {
  id: string;
  number: string;
  title: string;
  technology: string;
  badgeTech: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  architecture?: string[];
  codePreview?: {
    filename: string;
    language: string;
    code: string;
  };
  githubUrl: string;
}

export interface SkillItem {
  name: string;
  description: string;
  level: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  type: string;
  badge: string;
  description: string;
  keyTakeaway: string;
  verified: boolean;
}

export interface JourneyMilestone {
  step: number;
  title: string;
  focus: string;
  skillsLearned: string[];
  handsOnDetails: string;
  status: 'completed' | 'active';
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "AKSHATA SANGANNA METRI",
    firstName: "Akshata",
    tagline: "Cybersecurity Enthusiast | Computer Science Student | Software Developer",
    shortBio:
      "Passionate Computer Science student exploring cybersecurity, ethical hacking, networking, and software development. I enjoy building practical projects, solving security challenges, and continuously learning emerging technologies.",
    quote: "Turning curiosity into code and security into solutions.",
    journeyStatement:
      "I am continuously developing my cybersecurity knowledge through hands-on learning, security challenges, networking concepts, and practical projects.",
    college: "Alvas Institute of Engineering and Technology (AIET)",
    degree: "B.E. Computer Science & Engineering",
    currentYear: "Currently 3rd Year",
    cgpa: "8.1",
    email: "akshatametri714@gmail.com",
    githubUrl: "https://github.com/Akshata0001",
    linkedinUrl: "https://linkedin.com/in/akshata-metri-5b9232363",
    location: "Karnataka, India",
    status: "Available for Internships & Projects",
  },

  skillsCategories: [
    {
      title: "Cybersecurity",
      subtitle: "Defensive concepts, vulnerability exploration, and CTF challenges",
      iconName: "Shield",
      skills: [
        {
          name: "Cybersecurity Fundamentals",
          description: "Core principles including CIA triad, authentication mechanisms, attack surfaces, and risk mitigation.",
          level: "Advanced Foundation",
          tags: ["CIA Triad", "Access Control", "Threat Modeling", "Security Policies"],
        },
        {
          name: "Network Security",
          description: "Understanding network defenses, packet inspection, firewalls, and secure communications protocols.",
          level: "Practicing",
          tags: ["Wireshark", "Packet Filtering", "TLS/SSL", "Defense in Depth"],
        },
        {
          name: "Ethical Hacking Fundamentals",
          description: "Foundational techniques in reconnaissance, port auditing, vulnerability assessment, and OWASP Top 10.",
          level: "Intermediate",
          tags: ["Reconnaissance", "OWASP Top 10", "Vulnerability Auditing", "Lab Testing"],
        },
        {
          name: "CTF / Security Challenges",
          description: "Hands-on jeopardy-style competitions tackling web challenges, cryptanalysis, forensics, and reverse thinking.",
          level: "Competitive Finalist",
          tags: ["Agamya Finalist", "Forensics", "Cryptanalysis", "Web Exploits"],
        },
      ],
    },
    {
      title: "Networking",
      subtitle: "Protocol hierarchies, network scanning, and infrastructure flow",
      iconName: "Network",
      skills: [
        {
          name: "Computer Networking",
          description: "Deep understanding of OSI 7-layer model, TCP/IP stack, routing logic, subnet masks, DNS, and HTTP/HTTPS.",
          level: "Strong Academic & Hands-on",
          tags: ["OSI Model", "TCP/IP Stack", "Subnetting", "DNS / DHCP"],
        },
        {
          name: "Nmap",
          description: "Network mapping, active host discovery, port scanning techniques (SYN, UDP, Connect), OS fingerprinting, and NSE scripts.",
          level: "Proficient",
          tags: ["Port Scanning", "Host Discovery", "NSE Scripts", "Banner Grabbing"],
        },
      ],
    },
    {
      title: "Programming",
      subtitle: "Object-oriented software construction and robust backend logic",
      iconName: "Code",
      skills: [
        {
          name: "Java",
          description: "Object-oriented architecture, collections framework, exception handling, multithreading basics, and file I/O operations.",
          level: "Core Strength",
          tags: ["OOP Principles", "Collections API", "Exception Handling", "File I/O"],
        },
        {
          name: "Python",
          description: "Scripting, rapid prototyping, data processing modules, automation scripts, and modular clean code.",
          level: "Core Strength",
          tags: ["Automation Scripts", "Data Handling", "Modular Design", "CLI Tools"],
        },
        {
          name: "SQL",
          description: "Relational database schema modeling, normalized 3NF structures, complex joins, indexing, and transactional integrity.",
          level: "Proficient",
          tags: ["Relational Schema", "Complex Queries", "Normalization (3NF)", "Data Integrity"],
        },
      ],
    },
    {
      title: "Tools & Platforms",
      subtitle: "Development ecosystem, collaborative versioning, and learning platforms",
      iconName: "Cpu",
      skills: [
        {
          name: "Linux",
          description: "Comfortable navigating GNU/Linux environments, shell command pipelines, bash scripts, process management, and access permissions.",
          level: "Daily Driver / Lab",
          tags: ["Bash Commands", "Permissions (chmod/chown)", "Process Auditing", "Shell CLI"],
        },
        {
          name: "Git & GitHub",
          description: "Version control workflows, commit etiquette, branch management, pull requests, and collaborative repository maintenance.",
          level: "Proficient",
          tags: ["Version Control", "Branching", "Code Collaboration", "Repo Management"],
        },
        {
          name: "Ebox",
          description: "Extensive hands-on algorithmic problem solving, automated testing environments, and rigorous coding evaluations.",
          level: "Certified",
          tags: ["Problem Solving", "Automated Assessments", "Agile Modules", "Code Verification"],
        },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "hostel-management",
      number: "01",
      title: "Hostel Management System",
      technology: "Java",
      badgeTech: "Java · OOP · Desktop App",
      shortDescription:
        "Developed a Java-based system to manage hostel room allocation, student records, and fee tracking.",
      longDescription:
        "An enterprise-styled desktop application built entirely in Java applying strict object-oriented design principles. Solves administrative overhead in academic hostels by digitizing room availability tracking, resident student record lifecycle, monthly fee dues collection, and instant vacancy queries.",
      features: [
        "Room allocation & availability matrix",
        "Student management with profile records",
        "Fee tracking & dues calculation",
        "Record management with persistent storage",
        "Object-oriented design with clean class hierarchy",
      ],
      architecture: [
        "Models: Student, Room, HostelBlock, FeeRecord",
        "Services: AllocationManager, BillingEngine, AuditLogger",
        "Data Persistence: Structured flat file and relational records",
        "Safety: Defensive null-checks and structured error handling",
      ],
      codePreview: {
        filename: "HostelManager.java",
        language: "java",
        code: `public class AllocationService {
    private final Map<String, Room> roomInventory = new ConcurrentHashMap<>();
    private final List<Student> residentDirectory = new ArrayList<>();

    public synchronized AllocationResult allocateRoom(Student student, String roomType) {
        Room availableRoom = findAvailableRoom(roomType);
        if (availableRoom == null) {
            return AllocationResult.failure("No vacant rooms in requested tier");
        }
        availableRoom.assignOccupant(student);
        student.setAssignedRoomNumber(availableRoom.getId());
        auditLog.record("ALLOCATION", student.getEnrollmentId(), availableRoom.getId());
        return AllocationResult.success(availableRoom);
    }
}`,
      },
      githubUrl: "https://github.com/Akshata0001",
    },
    {
      id: "py-medio",
      number: "02",
      title: "Py.Medio",
      technology: "Python",
      badgeTech: "Python · Data Processing · Healthcare",
      shortDescription:
        "Built a Python application for managing and processing medical-related data with a simple user workflow.",
      longDescription:
        "A modular healthcare data processing utility engineered in Python. It parses, sanitizes, and categorizes medical records and clinical logs, eliminating formatting discrepancies and providing reliable verification checks before generating clinical summaries.",
      features: [
        "Data management & structured patient logging",
        "Data validation preventing anomalous input",
        "Modular Python functions for maintainability",
        "Reliable record handling & export pipelines",
      ],
      architecture: [
        "Validation Pipeline: Regex phone/email checking, numeric range sanitizers",
        "Processing Engine: Batch record transformation & diagnostic sorting",
        "Storage Layer: Secure serialized data and CSV summary exports",
        "Error Boundary: Custom Python exceptions for corrupted medical records",
      ],
      codePreview: {
        filename: "pymedio_processor.py",
        language: "python",
        code: `def validate_and_process_patient_record(entry: dict) -> dict:
    """Sanitizes patient payload and computes diagnostic priority."""
    required_keys = {"patient_id", "vitals", "records", "timestamp"}
    if not required_keys.issubset(entry.keys()):
        raise InvalidRecordSchemaError("Missing mandatory schema keys")
        
    sanitized = {
        "id": entry["patient_id"].strip().upper(),
        "blood_pressure": validate_bp(entry["vitals"].get("bp")),
        "glucose_mg_dl": float(entry["vitals"].get("glucose", 0.0)),
        "is_flagged": evaluate_risk_thresholds(entry["vitals"])
    }
    return sanitized`,
      },
      githubUrl: "https://github.com/Akshata0001",
    },
    {
      id: "cyber-crime-tracking",
      number: "03",
      title: "Cyber Crime Reporting and Tracking System",
      technology: "DBMS / SQL",
      badgeTech: "SQL · DBMS · Security System",
      shortDescription:
        "Designed a database-driven system to report, store, and track cyber crime complaints end to end.",
      longDescription:
        "A secure relational database application architected specifically for digital incident reporting and forensic evidence lifecycle management. Features normalized relational tables ensuring ACID compliance, role-based investigator tracking, evidence hashes, and auditable status transitions.",
      features: [
        "Complaint registration with digital incident categorization",
        "Case tracking through standardized investigation stages",
        "Normalized SQL database schema (3NF) for integrity",
        "Status management with verifiable audit timestamps",
        "Report generation for law enforcement & compliance",
      ],
      architecture: [
        "Normalized 3NF Entities: Complainant, CaseReport, CrimeCategory, EvidenceLog, OfficerLog",
        "Integrity Constraints: Foreign key cascades, status enums, non-null audit dates",
        "Security Safeguards: Prepared statement wrappers and audit trail triggers",
        "Reporting Views: Automated monthly grievance resolution analytics",
      ],
      codePreview: {
        filename: "schema_cybercrime.sql",
        language: "sql",
        code: `-- Incident Tracking Schema (3NF Normalized)
CREATE TABLE cyber_complaint (
    complaint_id VARCHAR(36) PRIMARY KEY,
    complainant_id VARCHAR(36) NOT NULL,
    crime_category VARCHAR(50) NOT NULL,
    incident_date TIMESTAMP NOT NULL,
    current_status VARCHAR(20) DEFAULT 'SUBMITTED' 
        CHECK (current_status IN ('SUBMITTED', 'UNDER_REVIEW', 'INVESTIGATING', 'RESOLVED', 'CLOSED')),
    evidence_hash VARCHAR(64),
    assigned_officer_id VARCHAR(36),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (complainant_id) REFERENCES complainant_profiles(id)
);

CREATE INDEX idx_complaint_status ON cyber_complaint(current_status, incident_date);`,
      },
      githubUrl: "https://github.com/Akshata0001",
    },
  ] as Project[],

  achievements: [
    {
      id: "agamya-ctf",
      title: "Agamya Cybertech CTF Finalist",
      issuer: "Agamya Cybertech",
      type: "Competition",
      badge: "Finalist",
      description:
        "Earned a finalist position in the competitive Agamya Cybertech Capture The Flag (CTF) tournament, solving jeopardy-style challenges across web security, digital forensics, and network analysis.",
      keyTakeaway: "Demonstrated analytical problem-solving and rapid vulnerability assessment under time-constrained competition.",
      verified: true,
    },
    {
      id: "meta-ios",
      title: "Meta iOS Developer Certificate",
      issuer: "Coursera · Meta",
      type: "Professional Certificate",
      badge: "Certified",
      description:
        "Completed rigorous coursework covering modern application architectures, responsive user interfaces, programming fundamentals, and software delivery standards.",
      keyTakeaway: "Strengthened frontend engineering disciplines, clean interface composition, and software lifecycle principles.",
      verified: true,
    },
    {
      id: "agile-ebox",
      title: "Agile Project Management",
      issuer: "Ebox",
      type: "Industry Certification",
      badge: "Certified",
      description:
        "Mastered agile software delivery methodologies, sprint cadences, backlog prioritization, cross-functional standups, and iterative development practices.",
      keyTakeaway: "Ability to collaborate effectively in modern engineering teams using structured agile workflows.",
      verified: true,
    },
    {
      id: "coursera-coursework",
      title: "Additional Coursera Coursework",
      issuer: "Coursera",
      type: "Continuous Learning",
      badge: "Completed",
      description:
        "Successfully completed verified coursework in computer systems, cybersecurity fundamentals, network communications, and software development practices.",
      keyTakeaway: "Proactive dedication to continuous self-improvement and staying updated with emerging tech trends.",
      verified: true,
    },
  ] as Achievement[],

  journeyMilestones: [
    {
      step: 1,
      title: "Computer Networks",
      focus: "Foundations & Protocol Stack",
      skillsLearned: ["OSI 7 Layers", "TCP/IP Protocol", "Packet Headers", "Wireshark Basics"],
      handsOnDetails: "Studied packet transmission dynamics, analyzed network traffic in lab environments, and mastered subnet calculations.",
      status: "completed",
    },
    {
      step: 2,
      title: "Linux",
      focus: "Operating System & Shell Mastery",
      skillsLearned: ["Bash CLI", "File Hierarchy", "Permissions & sudo", "Process Monitoring"],
      handsOnDetails: "Configured Linux virtual machines, practiced shell scripting automation, and managed file system access privileges.",
      status: "completed",
    },
    {
      step: 3,
      title: "Nmap",
      focus: "Network Discovery & Auditing",
      skillsLearned: ["Port Scanning", "Host Discovery", "Service Versioning", "NSE Scripts"],
      handsOnDetails: "Conducted simulated reconnaissance on local test subnets to identify active services, banners, and unpatched ports.",
      status: "completed",
    },
    {
      step: 4,
      title: "Ethical Hacking",
      focus: "Vulnerability Concepts & OWASP",
      skillsLearned: ["Recon Techniques", "OWASP Top 10", "Input Injection", "Security Baselines"],
      handsOnDetails: "Learned defensive mindsets by studying how common misconfigurations, weak credentials, and unvalidated inputs can be exploited.",
      status: "completed",
    },
    {
      step: 5,
      title: "CTF Challenges",
      focus: "Competitive Problem Solving",
      skillsLearned: ["Cryptanalysis", "Digital Forensics", "Web Exploitation", "Agamya Finalist"],
      handsOnDetails: "Competed in high-intensity CTF events, decoding cipher puzzles, extracting hidden file payloads, and ranking as an Agamya Finalist.",
      status: "completed",
    },
    {
      step: 6,
      title: "Network Security",
      focus: "Defensive Hardening & Traffic Defense",
      skillsLearned: ["Firewall Rules", "Intrusion Detection", "TLS/SSL Handshakes", "Defense in Depth"],
      handsOnDetails: "Explored access control list implementation, secure socket layer certificates, and practical strategies to thwart man-in-the-middle attacks.",
      status: "completed",
    },
    {
      step: 7,
      title: "Cybersecurity",
      focus: "Holistic Systems & Future Specialization",
      skillsLearned: ["Threat Intelligence", "Secure SDLC", "Incident Response", "Continuous Research"],
      handsOnDetails: "Connecting all components to build secure systems, protect data integrity, and prepare for professional security engineering roles.",
      status: "active",
    },
  ] as JourneyMilestone[],

  education: {
    institution: "Alvas Institute of Engineering and Technology (AIET)",
    degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
    period: "2023 – Present (Expected 2027)",
    currentYear: "Currently 3rd Year",
    cgpa: "8.1 / 10.0",
    highlights: [
      "Consistent academic record with CGPA of 8.1",
      "Specialized coursework: Computer Networks, Database Management Systems, Operating Systems, Object-Oriented Programming (Java), Python, Software Engineering",
      "Active participant in technical symposiums, CTF security competitions, and college developer initiatives",
      "Finalist at Agamya Cybertech CTF Championship",
    ],
  },
};
