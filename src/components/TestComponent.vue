<script setup lang="ts">
import { PhraseTypes } from "../types";

interface Props {
  message: PhraseTypes;
}

interface Emits {
  (event: PhraseTypes): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <div></div>
</template>
