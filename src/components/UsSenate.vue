<script setup>
import { openGitHub, openNetlify } from "../composables/go-to-links.js";
</script>

<template>
    <div class="project">
        <div class="project-title">
            <div class="title">
                <h2>US Senate Directory</h2>
            </div>
            <figure class="project-icon">
                <img src="/images/how_to_vote_40dp_FILL0_wght400_GRAD0_opsz40.svg" alt="icon of ballot box">
            </figure>
        </div>
        <div class="project-desc">
            <p>Searchable directory to explore current US Senators. Users can filter by state, gender, party, re-election date, or any combination of these. There is also a search bar so users can search for a Senator by first, last, or full name. Since some Senators have less formal and more formal names, I built the search to try to accommodate these variables. For example, people can search for Bob or Robert Casey, Dick or Richard Durbin. This project is built with Vue.js, with data stored locally in objects.</p>
        </div>
        <div class="project-btns">
            <button @click="openGitHub('us-senate-directory')">GitHub</button>
            <button @click="openNetlify('us-senate-directory')">Netlify</button>
        </div>
    </div>
</template>

<style scoped>
</style>