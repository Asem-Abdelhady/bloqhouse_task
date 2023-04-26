<script setup lang="ts">
import type IMovieSchema from '@/intefaces/MovieSchema';
import router from '@/router';
import creatMovie from '@/utilities/Requests/createMovie';
import updateMovie from '@/utilities/Requests/updateMovie';
import { createToaster } from '@meforma/vue-toaster';
import { reactive } from 'vue';

interface IProps {
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  id: number;
  type: string;
}
const props = defineProps<IProps>();
const form = reactive({ ...props });

const resetForm = () => {
  form.title = '';
  form.overview = '';
  form.vote_average = 0;
  form.release_date = '';
  form.poster_path = '';
};

const movieAction = async () => {
  const body: IMovieSchema = {
    ...form,
    id: props.id === -1 ? Math.floor(Math.random() * 10001) : props.id,
    vote_count: 0
  };
  const toaster = createToaster({});
  if (props.type === 'create') {
    await creatMovie(body);
    toaster.success(`Movie added to your collection`);
    resetForm();
    return;
  }

  await updateMovie(body);

  toaster.success(`Movie updated in your collection`);
  router.replace('/');
  router.go(1);
};

const onSubmit = (e: Event) => {
  e.preventDefault();
  movieAction();
};
const onReset = (e: Event) => {
  e.preventDefault();
  resetForm();
};
</script>
<template>
  <div class="centered">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Movie title:"
        label-for="input-1"
        description="movie title for the movie you have watched"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          placeholder="Enter movie title"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Movie Overview: "
        label-for="input-2"
        description="Overview for the movie you watched"
      >
        <b-form-input
          id="input-2"
          v-model="form.overview"
          type="text"
          placeholder="Enter overview"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Movie image: "
        label-for="input-4"
        description="Image path for the movie"
      >
        <b-form-input
          id="input-4"
          v-model="form.poster_path"
          type="text"
          placeholder="Enter the movie poster or image"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Movie rating: "
        label-for="input-3"
        description="From your opinion what is the rating of the movie"
      >
        <b-form-input
          id="input-3"
          v-model="form.vote_average"
          type="range"
          min="0"
          max="10"
          step="0.25"
          placeholder="Movie rate"
          required
        ></b-form-input>
      </b-form-group>
      <div class="mb-2 font-weight-bold">Rate: {{ form.vote_average }}</div>

      <b-form-group
        id="input-group-1"
        label="Release date: "
        label-for="input-4"
        description="Enter the date when the movie was released"
      >
        <b-form-input id="input-4" v-model="form.release_date" type="date" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="m-2">{{
        props.type === 'update' ? 'Update' : 'Create'
      }}</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<style>
.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
