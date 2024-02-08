<script setup lang="ts">
import { reactive } from "vue";
import Section from "./layout/Section.vue";
import { Form, Input, Button, FormItem, ElCheckbox } from "@/core";

type AddNewTaskForm = {
  task: string;
  checkbox: boolean;
  description?: string;
};

const addNewTaskForm = reactive<AddNewTaskForm>({
  task: "",
  checkbox: false,
  description: "",
});
</script>

<template>
  <Section class="addNewTask" title="Add new task">
    <Form class="addNewTask__form" label-position="top">
      <div class="addNewTask__box">
      <FormItem class="addNewTask__input">
        <Input v-model="addNewTaskForm.task" placeholder="Add new task" />
      </FormItem>
      <FormItem class="addNewTask__removeMargin">
        <ElCheckbox
          v-model="addNewTaskForm.checkbox"
          label="Add Additional Information"
          size="large"
        />
      </FormItem>
      <FormItem class="addNewTask__removeMargin" v-if="addNewTaskForm.checkbox" label="Description">
        <Input v-model="addNewTaskForm.description" type="textarea" />
      </FormItem>
      </div>
      <Button class="addNewTask__button">Add New Task</Button>
    </Form>
  </Section>
</template>

<style lang="scss" scoped>
.addNewTask {
  &__form {
   display: flex;
   flex-direction: row;
   align-items: flex-end;
  }

  &__box {
   flex-grow: 0.8;
  }

  &__button {
    background-color: #046b99;
    color: white;
    flex-grow: 0.2;
    margin-left: $gutterLarge;
  }

  &__removeMargin {
   margin-bottom: 0;
  }
}
</style>
