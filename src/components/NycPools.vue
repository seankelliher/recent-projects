<script setup>
import { openGitHub, openNetlify } from "../composables/go-to-links.js";
</script>

<template>
    <div class="project">
        <div class="project-title">
            <div class="title">
                <h2>NYC Public Pools</h2>
            </div>
            <figure class="project-icon">
                <img src="/images/pool_40dp_FILL0_wght400_GRAD0_opsz40.svg" alt="icon of swimming pool">
            </figure>
        </div>
        <div class="project-desc">
            <p>Searchable directory to find a public swimming pool in New York City. Users can filter pools by borough or pool type, or a combination of the two. There is also a search bar to search for a pool by name. Returned pools appear as boxes with basic information (name, address, telephone). When clicked or tapped on, the boxes "pop up" and expand to reveal more information such a pool dimensions and depth. This project is built with Vue.js, with data stored locally in objects. The interface follows the design aesthetic of NYC government's digital products.</p>
        </div>
        <div class="project-btns">
            <button @click="openGitHub('nyc-public-pools')">GitHub</button>
            <button @click="openNetlify('nyc-public-pools')">Netlify</button>
        </div>
    </div>
</template>

<style scoped>
</style>