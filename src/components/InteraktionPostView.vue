<template>
  <div class="interaktion">
    <div class="votes-thread">
      <p>🠕<span>23</span></p>
      <p>🠗<span>23</span></p>
    </div>
    <button @click="showInput">Senf dazugeben</button>
  </div>
  <div class="comment-section" v-show="showComment">
    <p>Hier kannst du deinen Senf dazugeben...</p>
    <input type="text" name="text" id="comment-input" /><label for="comment-input"></label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showComment: false,
    };
  },
  methods: {
    showInput() {
      this.showComment = !this.showComment;
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

.interaktion {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 1rem;
}

.interaktion Button {
  width: 6rem;
  height: 2rem;
  font-size: 0.68rem;
  color: var(--font-color);
  border: none;
  border-radius: 10px;
  background-color: var(--header-color);
}
</style>
