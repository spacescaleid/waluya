"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

// GANTI dengan data tim asli nanti
const teamMembers = [
  {
    name: "Alex",
    position: "Director",
    photo: "/images/team/alex.jpeg",
    bio: "Memimpin visi strategis perusahaan dengan pengalaman puluhan tahun di industri IT.",
    linkedin: "#",
    email: "Coorporate@waluya.co.id",
  },
  {
    name: "Rafie Dhiyaulhaq",
    position: "Team IT",
    photo: "/images/team/rapi.jpeg",
    bio: "Mengembangkan dan memelihara sistem untuk memastikan layanan berjalan optimal.",
    linkedin: "#",
    email: "Coorporate@waluya.co.id",
  },
  {
    name: "Farros Al Warisi",
    position: "Team IT",
    photo: "/images/team/farros.jpeg",
    bio: "Mengembangkan dan memelihara sistem untuk memastikan layanan berjalan optimal.",
    linkedin: "#",
    email: "Coorporate@waluya.co.id",
  },
  {
    name: "Nama Manager",
    position: "Business Development",
    photo: "/images/team/business.jpg",
    bio: "Membangun kemitraan strategis dan mengembangkan bisnis ke pasar yang lebih luas.",
    linkedin: "#",
    email: "business@waluya.co.id",
  },
];

export function AboutTeam() {
  return (
    <SectionWrapper className="bg-background-secondary">
      <Container>
        <SectionHeader
          eyebrow="Tim Kami"
          title="Profesional di Balik Waluya"
          description="Tim berpengalaman dan bersertifikasi yang siap memberikan solusi IT terbaik untuk kebutuhan bisnis Anda."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface transition-all hover:border-brand-primary/40 hover:shadow-card-hover"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden bg-background-elevated">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement!;
                    parent.classList.add("flex", "items-center", "justify-center");
                    const fallback = document.createElement("div");
                    fallback.className = "text-center p-6";
                    fallback.innerHTML = `
                      <div class="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                      </div>
                      <div class="text-xs text-content-tertiary">[ Foto Tim ]</div>
                      <div class="text-[10px] text-content-tertiary mt-1 opacity-60">${member.photo}</div>
                    `;
                    parent.appendChild(fallback);
                  }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-surface via-transparent to-transparent opacity-60" />

                {/* Social Links Overlay */}
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-gradient-to-t from-background-surface via-background-surface/90 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary text-white transition-all hover:bg-brand-dark hover:scale-110"
                    aria-label={`LinkedIn ${member.name}`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-background-elevated text-content-primary transition-all hover:bg-brand-primary hover:text-white hover:scale-110"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="mb-1 text-base font-bold text-content-primary">
                  {member.name}
                </h3>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-tertiary">
                  {member.position}
                </p>
                <p className="text-xs leading-relaxed text-content-tertiary">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note for owner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-12 max-w-2xl rounded-xl border border-dashed border-border-default bg-background-surface/50 p-5 text-center"
        >
          <p className="text-sm text-content-tertiary">
            <span className="font-semibold text-content-secondary">💡 Catatan:</span>{" "}
            Foto tim dapat ditambahkan di folder{" "}
            <code className="rounded bg-background-elevated px-1.5 py-0.5 text-xs text-brand-tertiary">
              /public/images/team/
            </code>{" "}
            dengan nama file sesuai data di komponen.
          </p>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}