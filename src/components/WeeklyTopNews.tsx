export default function WeeklyTopNews() {
  const posts = [
    { title: "Welcome To The Best Model Winner Contest", image: "/images/3.jpg", tag: "Strike" },
    { title: "Welcome To The Best Model Winner Contest", image: "/images/2.jpg", tag: "Strike" },
    { title: "Welcome To The Best Model Winner Contest", image: "/images/1.jpg", tag: "Strike" },
  ];
return (
    <section className="mt-10">
      <h2 className="text-xl font-bold mb-4">Weekly Top News</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {posts.map((post, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden">
            <img src={post.image} className="w-full h-56 object-cover" alt="" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4 text-white">
              <span className="bg-orange-500 text-xs px-2 py-1 rounded">{post.tag}</span>
              <h3 className="mt-2 font-semibold">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
