<script setup lang="ts">
import MoviesList from '@/components/MoviesList.vue';
import type IMovieSchema from '@/intefaces/MovieSchema';
import fetchMovies from '@/utilities/Requests/fetchMovies';
import { reactive } from 'vue';

//

const movies: IMovieSchema[] = reactive(await fetchMovies());
console.log('Movies: ', movies);
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
