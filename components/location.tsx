"use client";

import { motion } from 'framer-motion';
import { restaurantInfo } from '@/lib/data';

export function Location() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">موقعنا</h2>
          <p className="text-lg text-gray-600">{restaurantInfo.location.address}</p>
        </motion.div>

        <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${restaurantInfo.location.coordinates.lat},${restaurantInfo.location.coordinates.lng}`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}