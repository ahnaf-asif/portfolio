/*======== Main Javascript Code ========*/


/*======== Mobile Toggle Click Setup ========*/
$(".header-toggle").on("click", function () {
  $(".header-content").toggleClass("on");
});

/*======== Mobile Toggle Click Setup ========*/
$(".nav-li").on("click", function () {
  $(".header-content").toggleClass("on");
});

/*======== Fetch Blog Data ========*/

function addBlog(BlogData) {

  // Removing Loading Text
  document.getElementById("loading-blog").remove();

  // Mapping through Data ( Array )

  BlogData.map((blog) => {

    // Adding Item on by one

    document.querySelector(".blogs-masonry").insertAdjacentHTML(
      "afterbegin",
      `<div class="col-lg-4 col-sm-6" key=${blog.id}>
            <a href="blog.html?id=${blog.id}" class="blog-item">
                <div class="blog-image">
                    <img src='${blog.thumbnail_image}' alt="#" width="100%" height="100%">
                </div>
                <div class="blog-content">
                    <span class="cat">${blog.category}</span>
                    <h4 class="blog-title">${blog.title}</h4>
                    <div class="blog-date">${formatDate(blog.created_at.slice(
                      0,
                      blog.created_at.indexOf("T")
                    ))}</div>
                </div>
            </a>
          </div>`
    );
  });
}

/*======== Blog Page Pagination ========*/

async function BlogPaginate(PageUrl) {

  // Making Empty Portfolio Page 
  var blogsMasonry = document.querySelector(".blogs-masonry");
  blogsMasonry.innerHTML = "";

  // Present Loading Text
  document
    .querySelector(".blogs-masonry")
    .insertAdjacentHTML(
      "afterbegin",
      
      ` 
        <div style="
            height: 80vh;
            color:white;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          " id="loading-blog">
          <i style="font-size : 150px;" class="fas fa-spinner fa-pulse"></i>
        </div>

      `
    );

  // Fetching Blog Page
  await fetch(PageUrl)
    .then((response) => response.json())
    .then((result) => {

      // Make Blog Pagination Empty to neglect duplication
      document.querySelector(".blog_pagination").innerHTML = "";

      // Checking is next page url is null or not
      // if (result.next_page_url == null) {
      //   // If null then add disabled classname
      //   document
      //     .querySelector(".blog_pagination")
      //     .insertAdjacentHTML(
      //       "afterbegin",
      //       `<li onclick="BlogPaginate('${result.next_page_url}')" class="page-item disabled"><a class="page-link" href="#">Next &raquo;</a></li>`
      //     );
      // } else {
      //   document
      //     .querySelector(".blog_pagination")
      //     .insertAdjacentHTML(
      //       "afterbegin",
      //       `<li onclick="BlogPaginate('${result.next_page_url}')" class="page-item active"><a class="page-link" href="#">Next &raquo;</a></li>`
      //     );
      // }

      // // Checking is prev page url is null or not
      // if (result.prev_page_url == null) {
      //   // If null then add disabled classname
      //   document
      //     .querySelector(".blog_pagination")
      //     .insertAdjacentHTML(
      //       "afterbegin",
      //       `<li onclick="BlogPaginate('${result.prev_page_url}')" class="page-item disabled mr-1"><a class="page-link" href="#">&laquo; Previous</a></li>`
      //     );
      // } else {
      //   document
      //     .querySelector(".blog_pagination")
      //     .insertAdjacentHTML(
      //       "afterbegin",
      //       `<li onclick="BlogPaginate('${result.prev_page_url}')" class="page-item active mr-1"><a class="page-link" href="#">&laquo; Previous</a></li>`
      //     );
      // }

      addBlog(result.data)

    });
}

/*======== Fetching Portfolio Data ========*/

function addPortfolio(PortfolioData) {

  // Removing Loading Text
  document.getElementById("loading-portfolio").remove();

  // Mapping through Data ( Array )
  PortfolioData.map((project) => {

    // Adding Item on by one
    document.querySelector(".portfolio-items").insertAdjacentHTML(
      "afterbegin",
      `<div class="item col-lg-4 col-sm-6">
          <a href="portfolio.html?id=${project.id}" class="blog-item">
            <figure style="background-image: url('${project.cover_pic}'); background-size: cover; background-position: center; background-repeat: no-repeat;">
                <figcaption>
                    <h4>${project.title}</h4>
                    <p>${project.short_description}</p>
                </figcaption>
            </figure>
            </a>
    </div>`
    );
  });
}

/*======== Portfolio Page Pagination ========*/

async function PortfolioPaginate(PageUrl) {

  // Making Empty Portfolio Page
  var portfolioItems = document.querySelector(".portfolio-items");
  portfolioItems.innerHTML = "";

  // Present Loading Text
  document
    .querySelector(".portfolio-items")
    .insertAdjacentHTML(
      "afterbegin",
      
      ` 
        <div style="
            height: 80vh;
            color:white;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          " id="loading-portfolio">
          <i style="font-size : 150px;" class="fas fa-spinner fa-pulse"></i>
        </div>

      `
    );

  // Fetching Portfolio Page
  await fetch(PageUrl)
    .then((response) => response.json())
    .then((result) => {

      // Make Portfolio Pagination Empty to neglect duplication
      document.querySelector(".portfolio_pagination").innerHTML = "";

      // Checking is next page url is null or not
      // if (result.next_page_url == null) {
      //   // If null then add disabled classname
      //   document
      //     .querySelector(".portfolio_pagination")
      //     .insertAdjacentHTML(
      //       "afterbegin",
      //       `<li onclick="PortfolioPaginate('${result.next_page_url}')" class="page-item disabled"><a class="page-link" href="#">Next &raquo;</a></li>`
      //     );
      // } else {
      //   document
      //     .querySelector(".portfolio_pagination")
      //     .insertAdjacentHTML(
      //       "afterbegin",
      //       `<li onclick="PortfolioPaginate('${result.next_page_url}')" class="page-item active"><a class="page-link" href="#">Next &raquo;</a></li>`
      //     );
      // }

      // // Checking is prev page url is null or not
      // if (result.prev_page_url == null) {
      //   // If null then add disabled classname
      //   document
      //     .querySelector(".portfolio_pagination")
      //     .insertAdjacentHTML(
      //       "afterbegin",
      //       `<li onclick="PortfolioPaginate('${result.prev_page_url}')" class="page-item disabled mr-1"><a class="page-link" href="#">&laquo; Previous</a></li>`
      //     );
      // } else {
      //   document
      //     .querySelector(".portfolio_pagination")
      //     .insertAdjacentHTML(
      //       "afterbegin",
      //       `<li onclick="PortfolioPaginate('${result.prev_page_url}')" class="page-item active mr-1"><a class="page-link" href="#">&laquo; Previous</a></li>`
      //     );
      // }

      addPortfolio(result.data)
    });
}

/********** Function Contact Form Setup **********/

/*======== Check Field Have Value When Page Load ========*/
$(".input__field").each(function () {
  if ($(this).val()) {
    $(this).parent(".input").addClass("input--filled");
  } else {
    $(this).parent(".input").removeClass("input--filled");
  }
});

/*======== Check Field Have Value When Keyup ========*/
$(".input__field").on("keyup", function () {
  if ($(this).val()) {
    $(this).parent(".input").addClass("input--filled");
  } else {
    $(this).parent(".input").removeClass("input--filled");
  }
});



/*======== Contact Form Submiting ========*/

var form = document.getElementById("contact-form");

function handleForm(event) {
  // To Prevent Refresh
  event.preventDefault();

  // Collecting form data
  let name = document.getElementById("cf-name").value;
  let email = document.getElementById("cf-email").value;
  let message = document.getElementById("cf-message").value;
  const contactAlert = document.getElementById('contact-alert');
  document.getElementById('send-button').innerText = 'Sending...';
  // console.log('length = ' + message.length);
  if(message.length > 1000){
      contactAlert.innerHTML = "<i class='far fa-times-circle'></i> The message is too long";
      
      // document.getElementById('contact-alert').addClass('wave-in');
      contactAlert.style.color='yellow';
      contactAlert.style.borderColor='yellow';
      contactAlert.style.display='block';

      setTimeout(()=>{
        contactAlert.style.animation='waveOut 3s ease-in-out forwards';
        setTimeout(()=>{
          contactAlert.style.display='none';
        }, 3000);
      }, 3000);
      document.getElementById('send-button').innerText = 'Send Message';
      return;
  }

  let data = {
    name: name,
    email: email,
    message: message,
  };

  // POST Request for contact
  fetch("https://ahnafasif.bosonscienceclub.com/api/contact", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => {
    
    // Checking if 200 Status
    if (res.status == 200) {
      //alert("Message Sent Succesfully");
      document.getElementById('contact-alert').innerHTML = "<i class='fas fa-check'></i> Successfully Sent your message";
      document.getElementById('send-button').innerText = 'Sent';
      // document.getElementById('contact-alert').addClass('wave-in');
      contactAlert.style.color='limegreen';
      contactAlert.style.borderColor='limegreen';
      document.getElementById('contact-alert').style.display='block';

      setTimeout(()=>{
        contactAlert.style.animation='waveOut 3s ease-in-out forwards';
        
        setTimeout(()=>{
          contactAlert.style.display='none';
          document.getElementById('send-button').innerText = 'Send Message';
        }, 3000);
      }, 3000);

    } else {
      alert('error occured');
    }
  });
}

// Calling handleform on submit

form.addEventListener("submit", handleForm);


/*======== Checking if blog page or not ========*/

if (window.location.pathname != "/blog.html") {
  BlogPaginate("https://ahnafasif.bosonscienceclub.com/api/blogs/30")
  PortfolioPaginate(
    "https://ahnafasif.bosonscienceclub.com/api/portfolios/30"
  );
}

function formatDate(date){
  let months = [
    'January','February','March','April','May','June','July','August',
    'September','October','November','December'
  ];
  d = date.split('-');
  let year = d[0];
  let month = months[d[1]-1];
  let day = d[2];

  return `${day} ${month}, ${year}`;
}
