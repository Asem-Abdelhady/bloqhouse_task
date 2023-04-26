<script lang="ts">
import MovieForm from '@/components/MovieForm.vue';
export default {
  data() {
    return {
      form: {
        title: String(this.$route.params.title),
        overview: String(this.$route.query.overview),
        vote_average: 0,
        poster_path: String(this.$route.query.poster_path),
        release_date: '',
        id: Number(this.$route.query.id)
      }
    };
  },
  components: {
    MovieForm
  }
};
</script>
<template>
  <div class="centered">
    <MovieForm
      :title="form.title"
      :vote_average="form.vote_average"
      :poster_path="form.poster_path"
      :release_date="form.release_date"
      :overview="form.overview"
      :type="'update'"
      :id="form.id"
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
