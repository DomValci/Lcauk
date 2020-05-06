<template>
  <div id="home">
    <div id="container">
      <div id="row-1">
        <div id="title">
          <h1>Welcome To LCAUK</h1>
          <h6 style="padding: 40px 0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, aut maiores eum molestiae perspiciatis at! Pariatur illum deleniti eum. Quaerat deleniti error libero sapiente quisquam dicta tempore voluptatibus voluptatum neque.</h6>  
        </div>
        </div>
      <div id="row-2">

        
        <div id="part1" class="landing-section">
          <span style="font-size: 3em; color: Tomato;">
            <i class="fas fa-campground"></i>
          </span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate commodi rem enim adipisci porro corporis delectus laboriosam corrupti eaque hic eius excepturi, vitae quis doloremque pariatur eveniet nobis nemo blanditiis!</p>
        </div>

        <div id="part2" class="landing-section">
          <span style="font-size: 3em; color: Tomato;">
            <i class="fas fa-trophy"></i>
          </span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ducimus sint! Asperiores alias voluptatum ipsum nisi, voluptates at nemo, quis sed soluta repellendus, architecto corrupti voluptatibus temporibus cupiditate officia laborum.</p>
        </div>
        <div id="part3" class="landing-section">
          <span style="font-size: 3em; color: Tomato;">
            <i class="fas fa-users"></i>
          </span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ipsum placeat laudantium sapiente illum dolorum aut, quo quam natus laborum laboriosam explicabo nostrum numquam voluptate cupiditate voluptates deleniti cumque dolorem?</p>
        </div>
      
      
      </div>
      <div id="row-3">
        <h1>Additional Content</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugiat nobis dolores at dignissimos perferendis repellendus, impedit nihil perspiciatis quidem animi reiciendis vitae a suscipit natus magnam, tempore reprehenderit hic.</p>
      </div>
      <div id="row-4">
        <p>Footers site map contact</p>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  el: 'home',

 
  
}
</script>

<style lang="scss">

  #home > #container {
    margin: 0 auto;
    
    min-height: 100vh;

  }
  
  #row-1 {
    background-image: url("../assets/2637.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -200px;
    height: 600px;
    #title {
      font-style: italic;
      margin: 5% 0;
      text-align: left;
      width: 50%;
      float: right;
      padding: 1% 1%;
      background: rgba($color: hsl(0, 62%, 39%), $alpha: 0.3);


    }    
  }
  
  #row-2 {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    margin: auto 0;
    padding: 30px 30px;
  }

  #row-3 {
    background-color: royalblue;
    padding: 5% 5%;
  }
  #row-4 {
    background-color: black;
    height: 10vh;
  }

  .landing-section {
    background-color:rgb(161, 38, 38);

    margin: 0 2%; 
    padding: 5% 5%;
  }
</style>
