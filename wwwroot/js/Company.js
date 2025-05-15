document.addEventListener('DOMContentLoaded', function () {
    // Dialog elements
    const addCompanyInfoBtn = document.getElementById('addCompanyInfoBtn');
    const addCompanyInfoDialog = document.getElementById('addCompanyInfoDialog');
    const cancelAddCompanyInfo = document.getElementById('cancelAddCompanyInfo');
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
    cancelAddCompanyInfo.addEventListener('click', closeDialog);
    dialogOverlay.addEventListener('click', closeDialog);

    // Prevent dialog close when clicking inside content
    document.querySelector('.dialog-content').addEventListener('click', function (e) {
        e.stopPropagation();
    });

    // Form submission
    addCompanyForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(addCompanyForm);
        const companyData = {
            name: formData.get('name'),
            industry: formData.get('industry'),
            founded: formData.get('founded'),
            website: formData.get('website'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address')
        };

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