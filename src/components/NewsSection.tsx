"use client";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: string | number;
  title: string;
  description: string;
  category: string;
  image: string;
  href: string;
}

interface newsSectionProps {
  title?: string;
  news: Article[];
  viewAllHref?: string;
}

const NewsSection: React.FC<newsSectionProps> = ({
  title = "Latest News",
  news,
  viewAllHref = "/news",
}) => {
  if (!news || news.length === 0) return null;

  // Featured article (first one)
  const [featured, ...rest] = news;

  return (
    <section className="bg-[#fdfafa] py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-medium px-3 py-1 bg-[#f5ecec] text-[#8a4d4d] rounded-full">
            news
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold font-poppins mt-3">
            {title}
          </h2>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Featured Article */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
            <Image
              src={featured.image}
              alt={featured.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {featured.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{featured.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{featured.category}</span>
                <Link
                  href={featured.href}
                  className="text-[#7b2030] font-medium text-sm flex items-center gap-1 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>

          {/* Right side smaller news */}
          <div className="flex flex-col gap-4">
            {rest.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={140}
                  height={140}
                  className="w-32 h-32 object-cover"
                />
                <div className="flex flex-col justify-between py-3 pr-4">
                  <div>
                    <h4 className="text-sm font-semibold line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{item.category}</span>
                    <Link
                      href={item.href}
                      className="text-[#7b2030] text-xs font-medium hover:underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View all button */}
        <div className="flex justify-center mt-10">
          <Link
            href={viewAllHref}
            className="px-6 py-2 bg-[#7b2030] text-white rounded-full text-sm hover:bg-[#601b25] transition"
          >
            View all →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
