document.addEventListener("DOMContentLoaded", function () {
  const contentSwitch = document.getElementById("contentSwitch");
  const section1 = document.getElementById("section1");
  const section2 = document.getElementById("section2");

  contentSwitch.checked = false;
  section1.style.display = "block";
  section2.style.display = "none";

  contentSwitch.addEventListener("change", function () {
      if (contentSwitch.checked) {
          section1.style.display = "none";
          section2.style.display = "block";
      } else {
          section1.style.display = "block";
          section2.style.display = "none";
      }
  });

  document.getElementById("roleFilter").addEventListener("change", function () {
      const selectedRole = this.value;
      const divs = document.querySelectorAll('#szv div');

      for (let div of divs) {
          const role = div.querySelector(".card-text").textContent;
          if (selectedRole === "" || role.includes(selectedRole)) {
              div.style.display = "block";
          } else {
              div.style.display = "none";
          }
      }
  });

  document.getElementById('pracowansko').addEventListener('submit', function (event) {
      event.preventDefault();
      alert('CV wysłane');
  });

  let progressBar = document.getElementById('progress-bar');
  let progressValue = 0;

  function simulateLoading() {
      if (progressValue < 90) {
          progressValue += 5;
          progressBar.style.width = progressValue + '%';
          progressBar.innerHTML = progressValue + '%';
          setTimeout(simulateLoading, 1000);
      } else {
          progressBar.style.width = '100%';
          progressBar.innerHTML = '100%';

          setTimeout(function () {
              progressBar.classList.remove('progress-bar');
              progressBar.classList.add('bg-warning', 'text-center', 'd-flex', 'align-items-center', 'justify-content-center');
              progressBar.style.fontSize = '18px';
              progressBar.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i> Wystąpił błąd ładowania. ';
          }, 1000);
      }
  }

  simulateLoading();
  document.getElementById('rezerwowansko').addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Stolik zarezerwowany');
  });
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 

       
        const targetId = link.getAttribute('href').substring(1); 

     
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
        
const showModalButton = document.getElementById('showModal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModal');

showModalButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

  
  
  
  





});

  

