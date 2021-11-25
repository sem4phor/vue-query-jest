<script setup>
import { onUnmounted, onBeforeUnmount, onMounted } from 'vue';
import { useQuery } from "vue-query";

const fetcher = () =>
  fetch("https://jsonplaceholder.typicode.com/todos").then((response) => response.json());

const { isLoading, isError, isFetching, data, error, refetch } = useQuery(
  "todos",
  fetcher
);

onMounted(() => {
  console.log('onMounted');
});

onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});

onUnmounted(() => {
  console.log('onUnmounted');
});
</script>

<template>
  <div>
    Hello<br />
    isLoading: {{ isLoading }}<br />
    isError: {{ isError }}<br />
    isFetching: {{ isFetching }}<br />
    <pre>
      {{ data }}
    </pre>
    <button @click="refetch">refetch</button>
  </div>
</template>
