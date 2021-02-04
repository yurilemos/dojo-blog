<template>
    <div class="tag">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
            <PostList :posts="postsWithTag" />
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import { useRoute } from 'vue-router'

export default {
    components: { Spinner, PostList },
    setup() {
        const route = useRoute()
        const { posts, error, load } = getPosts()

        load()

        const postsWithTag = computed(() => {
            return posts.value.filter((p) => p.tags.includes(route.params.tag))
        })
        return { postsWithTag, posts, error }
    }
}
</script>

<style>

</style>