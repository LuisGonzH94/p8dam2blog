import React, { useState, useEffect } from "react";
import { ref, onValue, update } from "firebase/database";
import { database } from "../lib/firebase";

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const postsRef = ref(database, "posts");
        onValue(postsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const formattedPosts = Object.entries(data).map(([key, value]) => ({
                    id: key,
                    ...value,
                }));
                setPosts(formattedPosts);
            }
            setLoading(false);
        });
    }, []);

    const handleLike = (postId, currentLikes) => {
        const newLikes = (currentLikes || 0) + 1;
        const postRef = ref(database, `posts/${postId}`);

        update(postRef, { likes: newLikes })
            .then(() => {
                setPosts((prevPosts) =>
                    prevPosts.map((post) =>
                        post.id === postId ? { ...post, likes: newLikes } : post
                    )
                );
            })
            .catch((error) => console.error("Error al actualizar los Likes:", error));
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    const filteredPosts = posts.filter((post) =>
        (post.title || "").toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="px-6 py-8 bg-gradient-to-b from-yellow-50 to-yellow-200">
            <h1 className="text-4xl font-bold text-center text-yellow-800 mb-8">
                Lista de Posts
            </h1>

            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    placeholder="Buscar tu comida favorita..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full max-w-md p-4 border border-yellow-400 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-yellow-800"
                />
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 cursor-default">
                {filteredPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white p-4 shadow-lg rounded-lg border border-yellow-300"
                        aria-label={`Leer más sobre ${post.title}`}
                    >
                        {post.image_url && (
                            <img
                                src={post.image_url}
                                alt={post.title || "Post sin título"}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                        )}
                        <h2 className="text-2xl font-semibold text-yellow-900 mb-2">
                            {post.title || "Sin título"}
                        </h2>
                        <p className="text-gray-600 mb-4">{post.abstract || "No hay detalles disponibles."}</p>
                        <p className="text-sm text-gray-500 mb-4">{post.pubDate || "Fecha no disponible"}</p>

                        <div className="flex items-center justify-between mt-auto">
                            <button
                                onClick={() => handleLike(post.id, post.likes)}
                                className="px-4 py-2 bg-yellow-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            >
                                ❤ {post.likes || 0}
                            </button>
                            <a
                                key={post.id}
                                href={`blog/${post.slug}`}
                                className="cursor-pointer block font-semibold text-yellow-900"
                            >Leer más...</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;

{/* <a
key={post.id}
href={`blog/${post.slug}`} // El slug debe estar correctamente definido
className="bg-white p-4 shadow-md cursor-pointer block"
aria-label={`Leer más sobre ${post.title}`}
> */}