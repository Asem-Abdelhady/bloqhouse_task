<script lang="ts">
export default {
  data() {
    return {
      form: {
        title: '',
        overview: '',
        rate: 0,
        checked: [],
        date: ''
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    };
  },
  methods: {
    onSubmit(event: Event) {
      event.preventDefault();
    },
    onReset(event: Event) {
      event.preventDefault();
      // Reset our form values
      this.form.title = '';
      this.form.overview = '';
      this.form.rate = 0;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
<template>
  <div class="centered">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
        id="input-group-1"
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
        id="input-group-1"
        label="Movie rating: "
        label-for="input-3"
        description="From your opinion what is the rating of the movie"
      >
        <b-form-input
          id="input-3"
          v-model="form.rate"
          type="range"
          min="0"
          max="10"
          step="0.25"
          placeholder="Movie rate"
          required
        ></b-form-input>
      </b-form-group>
      <div class="mb-2 font-weight-bold">Rate: {{ form.rate }}</div>

      <b-form-group
        id="input-group-1"
        label="Release date: "
        label-for="input-4"
        description="Enter the date when the movie was released"
      >
        <b-form-input id="input-4" v-model="form.date" type="date" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="m-2">Submit</b-button>
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
