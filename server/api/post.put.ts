export default defineEventHandler(async (event) => {
  const { title } = await readBody(event);
  try {
    const res = await fetch('https://dummyjson.com/posts/1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        /* other post data */
      }),
    });
    if (!res.ok) {
      throw new Error(res?.status);
    }
    const data = await res.json();
    return data;
  } catch (e) {
    return e;
  }
});
