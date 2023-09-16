<template>
  <div class="home">
    <h2>This is parent component</h2>
    <p>
      We have imported child component in parent and passing message to child
    </p>
    <p>Data recieved from child on a button click - {{ dataRecieved }}</p>
    <hr />
    <child-component
      :fromParent="message"
      @dataFromChild="showChildData"
    ></child-component>
    <hr />
    <another-child-comp></another-child-comp>
  </div>
</template>

<script>
import ChildComponent from "@/components/Task1/ChildComponent.vue";
import AnotherChildComp from "@/components/Task1/AnotherChildComp.vue";

export default {
  name: "ParentComponent",
  data() {
    return {
      message:
        "This message is from parent depicting communication from parent to child",
      dataRecieved: "",
    };
  },
  components: {
    ChildComponent,
    AnotherChildComp,
  },
  methods: {
    showChildData(val) {
      this.dataRecieved = val;
    },
  },
};
</script>
