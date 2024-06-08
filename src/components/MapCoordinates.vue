<script setup>
import { openGitHub, openNetlify } from "../composables/go-to-links.js";
</script>

<template>
    <div class="project">
        <div class="project-title">
            <div class="title">
                <h2>Map Coordinates</h2>
            </div>
            <figure class="project-icon">
                <img src="/images/explore_40dp_FILL0_wght400_GRAD0_opsz40.svg" alt="icon of a compass">
            </figure>
        </div>
        <div class="project-desc">
            <p>Guided "step by step" interface to convert longitude and latitude coordinates from traditional Degrees Minutes, Seconds (DMS) format to Digital Degrees (DD) format used in computer-based mapping. After conversion, the interface dynamically generates a map of the converted location. This project is built with Vue.js and Mapbox.</p>
        </div>
        <div class="project-btns">
            <button @click="openGitHub('map-coordinates-dms')">GitHub</button>
            <button @click="openNetlify('map-coordinates-dms')">Netlify</button>
        </div>
    </div>
</template>

<style scoped>
</style>
