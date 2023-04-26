<script setup lang="ts">
import type IMovieSchema from '@/intefaces/MovieSchema';
import MovieCard from './MovieCard.vue';

defineProps<{
  movies: IMovieSchema[];
}>();
</script>

<template>
  <div class="container text-center">
    <div class="row">
      <div v-for="movie in movies" :key="movie.id" class="col">
        <MovieCard
          class="m-2"
          :props="{
            title: `${movie.title}`,
            overview: `${movie.overview}`,
            poster_path: `${movie.poster_path}`,
            vote_average: movie.vote_average,
            id: movie.id,
            vote_count: movie.vote_count,
            release_date: `${movie.release_date}`
          }"
        />
      </div>
    </div>
  </div>
</template>
