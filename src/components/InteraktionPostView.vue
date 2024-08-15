<template>
  <div class="interaktion">
    <div class="votes-thread">
      <button class="votes" @click="upvotePost" :disabled="canUpvote === false">
        <p>⬆️</p>
        <p>{{ ups }}</p>
      </button>

      <button class="votes" @click="downvotePost" :disabled="canDownvote === false">
        <p>⬇️</p>
        <p>{{ downs }}</p>
      </button>
    </div>
    <button @click="showInput">Senf dazugeben</button>
  </div>
  <form class="comment-section" v-show="showComment" @submit.prevent="submitComment">
    <textarea
      v-model="userInput"
      maxlength="2000"
      type="text"
      name="text"
      id="comment-input"
      placeholder="Hier kannst du deinen Senf dazugeben..."
    /><label for="comment-input"></label>
    <div class="button-section">
      <button type="submit">Senf</button>
      <p>{{ maxCharLength() }}/{{ charLength }}</p>
    </div>
  </form>
</template>

<script>
import { useUserStore } from '@/stores/user';

export default {
  props: { post: { type: Object, required: true } },
  data() {
    return {
      store: useUserStore(),
      showComment: false,
      ups: 0,
      downs: 0,
      charLength: 2000,
      userInput: '',
    };
  },

  computed: {
    canUpvote() {
      return this.store.user.upvotes.includes(this.post.id) === false;
    },

    canDownvote() {
      return this.store.user.downvotes.includes(this.post.id) === false;
    },

    // ups() {
    //   return this.post.upvotes;
    // },
    // downs() {
    //   return this.post.downvotes;
    // },
  },

  methods: {
    showInput() {
      this.showComment = !this.showComment;
    },
    maxCharLength() {
      return this.charLength - this.userInput.length;
    },

    upvotePost() {
      if (this.canDownvote === false) {
        this.store.removeDownvote(this.post.id);
        this.downs--;
      }
      this.ups++;
      this.store.upvote(this.post.id);
    },

    downvotePost() {
      if (this.canUpvote === false) {
        this.store.removeUpvote(this.post.id);
        this.ups--;
      }
      this.downs++;
      this.store.downvote(this.post.id);
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

[disabled] {
  opacity: 0.5;
}
</style>
