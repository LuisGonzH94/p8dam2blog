const PostDetails = ({ post }) => {
  if (!post) {
    return <p>No se encontró la publicación.</p>;
  }

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg border border-yellow-200">
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold text-yellow-800 mb-4">{post.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{post.pubDate}</p>
        <p className="text-lg text-gray-700 mb-6">{post.description}</p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Ingredientes</h2>
          <ul className="text-lg text-gray-700">
            {post.ingredients.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Preparación</h2>
          <ul className="text-lg text-gray-700">
            {post.preparation.map((process, index) => (
              <li key={index} className="mb-2">{index + 1} - {process}</li>
          ))}
          </ul>
        </div>

        <a
          href="/blog"
          className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Volver a la lista
        </a>
      </div>
    </div>
  );
};

export default PostDetails;


