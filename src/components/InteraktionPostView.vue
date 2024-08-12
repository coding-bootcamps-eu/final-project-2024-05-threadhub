<template>
  <div class="interaktion">
    <div class="votes-thread">
      <div class="votes" @click="counter++">
        <p>🠕</p>
        <p>{{ counter }}</p>
      </div>

      <div class="votes" @click="down++">
        <p>🠗</p>
        <p>{{ down }}</p>
      </div>
    </div>
    <button @click="showInput">Senf dazugeben</button>
  </div>
  <form class="comment-section" v-show="showComment">
    <textarea
      v-model="userInput"
      maxlength="2000"
      type="text"
      name="text"
      id="comment-input"
      placeholder="Hier kannst du deinen Senf dazugeben..."
    /><label for="comment-input"></label>
    <div class="button-section">
      <button type="submit">abschicken</button>
      <p>{{ maxCharLength() }}/{{ charLength }}</p>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      showComment: false,
      counter: 0,
      down: 0,
      charLength: 2000,
      userInput: '',
    };
  },
  methods: {
    showInput() {
      this.showComment = !this.showComment;
    },
    maxCharLength() {
      return this.charLength - this.userInput.length;
    },
  },
};
</script>
<style scoped>
.votes-thread {
  display: flex;
  flex-direction: row;
  color: white;
  gap: 1rem;
  font-size: 1rem;
}

.votes {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.votes:active {
  color: black;
}

.interaktion {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 1rem;
}

.interaktion Button {
  width: 6rem;
  height: 1.75rem;
  font-size: 0.68rem;
  color: var(--font-color);
  border: none;
  border-radius: 10px;
  background-color: var(--header-color);
}

.interaktion button:hover {
  cursor: pointer;
  background-color: var(--background-inputfield);
  color: black;
}

.comment-section {
  display: flex;
  flex-direction: column;
  margin: 0 1rem 0 1rem;
  padding: 1rem 1rem 0 1rem;
  background-color: var(--font-color);
  border-radius: 8px;
}

.comment-section textarea {
  text-align: left;

  line-height: 1rem;

  height: 6rem;
  overflow-y: auto;

  border: None;
  border-radius: 8px;
  box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.74);
  padding: 0.5rem;
}

.comment-section p {
  text-align: right;
}

.button-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-section button {
  height: 1.75rem;

  background-color: var(--header-color);
  color: var(--font-color);

  border-radius: 8px;
  border: none;
}

.button-section button:active {
  background-color: var(--background-color);
}
</style>
