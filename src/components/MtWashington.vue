<script setup>
import { openGitHub, openNetlify } from "../composables/go-to-links.js";
</script>

<template>
    <div class="project">
        <div class="project-title">
            <div class="title">
            <h2>Mt. Washington Temp</h2>
            </div>
            <figure class="project-icon">
                <img src="/images/mountain_flag_40dp_FILL0_wght400_GRAD0_opsz40.svg" alt="icon of a mountain with flag on the summit">
            </figure>
        </div>
        <div class="project-desc">
            <p>Dynamically generated chart of average monthly temperatures at the Mt. Washington Observatory. The Observatory is located on the summit of Mt. Washington in North Conway, New Hampshire. It is the highest point in the northeastern United States and monitors weather year-round. For visual appeal, I built the interface to open on a full-screen image of the summit. Users scroll down to view the chart. This project is built with Vue.js and Chart.js, with data stored locally in objects. The chart displays the years 2005 - 2023. More years can be added easily if data becomes available. </p>
        </div>
        <div class="project-btns">
            <button @click="openGitHub('mt-washington-temperature')">GitHub</button>
            <button @click="openNetlify('mt-washington-temp')">Netlify</button>
        </div>
    </div>
</template>

<style scoped>
</style>