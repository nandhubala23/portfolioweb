document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const response = document.getElementById('formResponse');
  
    if (name && email && message) {
      response.textContent = "Thank you for your message!";
      this.reset();
    } else {
      response.textContent = "Please fill out all fields.";
    }
  });
  const projects = [
    {
      title: "Social Media Dashboard",
      description: "A responsive dashboard that visualizes key social media metrics such as follower growth, engagement rate, post reach, and audience demographics across platforms like Instagram, Twitter, and Facebook.",
      tech: "HTML, CSS, Python, SQL,JavaScript",
      image: "smd.png",
      link: "https://github.com/nandhubala23/project-logistics"
    },
    {
      title: "Amazon Sales Dashboard",
      description: " Amazon Sales Analytics Dashboard in PowerBI provides acomprehensive view of sales performance, revenuetrends, andcustomerinsights. Itenablesdata-driven decision-making by visualizing key metrics such as order volume, profit margins,and regional sales distribution.",
      tech: "Power BI, Power Query",
      image: "first project.png",
      link: "https://github.com/nandhubala23/amazon-dashboard"
    },
    // You can add more projects here like this ↓
    {
      title: "Super Mart Grocery Sales Analytics and Dash board",
      description: "This Power BI project analyzes sales and profitability data for Super Mart’s grocery division. The dashboard provides a comprehensive view of key performance metrics, including total profit, total orders, total sales, and average sales per order. ",
      tech: "Pandas, Numpy, Python, SQL ,Scikit-Learn, Matplotlib-pyplot,Power BI",
      image: "p1.png",
      link: "#"
    }
  ];
  
//   function displayProjects() {
//     const container = document.getElementById("projects-container");
  
//     projects.forEach(project => {
//       const card = document.createElement("div");
//       card.className = "project-card";
//       card.innerHTML = `
//         <img src="${project.image}" alt="${project.title}" />
//         <div class="project-info">
//           <h3>${project.title}</h3>
//           <p>${project.description}</p>
//           <p><strong>Tech Used:</strong> ${project.tech}</p>
//           <a href="${project.link}" target="_blank" class="project-link">View Project</a>
//         </div>
//       `;
//       container.appendChild(card);
//     });
//   }
  
//   // Call the function after DOM is ready
//   document.addEventListener("DOMContentLoaded", displayProjects);
    
function displayProjects() {
    const container = document.getElementById("projects-container");
  
    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" />
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p><strong>Tech Used:</strong> ${project.tech}</p>
          <a href="${project.link}" target="_blank" class="project-link">View Project</a>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", displayProjects);

  // Animate certification cards on scroll
const animatedElements = document.querySelectorAll('.animate');

function handleScrollAnimation() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
document.addEventListener('DOMContentLoaded', handleScrollAnimation);

//Certifications
