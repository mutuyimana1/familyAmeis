"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const videoData = [
  {
    id: 1,
    category: "Politics",
    title: "Welcome To The Best Model Winner Contest At Look of the year",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod ipsum dolor sit.",
    url: "https://www.youtube.com/embed/sGbxmsDFVnE",
    thumbnails: [
      {
        title: "Welcome To The Best Model Winner Contest",
        thumb: "https://img.youtube.com/vi/sGbxmsDFVnE/0.jpg",
      },
      {
        title: "Welcome To The Best Model Winner Contest",
        thumb: "https://img.youtube.com/vi/Z1BCujX3pw8/0.jpg",
      },
      {
        title: "Welcome To The Best Model Winner Contest",
        thumb: "https://img.youtube.com/vi/oHg5SJYRHA0/0.jpg",
      },
      {
        title: "Welcome To The Best Model Winner Contest",
        thumb: "https://img.youtube.com/vi/ysz5S6PUM-U/0.jpg",
      },
    ],
  },
  {
    id: 2,
    category: "World",
    title: "The Floating Farms of Bangladesh - BBC News",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    url: "https://www.youtube.com/embed/l0JbuMVXaTs",
    thumbnails: [
      {
        title: "Floating Farms Documentary",
        thumb: "https://img.youtube.com/vi/l0JbuMVXaTs/0.jpg",
      },
      {
        title: "Welcome To The Best Model Winner Contest",
        thumb: "https://img.youtube.com/vi/ysz5S6PUM-U/0.jpg",
      },
      {
        title: "Global Climate Impact",
        thumb: "https://img.youtube.com/vi/vTIIMJ9tUc8/0.jpg",
      },
      {
        title: "Bangladesh Innovation",
        thumb: "https://img.youtube.com/vi/Z1BCujX3pw8/0.jpg",
      },
    ],
  },
  {
    id: 3,
    category: "Environment",
    title: "Rising Sea Levels and Coastal Life",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur?",
    url: "https://www.youtube.com/embed/LXb3EKWsInQ",
    thumbnails: [
      {
        title: "Sea Levels Rising",
        thumb: "https://img.youtube.com/vi/LXb3EKWsInQ/0.jpg",
      },
      {
        title: "Welcome To The Best Model Winner Contest",
        thumb: "https://img.youtube.com/vi/oHg5SJYRHA0/0.jpg",
      },
      {
        title: "Climate Change Update",
        thumb: "https://img.youtube.com/vi/ysz5S6PUM-U/0.jpg",
      },
      {
        title: "Global Impact Study",
        thumb: "https://img.youtube.com/vi/Z1BCujX3pw8/0.jpg",
      },
    ],
  },
];

export default function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentVideo = videoData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videoData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? videoData.length - 1 : prev - 1
    );
  };

  return (
    <section className="mt-10">
      <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
        <iframe
          width="100%"
          height="100%"
          src={currentVideo.url}
          title={currentVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Navigation and Info */}
      <div className="flex items-start justify-between mt-6">
        <div>
          <span className="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded uppercase">
            {currentVideo.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 text-gray-900">
            {currentVideo.title}
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed max-w-2xl">
            {currentVideo.description}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Thumbnail Slider */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {currentVideo.thumbnails.map((thumb, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
          >
            <div className="relative">
              <img
                src={thumb.thumb}
                alt={thumb.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                >
                  <path d="M10 15V9l5 3-5 3z" />
                </svg>
              </div>
            </div>
            <p className="text-sm font-medium p-2">{thumb.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
