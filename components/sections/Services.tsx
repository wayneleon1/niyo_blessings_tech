'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Monitor,
  GraduationCap,
  Globe,
  Camera,
  Package
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'IT Services & Support',
      description: 'Professional computer and mobile device maintenance, troubleshooting, and repair services',
      features: [
        'Computer repairs and maintenance',
        'Mobile device servicing',
        'Network setup and configuration',
        'Technical support and consultation',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: GraduationCap,
      title: 'Education & Digital Skills Training',
      description: 'Comprehensive training programs designed to empower youth and businesses with essential digital skills',
      features: [
        'Basic computer literacy courses',
        'Advanced software training',
        'Digital marketing workshops',
        'Youth empowerment programs',
      ],
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Globe,
      title: 'Web Development & Online Solutions',
      description: 'Custom website development and digital solutions to establish your online presence',
      features: [
        'Custom website design and development',
        'E-commerce solutions',
        'Website maintenance and hosting',
        'Digital transformation consulting',
      ],
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: Camera,
      title: 'Photography & Video Editing',
      description: 'Professional photography and video production services for events, businesses, and personal projects',
      features: [
        'Event photography and videography',
        'Professional video editing',
        'Product photography',
        'Social media content creation',
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Package,
      title: 'IT Equipment Supply & Maintenance',
      description: 'Quality IT equipment supply and ongoing maintenance services for individuals and businesses',
      features: [
        'Computer and laptop sales',
        'Accessories and peripherals',
        'Equipment maintenance contracts',
        'Technology consultation',
      ],
      color: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our Service Divisions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Comprehensive technology solutions tailored to meet the needs of rural communities and small businesses
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group bg-white dark:bg-slate-800"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 text-slate-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-slate-600 dark:text-slate-400">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color} mt-2 flex-shrink-0`}></div>
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Each service division is designed to support our mission of bringing technology
            closer to rural communities. Whether you're a student, small business owner, or
            organization, we have the expertise and passion to help you succeed.
          </p>
        </div>
      </div>
    </section>
  );
}
