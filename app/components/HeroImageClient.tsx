"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroImageClient() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Image src="/natat.png" alt="APC Campaign crowd" width={600} height={600} className="mx-auto rounded-full" />
    </motion.div>
  );
}