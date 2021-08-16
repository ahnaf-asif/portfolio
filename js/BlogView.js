async function ViewBlog() {

  // Grabing Post ID param from url
  const postID = new URL(window.location.href);

  // Present Loading Text
  document
    .querySelector(".blog-page")
    .insertAdjacentHTML(
      "afterbegin",
    

      ` 
        <div style="
            height: 80vh;
            color:white;
            display: flex;
            justify-content: center;
            align-items: center;
          " id="loading-blog-ind">
          <i style="font-size : 150px;" class="fas fa-spinner fa-pulse"></i>
        </div>

      `

    );

  // Fetcing Data from specified url with id
  await fetch(
    `https://ahnafasif.bosonscienceclub.com/api/individual-blog/${postID.searchParams.get("id")}`)
    .then((response) => response.json())
    .then((blog) => {

      // Checking if url status 200 or not
      if (blog.status == 200) {

        // Rendering Blog Data
        document.querySelector(".blog-page").insertAdjacentHTML(
          "afterbegin",
          `
          <div class="blog-image">
                        <img src="${blog.individual_blog.cover_pic}" alt="Blog Thumbnail" width="100%" height="100%">
                    </div>
                    <div class="blog-container">
           <div class="row">
    
        <!--Blog Heading Start-->
        <div class="blog-heading col-md-8 offset-md-2">
            <span class="cat">${blog.individual_blog.category}</span>
            <h1>${blog.individual_blog.title}</h1>
            <div class="blog-date">${blog.individual_blog.created_at.slice(0, blog.individual_blog.created_at.indexOf("T"))}</div>
            
        </div>
        <!--Blog Heading Start-->
    
        <!--Blog Content Start-->
        <div class="blog-content col-md-10 offset-md-1">
           ${blog.individual_blog.blog}
        </div>
        <!--Blog Content End-->
    
        <!--Blog Comments Start-->
    
    </div></div>`
        );
      } else {
        document.querySelector(".blog-container").insertAdjacentHTML(
          "afterbegin",
          ` <div class="row">
          <h1>Blog Not Found :( Sorry</h1>
            </div>
        `)
      }
    });
  // Removing Loading Text
  document.getElementById("loading-blog-ind").remove();
}

ViewBlog()