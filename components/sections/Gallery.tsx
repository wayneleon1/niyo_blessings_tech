"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

// Hardcoded gallery images
const galleryImages = [
  {
    src: "/images/2.jpeg",
    width: 4,
    height: 3,
    title: "Our Community",
  },
  {
    src: "/images/4.jpeg",
    width: 4,
    height: 3,
    title: "Our Shop",
  },
  {
    src: "/images/1.jpeg",
    width: 4,
    height: 3,
    title: "Founder",
  },

  {
    src: "/images/4.jpeg",
    width: 4,
    height: 3,
    title: "Our Shop",
  },
  {
    src: "/images/5.jpeg",
    width: 4,
    height: 3,
    title: "Work Place",
  },
];

export default function GalleryComponent() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section
      id="gallery"
      className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our Gallery
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Explore our collection of stunning images
          </p>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <div className="relative">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-sm">Click to view</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={galleryImages.map((img) => ({ src: img.src, alt: img.title }))}
        plugins={[Zoom, Fullscreen]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
      />
    </section>
  );
}
