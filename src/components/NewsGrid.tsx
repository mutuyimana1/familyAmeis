export default function NewsGrid() {
  const categories = [
    { label: "Lifestyle", color: "bg-pink-500" },
    { label: "Sports", color: "bg-green-500" },
    { label: "Travels", color: "bg-blue-500" },
  ];

  const posts = [
    { title: "Get the Illusion of Fuller Lashes by Mascng.", category: categories[0] },
    { title: "Get the Illusion of Fuller Lashes by Mascng.", category: categories[1] },
    { title: "Welcome To The Best Model Winner Contest", category: categories[2] },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4 mt-8">
      {posts.map((p, i) => (
        <div key={i} className="border rounded-xl overflow-hidden">
          <img src={`/images/${i+1}.jpg`} className="w-full h-44 object-cover" alt="" />
          <div className="p-4">
            <span className={`text-xs text-white px-2 py-1 rounded ${p.category.color}`}>{p.category.label}</span>
            <h3 className="font-semibold mt-2 text-gray-800">{p.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
