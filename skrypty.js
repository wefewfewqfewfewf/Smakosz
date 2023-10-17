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


    setTimeout(function() {
      progressBar.classList.remove('progress-bar');
      progressBar.classList.add('bg-warning', 'text-center', 'd-flex', 'align-items-center', 'justify-content-center'); 
      progressBar.style.fontSize = '18px'; 
      progressBar.innerHTML = '<i class="fas fa-exclamation-triangle mr-2"></i> Wystąpił błąd ładowania. ';
    }, 1000);
  }


    }
  
    
    simulateLoading();
    document.getElementById('rezerwowansko').addEventListener('submit', function(event) {
        event.preventDefault(); 

        alert('Stolik zarezerwowany');
    });

    
    