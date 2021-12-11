// const App = {
//   data() {
//     return {
//       counter: 0,
//       title: 'Счетчик'
//     }
//   }
// }

const App = {
  data() {
    return {
      placeholder1: 'Введите название заметки',
      title: 'Список заметок',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2']
    }
  },
  methods: {
    // inputChangeHandler(event) {
    //   console.log('inputChangeHandler', event.target.value)
    //   this.inputValue = event.target.value
    // },
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
      else {
        alert('Введите название заметки!')
      }
    },
    removeNote(index, event) {
      console.log('removeNote', index, event)
      this.notes.splice(index, 1)
    },
    toUpperCase(item) {
      return item.toUpperCase()
    }
  },

  computed: {
    doubleCountComputed() {
      console.log('doubleCountComputed')
      return this.notes.length * 2
    }
  },

  watch: {
    inputValue(value) {
      if (value.length > 100){
        this.inputValue.value = ''
        alert('Значение не может быть больше 100 символов')
      }
      console.log('input value changed', value)
    }
  }
  
}

Vue.createApp(App).mount('#app')