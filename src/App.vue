<template>
  <h1 class="text">Write your text in the text box</h1>
  <br />

  <input v-model="text" placeholder="write here" class="filter text"/>
  <button @click="countTheWords()" role="button">count!</button>

  <div>
    <br />
    <p v-if="quantity">Number of words: {{ quantity }} </p>
    <p v-else>some text input is required</p>
  </div>

</template>

<script>
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
      fetch(`http://127.0.0.1:5000/count/${this.text}`)
        .then(response => response.json())
        .then(data => this.quantity = data)
    }
  },
  click() {
    this.countTheWords()
  }
}

</script>