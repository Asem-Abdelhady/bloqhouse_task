<script setup lang="ts">
import type IMovieSchema from '@/intefaces/MovieSchema';
import { IMG_300, UNAVAILABLE } from '@/Config/config';
defineProps<{
  props: IMovieSchema;
}>();
</script>

<template>
  <div class="card m-2" style="width: 18rem">
    <div class="card-body">
      <img :src="`${IMG_300}/${String(props.poster_path)}`" class="card-img-top" />
      <h5 class="card-title m-2">
        {{ props.title.length > 25 ? props.title.substring(0, 22) + '...' : props.title }}
      </h5>
      <p class="card-text">
        {{ props.overview.substring(0, 60) + '...' }}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">rating: {{ props.vote_average }}</li>
      <li class="list-group-item">release_date: {{ props.release_date }}</li>
    </ul>
    <div class="card-body ml-auto">
      <b-button v-b-modal.modal-1 class="btn btn-primary m-2">Update</b-button>

      <button class="btn btn-secondary">Remove</button>
    </div>
  </div>
  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</template>
