async function PortfolioView() {

  // Grabing Post ID param from url
  const postID = new URL(window.location.href);

  // Present Loading Text
  document
    .querySelector(".portfolio-page")
    .insertAdjacentHTML(
      "afterbegin",
      `<h1 id="loading-portfolio-ind" style="text-align: center; margin: auto; display: flex; align-items: center; justify-content: center;">Loading Portfolio .....</h1>`
    );

  // Fetcing Data from specified url with id
  await fetch(
    `https://ahnafasif.bosonbiggansangho.com/api/individual-portfolio/${postID.searchParams.get("id")}`)
    .then((response) => response.json())
    .then((blog) => {

      // Checking if url status 200 or not
      if (blog.status == 200) {

        // Rendering Blog Data
        document.querySelector(".portfolio-page").insertAdjacentHTML(
          "afterbegin",
          `
            <div class="blog-image portfolio-image">
            <img src="${blog.individual_portfolio.cover_pic}" alt="Portfolio Thumbnail" width="100%" height="100%"/>
          </div>
          <div class="blog-container portfolio-container">
      
          <!--Blog Heading Start-->
          <div class="blog-heading col-md-8 offset-md-2">
              <h1>${blog.individual_portfolio.title}</h1>
              
          </div>
          <!--Blog Heading Start-->

          <div class="portfolio-details">
          <p>Project Title: <span>${blog.individual_portfolio.title}</span></p>
          <p>Project Link: <a href="${blog.individual_portfolio.link}">${blog.individual_portfolio.link}</a></p>
          </div>
      
          <!--Blog Content Start-->
          <div class="blog-content col-md-10 offset-md-1">
          
             ${blog.individual_portfolio.long_description}
          </div>
          <!--Blog Content End-->
      
          <!--Blog Comments Start-->
      
      </div></div>`
        );
      } else {
        document.querySelector(".portfolio-page").insertAdjacentHTML(
          "afterbegin",
          ` <div class="row">
            <h1>Portfolio Not Found :( Sorry</h1>
              </div>
          `)
      }
    });

  // Removing Loading Text
  document.getElementById("loading-portfolio-ind").remove();
}

PortfolioView()