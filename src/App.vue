<template>
  <div class="main">
    <h1 class="text">Write your text in the text box</h1>
    <br />

    <div>
      <input v-model="text" placeholder="write here" class="filter text"/>
      <button @click="countTheWords()" role="button">count!</button>

      <br />
      <p v-if="quantity">Number of words: {{ quantity }} </p>
      <p v-else>some text input is required</p>
    </div>
  </div>

</template>

<script>

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export default {
  data() {
    return {
      loading: false,
      text: '',
      quantity: '',
    }
  },
  methods: {
  
    countTheWords() {
      fetch(`${BACKEND_URL}/count`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: this.text })
      })
        .then(response => response.json())
        .then(data => this.quantity = data.count)
    }
  },
  click() {
    this.countTheWords()
  }
}

</script>