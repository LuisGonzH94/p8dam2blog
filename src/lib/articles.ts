import { ref, get } from 'firebase/database';
import { database } from '../lib/firebase'; // Asegúrate de que esta ruta sea correcta

export async function getPosts() {
  const postsRef = ref(database, 'posts');
  const snapshot = await get(postsRef);
  if (!snapshot.exists()) {
    return [];
  }
  const posts: [any] = snapshot.val();
  // Convierte el objeto de posts en un array y añade el ID
  return Object.entries(posts).map(([id, post]) => ({
    id, // Añade el ID como parte del objeto
    ...post,
  }));
}
