export default function HeroSection() {
  const mainArticle = {
    title: "Welcome To The Best Model Winner Contest At Look of the year",
    image: "/images/graduate.jpg",
    category: "Appetizers",
  };

  const sideArticles = [
    { title: "Welcome To The Best Model Winner Contest", category: "Concert", image: "/images/1.jpg" },
    { title: "Welcome To The Best Model Winner Contest", category: "Sea Beach", image: "/images/2.jpg" },
    { title: "Welcome To The Best Model Winner Contest", category: "Bike Show", image: "/images/3.jpg" },
  ];

  return (
    <section className="grid md:grid-cols-3 gap-6 mt-6">
      <div className="md:col-span-2 relative rounded-2xl overflow-hidden">
        <img src={mainArticle.image} className="w-full h-[400px] object-cover" alt="" />
        <div className="absolute bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
          <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded">{mainArticle.category}</span>
          <h2 className="text-2xl font-semibold mt-3">{mainArticle.title}</h2>
        </div>
      </div>

      <div className="space-y-4">
        {sideArticles.map((art, i) => (
          <div key={i} className="flex items-center gap-3">
            <img src={art.image} alt="" className="w-24 h-16 object-cover rounded" />
            <div>
              <span className="text-[10px] uppercase bg-pink-100 text-pink-600 px-2 py-0.5 rounded">{art.category}</span>
              <p className="text-sm font-semibold mt-1">{art.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
