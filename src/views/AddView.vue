<script lang="ts">
import MovieForm from '@/components/MovieForm.vue';

export default {
  components: {
    MovieForm
  }
};
</script>
<template>
  <div class="centered">
    <MovieForm
      :title="''"
      :vote_average="0"
      :poster_path="''"
      :release_date="''"
      :overview="''"
      :type="'create'"
      :id="-1"
    />
  </div>
</template>

<style>
.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
