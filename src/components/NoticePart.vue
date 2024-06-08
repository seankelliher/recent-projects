<script setup>
import { ref } from "vue";

const showNotice = ref(true);

function hideNotice() {
    showNotice.value = false;
}
</script>

<template>
    <div v-if="showNotice" class="notice">
        <p class="notice-txt">Projects hosted at Heroku use "eco dynos." They sleep to save energy and take a few seconds to wake up.</p>

        <figure
            tabindex="0"
            @click="hideNotice()"
            @keyup.enter="hideNotice()"
            class="notice-icon"
        >
            <img src="/images/close_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="icon to close interface">
        </figure>
    </div>
</template>

<style scoped>
</style>