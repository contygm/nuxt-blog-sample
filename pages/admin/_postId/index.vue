<template>
<div class="admin-post-page">
    <section class="update-form">
        <AdminPostForm :post="loadedPost" />
    </section>
</div>
</template>

<script>
import AdminPostForm from '@/components/admin/AdminPostForm'
export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                author: 'Veev',
                title: 'My Awesome Post',
                content: 'Blah blah blah blah blah blah blah blah blah',
                thumbnailLink: 'https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ'
            }
        }
    },
}
</script>

<style scoped>
.update-form {
    width: 90%;
    margin: 20px auto;
}

@media (min-width: 768px) {
    .update-form {
        width: 500px;
    }
}
</style>
