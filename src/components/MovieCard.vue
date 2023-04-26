<script setup lang="ts">
import type IMovieSchema from '@/intefaces/MovieSchema';
import { IMG_300, UNAVAILABLE } from '@/Config/config';
import deleteMovie from '@/utilities/Requests/deleteMovie';
import { createToaster } from '@meforma/vue-toaster';
import router from '@/router';

const p = defineProps<{
  props: IMovieSchema;
}>();

const removeMovie = async (id: number) => {
  await deleteMovie(id);
  const toaster = createToaster({});
  toaster.success(`Movie removed from your collection`);
  router.go(0);
};

const getUpdateParams = (id: number, overview: string, poster_path: string): string => {
  const params = { id: String(id), overview: overview, poster_path: poster_path };
  const searchParams = new URLSearchParams(params);

  return searchParams.toString();
};
</script>

<template>
  <div class="card m-2" style="width: 25rem">
    <div class="card-body">
      <img
        :src="`${
          props.poster_path?.startsWith('http')
            ? props.poster_path
            : `${IMG_300}${props.poster_path}`
        }`"
        height="300"
        class="card-img-top"
      />
      <h5 class="card-title m-2">
        {{ props.title.length > 25 ? props.title.substring(0, 22) + '...' : props.title }}
      </h5>
      <p class="card-text">
        {{ props.overview.length > 42 ? props.overview.substring(0, 40) + '...' : props.overview }}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">rating: {{ props.vote_average }}</li>
      <li class="list-group-item">release_date: {{ props.release_date }}</li>
    </ul>
    <div class="card-body ml-auto">
      <b-button
        variant="primary"
        class="m-3"
        @click="
          () =>
            $router.push(
              `/${props.title}/update?${getUpdateParams(
                props.id,
                props.overview,
                String(props.poster_path)
              )}`
            )
        "
        >Update</b-button
      >
      <b-button variant="secondary" @click="removeMovie(props.id)">Remove</b-button>
    </div>
  </div>
</template>
