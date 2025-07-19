const offset = 80; // Altura del navbar o espacio que quieres dejar

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    const bodyRect = document.body.getBoundingClientRect().top;
    const targetRect = target.getBoundingClientRect().top;
    const targetPosition = targetRect - bodyRect - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// Animaciones con ScrollReveal
ScrollReveal().reveal('.bienvenida .contenedor', { delay: 300, distance: '50px', origin: 'bottom', duration: 800 });
ScrollReveal().reveal('.sobremi .contenedor', { delay: 200, distance: '50px', origin: 'bottom', duration: 800 });
ScrollReveal().reveal('.vistas-proyectos .gallery figure', { interval: 200, distance: '30px', origin: 'bottom', duration: 600 });
ScrollReveal().reveal('.proyecto-card', { interval: 300, distance: '40px', origin: 'left', duration: 700 });

/* document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('graficaHabilidades');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'MySQL', 'PostgreSQL'],
      datasets: [{
        label: 'Dominio (%)',
        data: [95, 90, 85, 80, 75, 70, 65, 60],
        backgroundColor: 'rgba(39, 174, 96, 0.2)',
        borderColor: '#27ae60',
        pointBackgroundColor: '#27ae60',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          angleLines: { color: '#2c3e50' },
          grid: { color: '#2c3e50' },
          pointLabels: {
            color: '#ecf0f1',
            font: { size: 14 }
          },
          ticks: {
            backdropColor: 'transparent',
            color: '#bdc3c7',
            stepSize: 20
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#ecf0f1',
            font: { size: 14 }
          }
        }
      }
    }
  });
}); */

document.addEventListener("DOMContentLoaded", function () {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: { show: false },
      fontFamily: 'Segoe UI, sans-serif',
      background: 'transparent'
    },
    series: [{
      name: 'Nivel',
      data: [90, 85, 80, 87, 90, 85, 85, 60, 60, 70, 86,90]
    }],
    xaxis: {
      categories: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'MySQL', 'PostgreSQL', '.NET','Java', 'SpringBoot', 'GitHub' ],
      labels: {
        style: {
          colors: '#fff',
          fontSize: '13px'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#fff',
          fontSize: '12px'
        }
      }
    },
    colors: ['#005f73'],
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '50%',
        distributed: true
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff'],
        fontSize: '12px'
      }
    },
    grid: {
      borderColor: '#eee',
      strokeDashArray: 4
    },
    tooltip: {
      theme: 'dark'
    }
  };

  const chart = new ApexCharts(document.querySelector("#graficaHabilidades"), options);
  chart.render();
});


