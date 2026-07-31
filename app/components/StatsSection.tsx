"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { STATS } from "../data/content";
import { Reveal } from "./Reveal";

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 70, damping: 22 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    if (reduce && ref.current) {
      ref.current.textContent = `${value.toLocaleString("pt-BR")}${suffix}`;
      return;
    }

    const unsubscribe = spring.on("change", (latest) => {
      if (!ref.current) return;
      ref.current.textContent = `${Math.round(latest).toLocaleString("pt-BR")}${suffix}`;
    });
    return unsubscribe;
  }, [reduce, spring, suffix, value]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export function Impact() {
  return (
    <section id="impacto" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
        <Image
          src="/images/marcio-content.webp"
          alt="Márcio Simioni em palestra"
          fill
          className="object-cover object-[center_20%]"
          sizes="42vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--mist)] via-[color:var(--mist)]/85 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-xl">
          <p className="section-kicker">Resultados e Impacto</p>
          <h2 className="section-title mt-3">Experiência em Números</h2>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:max-w-[55%]">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.25 }}>
                <p className="font-[family-name:var(--font-display)] text-5xl tracking-tight text-[color:var(--ink)] md:text-6xl">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <h3 className="mt-2 text-base font-semibold text-[color:var(--ink)]">
                  {stat.label}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                  {stat.detail}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
