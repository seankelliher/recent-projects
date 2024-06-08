<script setup>
import { openGitHub, openHeroku } from "../composables/go-to-links.js";
</script>

<template>
    <div class="project">
        <div class="project-title">
            <div class="title">
                <h2>NYC Shooting Incidents</h2>
            </div>
            <figure class="project-icon">
                <img src="/images/local_police_40dp_FILL0_wght400_GRAD0_opsz40.svg" alt="icon of police badge">
            </figure>
        </div>
        <div class="project-desc">
            <p>Dynamically generated dashboard and map of year-to-date shooting incidents in New York City. The interface utilizes Open Data NYC's API to gather a list of individual shootings compiled by the NYPD. From there, the interface generates a map with pins (and info pop-ups) for each shooting. It then sorts and compiles the data into statistics and populates a chart with them. Built with Vue.js, Express.js, and Mapbox. The Express server is used mainly to hide the API's access token in an environmental variable. The interface follows the design aesthetic of NYC government's digital products. Fetched data is stored locally to reduce calls to the server.</p>
        </div>
        <div class="project-btns">
            <button @click="openGitHub('nyc-shooting-incidents')">GitHub</button>
            <button @click="openHeroku('nyc-shooting-incidents')">Heroku</button>
        </div>
    </div>
</template>

<style scoped>
</style>