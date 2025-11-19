"use client";

import { MapPin, Target, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const features = [
    {
      icon: MapPin,
      title: "Located in Nyamasheke",
      description:
        "Serving the local community and surrounding rural areas with accessible technology services",
    },
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To educate, equip, and empower youth and small businesses with modern technology skills",
    },
    {
      icon: Users,
      title: "Community Focused",
      description:
        "Dedicated to bridging the digital divide in rural Rwanda through accessible services",
    },
    {
      icon: Zap,
      title: "Comprehensive Solutions",
      description:
        "Full spectrum of IT services from training to implementation and ongoing support",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About NIYO BLESSINGTECH
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            NIYO BLESSINGTECH SERVICES SHANGAZI LTD is a registered Rwandan
            company offering comprehensive IT-related services. We specialize in
            computer and mobile maintenance, web development, digital training,
            photography, video editing, and IT equipment supply.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-slate-800"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Transforming Rural Communities Through Technology
          </h3>
          <p className="text-emerald-50 text-lg leading-relaxed">
            We believe that access to technology and digital skills should not
            be limited by geography. Our commitment is to bring world-class IT
            services and training to Nyamasheke District and beyond, creating
            opportunities for growth and success.
          </p>
        </div>
      </div>
    </section>
  );
}
