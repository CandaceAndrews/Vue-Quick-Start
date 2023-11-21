<template>
    <div class="container mb-3">
        <form action="">
            <div class="mb-3">
                <label for="" class="form-label">
                    Page Title
                </label>
                <input
                    type="text"
                    class="form-control"
                />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">
                    Content
                </label>
                <textarea
                    type="text"
                    class="form-control"
                    rows="5"
                ></textarea>
            </div>
            <div class="mb-3">
                    <button
                        class="btn btn-primary"
                    >Create Page</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    props: ['pageCreated']
}
</script>