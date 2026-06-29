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
}

export const servicesData: ServiceItem[] = [
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
      "Untuk memenuhi kebutuhan pelanggan, WALUYA saat ini menyediakan Server Colocation Indonesia di Batam, Makassar dan Jakarta. Colocation Server adalah layanan penyewaan tempat untuk meletakkan server Anda.",
    features: [
      "Data center di Batam, Makassar, dan Jakarta",
      "Harga kompetitif dan terjangkau",
      "Koneksi internet langsung",
      "Infrastruktur handal",
      "Akses 24/7",
    ],
    subServices: [
      {
        name: "Colocation Services",
        description:
          "Layanan ruang rak untuk menempatkan server Anda di data center kami.",
      },
      {
        name: "Dedicated Server",
        description:
          "Layanan sewa server yang ditempatkan di data center, peralatan disediakan dan dikelola oleh Waluya.",
      },
      {
        name: "Virtual Private Server (VPS)",
        description:
          "Batu loncatan untuk dedicated server dengan penggunaan fleksibel.",
      },
      {
        name: "Rack Solution",
        description:
          "Solusi penyimpanan private server dengan Rak tertutup 45U, akses kunci pribadi.",
      },
    ],
  },
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
      "Sebuah sistem untuk memantau semua aktivitas dari konektivitas pelanggan Waluya ke internet. Selain itu, sistem ini juga memiliki fungsi sebagai peringatan dini apabila terjadi gangguan koneksi ke pelanggan, sehingga Waluya dapat memberikan solusi secara cepat dan tepat.",
    features: [
      "Monitoring aktivitas konektivitas real-time",
      "Sistem peringatan dini (early warning)",
      "Deteksi gangguan koneksi otomatis",
      "Respons cepat dan tepat",
      "Dashboard monitoring lengkap",
      "Peta monitoring VPN-IP",
    ],
  },
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
      "Waluya mengkhususkan diri dalam menyatukan subsistem komponen menjadi satu solusi dan memastikan bahwa subsistem tersebut berfungsi bersama, praktik yang dikenal sebagai System Integrator.",
    features: [
      "Integrasi jaringan komputer",
      "Solusi Keamanan TI",
      "Telekomunikasi enterprise",
      "Integrasi aplikasi perusahaan",
      "Manajemen proses bisnis",
      "Solusi Automation",
      "Partnership dengan brand global",
    ],
  },
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
      "Waluya memberikan layanan pengelolaan teknologi informasi (TI) dan bertanggung jawab untuk menyediakan layanan jaringan, aplikasi berorientasi perusahaan, untuk organisasi bisnis dan individu.",
    features: [
      "Monitoring 24/7",
      "Reporting berkala",
      "Maintenance rutin",
      "Continuous Improvement",
      "Remote Support",
      "Proactive Support",
      "Perlindungan jaringan dan aplikasi",
      "Tim bersertifikasi industri",
    ],
  },
];