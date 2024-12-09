/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from 'framer-motion';
import { restaurantInfo } from '@/lib/data';

export function Owner() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">صاحب المطعم</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {restaurantInfo.owner.quote}
            </p>
            <div className="flex items-center">
              <div>
                <h3 className="font-bold text-xl">{restaurantInfo.owner.name}</h3>
                <p className="text-gray-600">{restaurantInfo.owner.position}</p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px]">
            <img
              src={restaurantInfo.owner.image}
              alt={restaurantInfo.owner.name}
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}