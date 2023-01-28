<template>
  <div>
    <h2>{{ post.title }}</h2>
    <br />
    <input type="text" v-model="post.title" />
    <button @click="updatePost">Update</button>
  </div>
</template>
<script lang="ts" setup>
const post = ref({
  title: 'Update this post',
  id: 1,
});
const updatePost = async () => {
  const { data }: any = await useFetch('/api/post', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: {
      title: post.value.title,
    },
  });
  console.log(data.value);
};
</script>
