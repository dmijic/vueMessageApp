new Vue({
  el: '#app',
  data: {
    elementId: '0',
    options: [
      { text: 'Header', value: 0 },
      { text: 'White div', value: 1 },
      { text: 'Blue div', value: 2 }
    ],
    elements: [
      '<div class="header"> This is header</div>',
      '<div class="white-div">This is white div</div>',
      '<div class="blue-div">This is blue div</div>',
    ],
    message: []
  },
  methods: {
    createElement: function(element) {
      this.message.push(element);
      console.log(element)
      console.log(this.message);
    }
  }
})