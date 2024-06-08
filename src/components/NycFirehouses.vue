<script setup>
import { openGitHub, openNetlify } from "../composables/go-to-links.js";
</script>

<template>
    <div class="project">
        <div class="project-title">
            <div class="title">
                <h2>NYC Firehouses</h2>
            </div>
            <figure class="project-icon">
                <img src="/images/fire_truck_40dp_FILL0_wght400_GRAD0_opsz40.svg" alt="icon of fire truck">
            </figure>
        </div>
        <div class="project-desc">
            <p>Dynamically generated map with pins (and info pop-ups) of firehouses in New York City. This project is built with Vue.js and Mapbox, with data stored remotely at Mapbox. The interface follows the design aesthetic of FDNY digital products.</p>
        </div>
        <div class="project-btns">
            <button @click="openGitHub('nyc-firehouses')">GitHub</button>
            <button @click="openNetlify('nyc-firehouses')">Netlify</button>
        </div>
    </div>
</template>

<style scoped>
</style>