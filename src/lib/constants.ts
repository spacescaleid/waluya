export const SITE_CONFIG = {
  name: "PT Waluya Istana Nusantara",
  shortName: "Waluya",
  fullName: "PT Waluya Istana Nusantara (WIN)",
  description:
    "One Stop IT Solution untuk segala permasalahan Teknologi Informasi. Internet, Colocation, System Integrator, Network Monitoring, dan Managed Service.",
  url: "https://waluya.co.id",
  email: "Coorporate@waluya.co.id",
  phone: "0811-9660-647",
  phoneRaw: "08119660647",
  whatsapp: "6281196606470",
  address: "Cipanas, Cianjur, Jawa Barat, Indonesia",
  addressFull: "JL Loji Timur RT 01 RW 17 Desa Cipanas Kecamatan Cipanas Kab Cianjur 43253",
  addressShort: "Cipanas, Cianjur",
  coordinates: {
    lat: -6.7411244,
    lng: 107.0404601,
  },
  googleMapsUrl: "https://www.google.com/maps/place/PT.+CORE+DIGITAL+NETWORK+(CDN)/@-6.7411244,107.0378852,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69b3002390cccb:0x5c6e1a370d91c8a3!8m2!3d-6.7411244!4d107.0404601",
  founded: "21 Maret 2015",
  foundedYear: "2015",
  tagline: "One Stop IT Solution untuk Bisnis Anda.",
  established: "Akta No. 9 - 21 Maret 2015",
};

export const COMPANY_STATS = [
  { value: "2015", label: "Tahun Berdiri", suffix: "" },
  { value: "99", label: "Network Uptime", suffix: "%" },
  { value: "8", label: "Kota Coverage", suffix: "+" },
  { value: "24/7", label: "Support Tersedia", suffix: "" },
];

export const COVERAGE_CITIES = [
  "Jakarta",
  "Kab. Cianjur",
  "Kota Sukabumi",
  "Kab. Sukabumi",
  "Kota Cirebon",
  "Kab. Cirebon",
  "Kab. Kuningan",
  "Bengkulu",
];

export const NETWORK_BACKBONE = [
  { name: "Singapore Equinix", description: "International Internet Backbone" },
  { name: "Open IXP", description: "Internet Exchange Point" },
  { name: "APJII", description: "Asosiasi Penyelenggara Jasa Internet Indonesia" },
];

export const TECH_PARTNERS = [
  { name: "Cisco", capabilities: ["Router", "Switch", "Access Point", "SDWAN"] },
  { name: "Citrix", capabilities: ["Router", "Router Cellular", "Access Point", "SDWAN", "Security"] },
  { name: "Mikrotik", capabilities: ["Router", "Switch", "Access Point"] },
  { name: "Maipu", capabilities: ["Router", "Switch", "Router Cellular", "SDWAN"] },
  { name: "Fortinet", capabilities: ["Router", "SDWAN", "Security Appliance"] },
  { name: "Ubiquiti", capabilities: ["Switch", "Access Point", "SDWAN"] },
];

export const BUSINESS_MODELS = [
  {
    id: "otc",
    name: "OTC (One Time Charge)",
    shortName: "OTC",
    icon: "ShoppingCart",
    description:
      "Penyediaan peralatan sesuai kebutuhan pelanggan dengan metode beli-putus.",
  },
  {
    id: "rent",
    name: "Rent",
    shortName: "Rent",
    icon: "Calendar",
    description:
      "Penyediaan peralatan sesuai kebutuhan pelanggan dengan masa sewa sesuai kesepakatan. Model bisnis ini belum termasuk layanan instalasi.",
  },
  {
    id: "rent-buy",
    name: "Rent-Buy",
    shortName: "Rent-Buy",
    icon: "Repeat",
    description:
      "Penyediaan peralatan dengan masa sewa tertentu, dimana pada akhir masa sewa peralatan akan menjadi milik pelanggan. Meliputi jasa pemasangan dan perawatan selama masa sewa.",
  },
  {
    id: "manage-service",
    name: "Manage Service",
    shortName: "Managed",
    icon: "ShieldCheck",
    description:
      "Penyediaan peralatan dengan jangka waktu sewa tertentu, termasuk pemasangan, pemeliharaan, dan penyediaan peralatan pengganti.",
  },
];