'use client';
import { motion } from 'framer-motion';
import FormattedText from './formattedText';

export interface StepperProps {
  title?: string;
  subtitle?: string;
  items: {
    title: string;
    subtitle: string;
    description: string;
  }[];
}

const leftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const rightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default function Stepper({ title, subtitle, items }: StepperProps) {
  return (
    <section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="max-w-2xl relative mx-auto flex flex-col gap-2 px-6  overflow-x-hidden"
      >
        {items?.map((item, index) => (
          <motion.div
            key={index}
            variants={index % 2 == 0 ? leftVariant : rightVariant}
            transition={{
              delay: Number(`${index * 0.4}`),
              duration: 0.8,
            }}
            className={`flex gap-4 w-full relative ${index % 2 == 0 ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`${index % 2 == 0 ? 'sm:translate-x-5 -translate-x-3' : 'sm:-translate-x-3 translate-x-3'} border rounded-sm shadow p-4 sm:max-w-64 w-1/2 space-y-1 `}
            >
              <FormattedText className="text-primary-color font-bold">
                {item.subtitle}
              </FormattedText>
              <FormattedText className="sm:text-lg text-sm font-medium">{item.title}</FormattedText>
              <FormattedText className="text-xs">{item.description}</FormattedText>
            </div>

            {/* rounded circle  */}
            <div className="w-3 h-3 rounded-full bg-red-400 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-20" />
          </motion.div>
        ))}

        {/* doted line  */}
        <div className="w-0 left-[50%] -translate-x-[50%] border-2 border-black/40 border-dashed h-[86%] absolute" />
      </motion.div>
    </section>
  );
}
