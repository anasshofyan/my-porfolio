<template>
  <footer class="bg-ansomarfa-light py-6">
    <div class="flex items-center justify-center">
        <p class="text-base text-ansomarfa-dark">© 2019 - {{ copyRights.currentDate.getFullYear() }} Anas Shofyan Martunis Fateh • All rights reserved • ❤️ from Jakarta, ID</p>
    </div>
  </footer>
</template>

<script>
export default {

  data(){
    return{
      copyRights:{
        currentDate: new Date,
      }
    }
  }
}

</script>
