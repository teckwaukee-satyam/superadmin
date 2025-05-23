document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('addAdminForm');
    const cancelBtn = document.getElementById('cancelAddAdmin');

    // Form submission handler
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            return;
        }

        // Create FormData object
        const formData = new FormData(form);

        // Here you would typically send the data to the server
        // For demonstration, we'll just log it and show a success message
        console.log('Form data:', Object.fromEntries(formData.entries()));

        // Show success message
        alert('Administrator added successfully!');
        form.reset();
    });

    // Cancel button handler
    cancelBtn.addEventListener('click', function () {
        if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
            form.reset();
            // In a real app, you might redirect to another page
            // window.location.href = '/admin/list';
        }
    });

    // Form validation function
    function validateForm() {
        let isValid = true;
        // Clear previous errors
        document.querySelectorAll('.text-danger').forEach(span => span.textContent = '');

        // Validate email format
        const email = document.getElementById('adminEmail').value;
        const emailErrorSpan = document.querySelector('span[data-valmsg-for="AdminInput.Email"]');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
 if (emailErrorSpan) {
 emailErrorSpan.textContent = 'Please enter a valid email address.';
 }
            isValid = false;
        }

        // Validate WhatsApp number format
        const whatsapp = document.getElementById('adminWhatsApp').value;
        const whatsappErrorSpan = document.querySelector('span[data-valmsg-for="AdminInput.WhatsAppNumber"]');
        if (!/^\+?[1-9]\d{1,14}$/.test(whatsapp)) {
 if (whatsappErrorSpan) {
 whatsappErrorSpan.textContent = 'Please enter a valid WhatsApp number with country code.';
 }
            isValid = false;
        }

        // Validate image file size (max 5MB)
        const imageInput = document.getElementById('adminImage');
        const imageErrorSpan = document.querySelector('span[data-valmsg-for="AdminInput.ProfileImage"]');
        if (imageInput.files.length > 0) {
            const fileSize = imageInput.files[0].size / 1024 / 1024; // in MB
            if (fileSize > 5) {
                alert('Image size must be less than 5MB');
                isValid = false;
            }
        }

        return isValid;
    }

    // Additional validation on blur for better UX
    document.getElementById('adminEmail').addEventListener('blur', function () {
        const email = this.value;
        const emailErrorSpan = document.querySelector('span[data-valmsg-for="AdminInput.Email"]');
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            this.style.borderColor = 'red';
 if (emailErrorSpan) {
 emailErrorSpan.textContent = 'Please enter a valid email address.';
 }
        } else {
            this.style.borderColor = '#ddd';
 if (emailErrorSpan) {
 emailErrorSpan.textContent = ''; // Clear error if valid
 }
        }
    });

    document.getElementById('adminWhatsApp').addEventListener('blur', function () {
        const whatsapp = this.value;
        const whatsappErrorSpan = document.querySelector('span[data-valmsg-for="AdminInput.WhatsAppNumber"]');
        if (whatsapp && !/^\+?[1-9]\d{1,14}$/.test(whatsapp)) {
            this.style.borderColor = 'red';
 if (whatsappErrorSpan) {
 whatsappErrorSpan.textContent = 'Please enter a valid WhatsApp number with country code.';
 }
        } else {
            this.style.borderColor = '#ddd';
 if (whatsappErrorSpan) {
 whatsappErrorSpan.textContent = ''; // Clear error if valid
 }
        }
    });});