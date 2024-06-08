<script setup>
import { openGitHub, openHeroku } from "../composables/go-to-links.js";
</script>

<template>
    <div class="project">
        <div class="project-title">
            <div class="title">
                <h2>California Precip &amp; Temps</h2>
            </div>
            <figure class="project-icon">
                <img src="/images/sunny_40dp_FILL0_wght400_GRAD0_opsz40.svg" alt="icon of the sun">
            </figure>
        </div>
        <div class="project-desc">
            <p>Dynamically generated charts that display historical weather data from six locations across California. The interface utilizes NOAA's API to 50 years of weather data. It then sorts and compiles the data into statistics and populates a chart with them. The first chart displays the number of days each year with temperature over 90 degrees F. The second chart displays annual precipitation in inches. Built with Vue.js and Express.js. The Express server is used mainly to hide the API's access token in an environmental variable. Fetched data is stored locally to reduce calls to the server.</p>
        </div>
        <div class="project-btns">
            <button @click="openGitHub('california-temps-precip')">GitHub</button>
            <button @click="openHeroku('california-temps-precip-51abd5847179')">Heroku</button>
        </div>
    </div>
</template>

<style scoped>
</style>