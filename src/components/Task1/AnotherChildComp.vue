<template>
  <div>
    <h3>This is another child component</h3>
    <p>Data recieved from child 1 - {{ dataReceivedFromChild }}</p>
  </div>
</template>

<script>
import { EventBus } from "../../main";

export default {
  data() {
    return {
      dataReceivedFromChild: "",
    };
  },
  created() {
    EventBus.$on("dataFromOneChildToAnother", (val) => {
      this.dataReceivedFromChild = val;
    });
  },
};
</script>
