export interface PricingPackage {
  name: string;
  price: string;
  period: string;
  description?: string;
  isPopular?: boolean;
  features: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  tagline: string;
  description: string;
  fullDescription: string;
  features: string[];
  subServices?: { name: string; description: string }[];
  pricing?: PricingPackage[];
  benefits?: { title: string; description: string }[];
  useCases?: string[];
}

export const servicesData: ServiceItem[] = [
  // ============ COLOCATION ============
  {
    id: "colocation",
    slug: "colocation",
    name: "Colocation",
    shortName: "Colocation",
    icon: "Server",
    tagline: "Solusi Penyimpanan Server di Data Center Profesional",
    description:
      "Layanan penyewaan ruang server di data center Batam, Makassar, dan Jakarta dengan harga kompetitif.",
    fullDescription:
      "Layanan Colocation Server dari PT Waluya Istana Nusantara menyediakan tempat aman dan profesional untuk meletakkan server Anda. Dengan fasilitas data center di Batam, Makassar, dan Jakarta, kami menawarkan koneksi internet langsung dengan harga terjangkau. Cocok untuk perusahaan yang ingin mengelola server sendiri tanpa perlu investasi infrastruktur data center yang mahal.",
    features: [
      "Data center di Batam, Makassar, dan Jakarta",
      "Harga kompetitif dan terjangkau",
      "Koneksi internet langsung berkualitas",
      "Infrastruktur handal dengan power redundant",
      "Akses 24/7 ke server Anda",
      "Pendingin ruangan dengan suhu optimal",
      "Sistem keamanan fisik berlapis",
      "Monitoring 24/7 oleh tim teknis",
    ],
    subServices: [
      {
        name: "Colocation Services",
        description:
          "Layanan ruang rak untuk menempatkan server Anda di data center kami dengan layanan handal dan harga kompetitif.",
      },
      {
        name: "Dedicated Server",
        description:
          "Layanan sewa server yang ditempatkan di data center, peralatan disediakan dan dikelola oleh Waluya. Unmanaged Service dengan instalasi OS awal sesuai permintaan.",
      },
      {
        name: "Virtual Private Server (VPS)",
        description:
          "Batu loncatan untuk dedicated server dengan penggunaan fleksibel sesuai kebutuhan pengguna.",
      },
      {
        name: "Rack Solution",
        description:
          "Solusi penyimpanan private server dengan Rak tertutup 45U, akses kunci pribadi untuk server rackmount, server tower, atau peralatan lainnya.",
      },
    ],
    pricing: [
      {
        name: "Reseller Hosting",
        price: "35.000",
        period: "Bulan",
        features: [
          "1 GB SSD Space",
          "Unlimited Monthly Traffic",
          "Unlimited Domain",
          "LiteSpeed Web Server",
          "Multiple PHP Version",
        ],
      },
      {
        name: "VPS IIX",
        price: "100.000",
        period: "Bulan",
        isPopular: true,
        features: [
          "Memory 512 Mb",
          "1x CPU Core",
          "15 Gb SSD Space",
          "Unlimited Data Transfer",
          "Full Root Akses",
        ],
      },
      {
        name: "Dedicated Server",
        price: "1.600.000",
        period: "Bulan",
        features: [
          "Intel Xeon E3-1230 Series",
          "16 GB ECC Memory",
          "2 x 1 TB HDD",
          "Unlimited Data Transfer",
          "99% Uptime",
        ],
      },
      {
        name: "Colocation Server",
        price: "900.000",
        period: "Bulan",
        features: [
          "1U Space",
          "Unlimited Monthly Traffic",
          "Bandwidth Monitoring",
          "rDNS Support",
          "99% Uptime",
        ],
      },
    ],
    benefits: [
      {
        title: "Hemat Biaya Infrastruktur",
        description:
          "Tidak perlu investasi mahal untuk membangun data center sendiri. Sewa rack sesuai kebutuhan.",
      },
      {
        title: "Keamanan Maksimal",
        description:
          "Server Anda terlindungi oleh sistem keamanan fisik & cyber berlapis 24/7.",
      },
      {
        title: "Konektivitas Tinggi",
        description:
          "Direct connection ke backbone internet utama dengan latency rendah.",
      },
      {
        title: "Skalabilitas Mudah",
        description:
          "Mulai dari 1U hingga full rack, scale up sesuai pertumbuhan bisnis.",
      },
    ],
    useCases: [
      "Perusahaan dengan kebutuhan server custom",
      "E-commerce dengan traffic tinggi",
      "Hosting provider lokal",
      "Aplikasi enterprise yang membutuhkan reliability tinggi",
      "Backup & disaster recovery center",
    ],
  },

  // ============ NETWORK MONITORING SYSTEM ============
  {
    id: "network-monitoring",
    slug: "network-monitoring",
    name: "Network Monitoring System",
    shortName: "Network Monitoring",
    icon: "Activity",
    tagline: "Pemantauan Real-Time untuk Deteksi Dini Gangguan",
    description:
      "Sistem pemantauan aktivitas konektivitas pelanggan dengan peringatan dini untuk respons cepat dan tepat.",
    fullDescription:
      "Network Monitoring System (NMS) dari Waluya adalah solusi pemantauan jaringan menyeluruh yang memungkinkan Anda memantau performa infrastruktur IT secara real-time. Sistem ini secara aktif mendeteksi anomali, gangguan, dan potensi masalah sebelum berdampak pada bisnis Anda. Dengan dashboard yang intuitif dan sistem alert otomatis, tim IT Anda dapat merespons dengan cepat dan tepat.",
    features: [
      "Monitoring aktivitas konektivitas real-time",
      "Sistem peringatan dini (early warning)",
      "Deteksi gangguan koneksi otomatis",
      "Respons cepat dan tepat",
      "Dashboard monitoring lengkap & intuitif",
      "Peta monitoring VPN-IP visualization",
      "Alert via email, SMS, atau WhatsApp",
      "Historical data & analytics report",
      "Multi-device support",
      "SLA tracking & reporting",
    ],
    pricing: [
      {
        name: "Basic Monitoring",
        price: "500.000",
        period: "Bulan",
        features: [
          "Monitor up to 10 devices",
          "Email alerts",
          "Basic dashboard",
          "7 days data retention",
          "Business hours support",
        ],
      },
      {
        name: "Professional",
        price: "1.500.000",
        period: "Bulan",
        isPopular: true,
        features: [
          "Monitor up to 50 devices",
          "Email + SMS + WhatsApp alerts",
          "Advanced dashboard",
          "30 days data retention",
          "Priority support 24/7",
          "Custom reports",
          "API access",
        ],
      },
      {
        name: "Enterprise",
        price: "3.500.000",
        period: "Bulan",
        features: [
          "Unlimited devices",
          "Multi-channel alerts",
          "Custom dashboard",
          "1 year data retention",
          "Dedicated account manager",
          "SLA guarantee 99.9%",
          "On-premise option available",
          "Integration with existing tools",
        ],
      },
    ],
    benefits: [
      {
        title: "Deteksi Dini",
        description:
          "Identifikasi masalah sebelum berdampak pada operasional bisnis Anda.",
      },
      {
        title: "Mengurangi Downtime",
        description:
          "Response time lebih cepat berarti downtime lebih singkat dan kerugian minimal.",
      },
      {
        title: "Visibilitas Penuh",
        description:
          "Pantau seluruh infrastruktur IT dari satu dashboard terpadu.",
      },
      {
        title: "Data-Driven Decision",
        description:
          "Laporan & analytics membantu pengambilan keputusan IT yang lebih baik.",
      },
    ],
    useCases: [
      "ISP yang ingin memantau kualitas layanan",
      "Perusahaan dengan branch office multi-lokasi",
      "Data center operator",
      "Managed Service Provider (MSP)",
      "Enterprise IT department",
    ],
  },

  // ============ SYSTEM INTEGRATOR ============
  {
    id: "system-integrator",
    slug: "system-integrator",
    name: "System Integrator",
    shortName: "System Integrator",
    icon: "Network",
    tagline: "Integrasi Subsistem IT Menjadi Solusi Terpadu",
    description:
      "Menyatukan subsistem komponen IT menjadi satu solusi terintegrasi yang berfungsi optimal bersama.",
    fullDescription:
      "Layanan System Integrator dari Waluya membantu perusahaan Anda mengintegrasikan berbagai subsistem IT — mulai dari jaringan, keamanan, telekomunikasi, hingga aplikasi enterprise — menjadi satu ekosistem yang berfungsi seamless. Dengan pengalaman menangani berbagai industri, kami memastikan setiap komponen bekerja optimal bersama untuk mendukung produktivitas dan efisiensi bisnis Anda.",
    features: [
      "Integrasi jaringan komputer enterprise",
      "Solusi Keamanan TI (firewall, antivirus, IDS/IPS)",
      "Telekomunikasi enterprise (VoIP, video conference)",
      "Integrasi aplikasi perusahaan (ERP, CRM)",
      "Manajemen proses bisnis (BPM)",
      "Solusi Automation & Workflow",
      "Partnership dengan brand global (Cisco, Fortinet, Mikrotik)",
      "Konsultasi & assessment infrastruktur",
      "Implementasi end-to-end",
      "Training & knowledge transfer",
    ],
    pricing: [
      {
        name: "Small Business",
        price: "15.000.000",
        period: "Project",
        features: [
          "Network setup & configuration",
          "Basic security implementation",
          "1 server integration",
          "Documentation",
          "1 month support",
        ],
      },
      {
        name: "Medium Enterprise",
        price: "50.000.000",
        period: "Project",
        isPopular: true,
        features: [
          "Multi-site network integration",
          "Advanced security solution",
          "Up to 5 servers integration",
          "VoIP system implementation",
          "Application integration",
          "Comprehensive documentation",
          "3 months support",
          "Staff training",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "Quote",
        features: [
          "Full enterprise integration",
          "Enterprise-grade security",
          "Unlimited servers",
          "Complete telecom solution",
          "Custom application development",
          "Full documentation & SOP",
          "1 year support included",
          "Dedicated project manager",
          "24/7 emergency support",
        ],
      },
    ],
    benefits: [
      {
        title: "One Stop Solution",
        description:
          "Satu vendor untuk semua kebutuhan IT, dari hardware hingga software integration.",
      },
      {
        title: "Brand Terpercaya",
        description:
          "Partnership resmi dengan Cisco, Fortinet, Mikrotik, dan brand global lainnya.",
      },
      {
        title: "Tim Bersertifikasi",
        description:
          "Engineer kami memiliki sertifikasi internasional di bidang masing-masing.",
      },
      {
        title: "Garansi Kualitas",
        description:
          "Setiap implementasi dilengkapi dengan SLA dan garansi service.",
      },
    ],
    useCases: [
      "Perusahaan yang sedang melakukan digital transformation",
      "Branch office yang butuh konektivitas terpusat",
      "Implementasi kantor baru",
      "Upgrade infrastruktur IT existing",
      "Integrasi sistem M&A (Merger & Acquisition)",
    ],
  },

  // ============ MANAGED SERVICE ============
  {
    id: "managed-service",
    slug: "managed-service",
    name: "Managed Service",
    shortName: "Managed Service",
    icon: "Settings",
    tagline: "Pengelolaan IT Profesional dengan Pemantauan 24/7",
    description:
      "Layanan pengelolaan teknologi informasi dengan pemantauan, pemeliharaan, dan dukungan proaktif.",
    fullDescription:
      "Managed Service dari Waluya memungkinkan Anda fokus pada bisnis utama, sementara kami yang mengurus seluruh aspek IT Anda. Dari monitoring 24/7, maintenance rutin, hingga incident response, tim kami yang berpengalaman dan tersertifikasi siap menjaga infrastruktur IT Anda berjalan optimal sepanjang waktu. Cocok untuk perusahaan yang ingin mengurangi beban operasional IT internal tanpa mengorbankan kualitas.",
    features: [
      "Monitoring 24/7/365",
      "Reporting berkala (harian, mingguan, bulanan)",
      "Maintenance rutin terjadwal",
      "Continuous Improvement program",
      "Remote Support unlimited",
      "Proactive Support & maintenance",
      "Perlindungan jaringan dan aplikasi",
      "Tim bersertifikasi industri",
      "Incident response time SLA",
      "Disaster recovery planning",
      "Security patch management",
      "Backup & recovery service",
    ],
    pricing: [
      {
        name: "Starter Managed",
        price: "2.500.000",
        period: "Bulan",
        features: [
          "Monitoring 8/5",
          "Up to 10 devices",
          "Monthly maintenance",
          "Email & phone support",
          "Monthly report",
          "Basic security management",
        ],
      },
      {
        name: "Business Managed",
        price: "5.000.000",
        period: "Bulan",
        isPopular: true,
        features: [
          "Monitoring 24/7",
          "Up to 50 devices",
          "Weekly maintenance",
          "Priority support",
          "Weekly reports",
          "Advanced security management",
          "Backup management",
          "Quarterly business review",
          "On-site visit (2x/bulan)",
        ],
      },
      {
        name: "Enterprise Managed",
        price: "15.000.000",
        period: "Bulan",
        features: [
          "Monitoring 24/7/365",
          "Unlimited devices",
          "Daily maintenance",
          "Dedicated support team",
          "Custom reporting",
          "Enterprise security suite",
          "Full backup & DR service",
          "Monthly business review",
          "On-site visit unlimited",
          "Dedicated account manager",
          "SLA 99.9% uptime guarantee",
          "Compliance & audit support",
        ],
      },
    ],
    benefits: [
      {
        title: "Hemat Biaya Operasional",
        description:
          "Lebih hemat dibanding hire tim IT internal dengan kualitas yang setara atau lebih baik.",
      },
      {
        title: "Tim Ahli Bersertifikasi",
        description:
          "Akses ke pool engineer berpengalaman tanpa biaya rekrutmen & training.",
      },
      {
        title: "Fokus ke Core Business",
        description:
          "Tidak perlu khawatir soal IT, fokus pengembangan bisnis utama Anda.",
      },
      {
        title: "Proactive Maintenance",
        description:
          "Cegah masalah sebelum terjadi dengan monitoring & maintenance proaktif.",
      },
    ],
    useCases: [
      "Startup yang ingin scale tanpa hire IT besar",
      "Perusahaan SME yang tidak punya tim IT",
      "Perusahaan dengan cabang multi-lokasi",
      "Organisasi non-profit dengan budget terbatas",
      "Perusahaan yang ingin outsource IT operations",
    ],
  },
];