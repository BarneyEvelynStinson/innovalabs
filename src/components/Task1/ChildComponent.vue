<template>
  <div>
    <h3>This is Child Component</h3>
    <p>Message recieved from parent - {{ fromParent }}</p>
    <button @click="passData">Pass data from child</button>
    <button @click="passDataToAnotherChild">Pass data between children</button>
  </div>
</template>

<script>
import { EventBus } from "../../main";

export default {
  props: {
    fromParent: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      msg: "Child Data",
      msgToAnotherChild:
        "This is the message that's being passed from one child to another",
    };
  },
  methods: {
    passData() {
      this.$emit("dataFromChild", this.msg);
    },
    passDataToAnotherChild() {
      EventBus.$emit("dataFromOneChildToAnother", this.msgToAnotherChild);
    },
  },
};
</script>
