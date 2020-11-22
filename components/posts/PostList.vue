<template>
<section class="post-list">
    <PostPreview id="1" :is-admin="isAdmin" thumbnail="https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ" title="Title 1" previewText="First Post" />
    <PostPreview id="2" :is-admin="isAdmin" thumbnail="https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ" title="Title 2" previewText="Second Post" />
    <PostPreview id="3" :is-admin="isAdmin" thumbnail="https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ" title="Title 3" previewText="Third Post" />
</section>
</template>

<script>
import PostPreview from "@/components/posts/PostPreview"
export default {
    components: {
        PostPreview
    },
    props: {
        isAdmin: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
