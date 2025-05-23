document.addEventListener('DOMContentLoaded', function () {
    // Helper function to display validation errors
    function displayError(fieldId, message) {
        const errorElement = document.getElementById(`${fieldId}-error`);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    // Helper function to clear validation errors
    // Dialog elements
    const addCompanyInfoBtn = document.getElementById('addCompanyInfoBtn');
    const addCompanyInfoDialog = document.getElementById('addCompanyInfoDialog');
    const cancelAddCompanyInfoBtn = document.getElementById('cancelAddCompanyInfo');
    const addCompanyForm = document.getElementById('add-company-form');
    const dialogOverlay = document.querySelector('.dialog-overlay');
    // Open dialog
    addCompanyInfoBtn.addEventListener('click', function () {
        addCompanyInfoDialog.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    });

    // Close dialog
    function closeDialog() {
        addCompanyInfoDialog.style.display = 'none';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }

    // Close dialog handlers
 cancelAddCompanyInfoBtn.addEventListener('click', closeDialog);
    dialogOverlay?.addEventListener('click', closeDialog); // Use optional chaining for safety

    // Prevent dialog close when clicking inside content
    document.querySelector('.dialog-content').addEventListener('click', function (e) {
        e.stopPropagation();
    });

    // Form submission
    addCompanyForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(addCompanyForm);
        // Create an object from form entries
        const companyData = Object.fromEntries(formData.entries());

        // Clear previous errors
        displayError('name', '');
        displayError('email', '');

        let isValid = true;

        // Basic form validation (can be expanded)
        if (!companyData.name) {
            displayError('name', 'Company name is required.');
            isValid = false;
        }
        if (!companyData.email) {
            displayError('email', 'Email is required.');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(companyData.email)) { // Basic email format check
            displayError('email', 'Please enter a valid email address.');
            isValid = false;
        }

        if (!isValid) {
            return; // Stop execution if validation fails
        }

        // NOTE: In a real application, you would send this data to the server here
        // Update the UI with new data
        document.getElementById('companyName').textContent = companyData.name;
        document.getElementById('companyIndustry').textContent = companyData.industry;
        document.getElementById('companyFounded').textContent = companyData.founded;
        document.getElementById('companyWebsite').textContent = companyData.website;
        document.getElementById('companyEmail').textContent = companyData.email;
        document.getElementById('companyPhone').textContent = companyData.phone;
        document.getElementById('companyAddress').textContent = companyData.address;

        // Close the dialog
        closeDialog();

        // Show success message
        alert('Company information saved successfully!');
    });

    // Close dialog with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && addCompanyInfoDialog.style.display === 'block') {
            closeDialog();
        }
    });
});