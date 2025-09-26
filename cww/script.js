// Chart.js Configuration for Investment Chart
document.addEventListener('DOMContentLoaded', function () {
    // Investment Chart
    const ctx = document.getElementById('investmentChart').getContext('2d');

    const investmentChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Colombia', 'México', 'Costa Rica', 'Brasil', 'Perú'],
            datasets: [{
                label: 'Investment Percentage',
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    'rgba(255, 107, 53, 0.8)',
                    'rgba(247, 147, 30, 0.8)',
                    'rgba(255, 193, 7, 0.8)',
                    'rgba(255, 235, 59, 0.8)',
                    'rgba(255, 245, 157, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 107, 53, 1)',
                    'rgba(247, 147, 30, 1)',
                    'rgba(255, 193, 7, 1)',
                    'rgba(255, 235, 59, 1)',
                    'rgba(255, 245, 157, 1)'
                ],
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: 'white',
                    bodyColor: 'white',
                    borderColor: '#ff6b35',
                    borderWidth: 1,
                    cornerRadius: 8,
                    displayColors: false,
                    callbacks: {
                        label: function (context) {
                            return context.parsed.y + '% of wellness tech investments';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 50,
                    ticks: {
                        color: '#666',
                        font: {
                            size: 14,
                            weight: '500'
                        },
                        callback: function (value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: '#666',
                        font: {
                            size: 14,
                            weight: '500'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Wellness category buttons animation
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.stat-item, .timeline-item, .activity-box');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Counter animation for statistics
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');

        counters.forEach(counter => {
            const originalText = counter.textContent;
            const target = parseInt(originalText.replace(/[^\d]/g, ''));
            const duration = 2000;
            const startTime = performance.now();

            const updateCounter = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Use easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const current = Math.floor(target * easeOutQuart);

                if (progress < 1) {
                    // Update display value
                    if (originalText.includes(',')) {
                        counter.textContent = current.toLocaleString();
                    } else if (originalText.includes('+')) {
                        counter.textContent = '+' + current;
                    } else {
                        counter.textContent = current;
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    // Animation complete - set final value
                    counter.textContent = originalText;
                }
            };

            requestAnimationFrame(updateCounter);
        });
    };

    // Trigger counter animation when main event section is visible
    const mainEventObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                mainEventObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const mainEventSection = document.querySelector('.main-event');
    if (mainEventSection) {
        mainEventObserver.observe(mainEventSection);
    }

    // Timeline item hover effects
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Sponsorship table row hover effects
    const tableRows = document.querySelectorAll('.sponsorship-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#f0f8ff';
            this.style.transform = 'scale(1.01)';
            this.style.transition = 'all 0.3s ease';
        });

        row.addEventListener('mouseleave', function () {
            this.style.backgroundColor = '';
            this.style.transform = 'scale(1)';
        });
    });

    // CTA Button click handlers
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

            // Simulate form submission or redirect
            if (this.textContent.includes('Register')) {
                alert('Registration form would open here!');
            } else if (this.textContent.includes('Sponsor')) {
                alert('Sponsorship inquiry form would open here!');
            } else if (this.textContent.includes('know')) {
                alert('Newsletter signup would open here!');
            }
        });
    });

    // Add ripple effect CSS
    const style = document.createElement('style');
    style.textContent = `
        .cta-button {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Enhanced hero interactions
    const centerCircle = document.querySelector('.center-circle');
    const heroBackground = document.querySelector('.hero-background img');

    if (centerCircle) {
        centerCircle.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05) translateY(-10px)';
        });

        centerCircle.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1) translateY(0)';
        });
    }

    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (heroBackground) {
            heroBackground.style.transform = `scale(1.1) translateY(${scrolled * 0.3}px)`;
        }
    });

    // Floating label interactions
    const floatingLabels = document.querySelectorAll('.floating-label');
    floatingLabels.forEach(label => {
        label.addEventListener('mouseenter', function () {
            this.style.color = 'rgba(255, 255, 255, 0.8)';
            this.style.transform = 'scale(1.1)';
        });

        label.addEventListener('mouseleave', function () {
            this.style.color = 'rgba(255, 255, 255, 0.4)';
            this.style.transform = 'scale(1)';
        });
    });

    // Add random movement to particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const randomDelay = Math.random() * 5;
        const randomDuration = 8 + Math.random() * 7;
        particle.style.animationDelay = `${randomDelay}s`;
        particle.style.animationDuration = `${randomDuration}s`;
    });

    // Language selector functionality
    const languageSelector = document.querySelector('.language-selector select');
    if (languageSelector) {
        languageSelector.addEventListener('change', function () {
            // Simulate language change
            const currentLang = this.value;
            console.log(`Language changed to: ${currentLang}`);
            // Here you would typically implement actual language switching
        });
    }

    // Social media link handlers
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const platform = this.textContent.toLowerCase();
            console.log(`Opening ${platform} profile`);
            // Here you would typically open the actual social media profiles
        });
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';

        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});
