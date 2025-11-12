'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Code, Camera, Zap } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Custom e-commerce platform for a local business',
      icon: Code,
    },
    {
      id: 2,
      title: 'Event Photography',
      category: 'photography',
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional event photography coverage',
      icon: Camera,
    },
    {
      id: 3,
      title: 'IT Support Training',
      category: 'training',
      image: 'https://images.pexels.com/photos/3862630/pexels-photo-3862630.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Digital skills training workshop',
      icon: Zap,
    },
    {
      id: 4,
      title: 'Business Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/18519337/pexels-photo-18519337.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern responsive business website',
      icon: Code,
    },
    {
      id: 5,
      title: 'Product Photography',
      category: 'photography',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional product showcase',
      icon: Camera,
    },
    {
      id: 6,
      title: 'Youth Digital Program',
      category: 'training',
      image: 'https://images.pexels.com/photos/8199576/pexels-photo-8199576.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Community digital empowerment initiative',
      icon: Zap,
    },
    {
      id: 7,
      title: 'Portfolio Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Creative portfolio platform',
      icon: Code,
    },
    {
      id: 8,
      title: 'Video Production',
      category: 'photography',
      image: 'https://images.pexels.com/photos/7731753/pexels-photo-7731753.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional video editing project',
      icon: Camera,
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'photography', name: 'Photography & Video' },
    { id: 'training', name: 'Training Programs' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Explore our latest projects showcasing our expertise in web development,
            photography, and digital training
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group bg-white dark:bg-slate-800"
            >
              <div className="relative h-64 overflow-hidden bg-slate-200 dark:bg-slate-700">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ChevronRight className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
