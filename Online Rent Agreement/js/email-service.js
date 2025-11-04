// EmailJS Configuration and Form Handling
(function() {
    // Initialize EmailJS
    emailjs.init("5GBnW3WyRlGYd84-U");
    
    // Hero Contact Form Submission
    const heroContactForm = document.getElementById("heroContactForm");
    if (heroContactForm) {
        heroContactForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const formMessage = document.getElementById("formMessage");
            formMessage.style.display = "block";
            formMessage.style.color = "#000";
            formMessage.textContent = "Sending...";

            emailjs.sendForm("service_3qpf8or", "template_1hhllwj", this)
                .then(() => {
                    formMessage.style.color = "green";
                    formMessage.textContent = "✅ Your enquiry has been sent successfully!";
                    this.reset();
                    
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        formMessage.style.display = "none";
                    }, 5000);
                })
                .catch((err) => {
                    formMessage.style.color = "red";
                    formMessage.textContent = "❌ Failed to send. Please try again later.";
                    console.error("EmailJS Error:", err);
                });
        });
    }
    
    // Popup Contact Form Submission (Web3Forms)
    const popupContactForm = document.getElementById("popupContactForm");
    if (popupContactForm) {
        popupContactForm.addEventListener("submit", function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;
            
            // Form will be submitted to Web3Forms
            // You can add additional handling here if needed
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Close popup after successful submission
                const popupForm = document.getElementById('popup-form');
                popupForm.classList.remove('active');
                document.body.style.overflow = 'auto';
                
                // Show success message (you can implement a toast notification)
                alert('Thank you! Your request has been submitted successfully.');
            }, 2000);
        });
    }
})();