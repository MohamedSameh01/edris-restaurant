/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from 'framer-motion';
import { restaurantInfo } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?q=80&w=2070"
              alt="طبق سوداني تقليدي"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">من نحن</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {restaurantInfo.about}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">ساعات العمل</h3>
                <p className="text-gray-600">أيام الأسبوع: {restaurantInfo.hours.weekdays}</p>
                <p className="text-gray-600">نهاية الأسبوع: {restaurantInfo.hours.weekends}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold mb-2">تواصل معنا</h3>
                <p className="text-gray-600">{restaurantInfo.contact.phone}</p>
                <p className="text-gray-600">{restaurantInfo.contact.email}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}