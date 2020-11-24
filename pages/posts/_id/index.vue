<template>
<div class="single-post-page">
    <section class="post">
        <h1 class="post-title">{{ loadedPost.title }}</h1>
        <div class="post-details">
            <div class="post-detail">Last updated on {{ loadedPost.updatedDate }}</div>
            <div class="post-detail">Written by {{ loadedPost.author }}</div>
        </div>
        <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
        <p>Let me know what you think! Send an email to <a href="mailto:me@awesome.com">me@awesome.com</a>.</p>
    </section>
</div>
</template>

<script>
export default {
    asyncData(context, callback) {
        setTimeout(() => {
            callback(null, {
                loadedPost: {
                    id: '1',
                    author: 'Veev',
                    title: 'My First Awesome Post',
                    updatedDate: new Date(),
                    previewText: 'Blah blah blah blah',
                    content: 'This is the content. Here it is. Existing before you. Existing before your eyes, on a screen, in pixels. Amazing.',
                    thumbnailLink: 'https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ'
                }
            })
        }, 1000);
    },
    created() {
        this.$store.dispatch('setPosts', this.loadedPosts)
    }
}
</script>

<style scoped>
.single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
}

.post {
    width: 100%;
}

@media (min-width: 768px) {
    .post {
        width: 600px;
        margin: auto;
    }
}

.post-title {
    margin: 0;
}

.post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

@media (min-width: 768px) {
    .post-details {
        flex-direction: row;
    }
}

.post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
}

.post-feedback a {
    color: red;
    text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
    color: salmon;
}
</style>
