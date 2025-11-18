
new Vue({
  el: '#app',
  data: {
    title: 'Vue.js',
    message: 'Hello Vue.js',
    count: 0,
    name: 'Vue.js',
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ],
},
  methods: {
    incrementCount() {
      this.count++;
    },
    greet() {
      alert(`Hello, ${this.name}!`);
    },
  },
});