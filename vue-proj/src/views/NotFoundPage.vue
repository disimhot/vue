<template>
    <div class="container">
    <div class="d-flex justify-content-center">
        <div class="col-md-10">
            <div class="error-template">
                <h1 class="mt-5">
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div class="error-actions m-5">
                    <router-link to="/" exact>
                      <a class="btn btn-outline-primary btn-lg">Take Me Home</a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default {
  name: 'NotFound'
}
</script>