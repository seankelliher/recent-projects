<script setup>
import { openGitHub, openHeroku } from "../composables/go-to-links.js";
</script>

<template>
    <div class="project">
        <div class="project-title">
            <div class="title">
                <h2>US National Parks Alerts</h2>
            </div>
            <figure class="project-icon">
                <img src="/images/park_40dp_FILL0_wght400_GRAD0_opsz40.svg" alt="icon of pine tree representing a park">
            </figure>
        </div>
        <div class="project-desc">
            <p>Searchable directory to easily find alerts (informational announcements, park closures, cautions, and warnings) for any of the 471 National Park Service areas. Alerts are drawn through an API managed by the National Park Service. This project is built with Vue.js and Express.js. The Express server is used mainly to hide the API's access token in an environmental variable. The interface follows the design aesthetic of the National Park Service's digital products.</p>
        </div>
        <div class="project-btns">
            <button @click="openGitHub('us-national-parks-alerts')">GitHub</button>
            <button @click="openHeroku('us-national-parks-alerts-fa601db96052')">Heroku</button>
        </div>
    </div>
</template>

<style scoped>
</style>