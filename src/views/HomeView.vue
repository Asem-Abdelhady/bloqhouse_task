<script lang="ts">
import type IMovieSchema from '@/intefaces/MovieSchema';
import fetchMovies from '@/utilities/Requests/fetchMovies';
import MoviesList from '@/components/MoviesList.vue';
import { defineComponent, ref, type Ref } from 'vue';

export default defineComponent({
  setup() {
    const movies: Ref<IMovieSchema[]> = ref([]);
    fetchMovies().then((ms) => {
      movies.value = ms;
    });

    return {
      movies
    };
  },
  components: {
    MoviesList
  }
});
</script>

<template>
  <MoviesList :movies="movies" />
</template>

<style>
.movie-form {
  position: fixed;
  top: 20%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
