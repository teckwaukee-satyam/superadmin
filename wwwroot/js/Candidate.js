document.addEventListener('DOMContentLoaded', function () {
    const editDeleteModal = document.getElementById('editDeleteModal');
    const closeModalButton = document.querySelector('.modal .close');
    const candidateTableBody = document.getElementById('candidate-table-body');

    // Function to show the modal
    function showModal() {
        editDeleteModal.classList.add('show');
    }

    // Function to hide the modal
    function hideModal() {
        editDeleteModal.classList.remove('show');
    }

    // Event listener for closing the modal
    if (closeModalButton && editDeleteModal) {
        closeModalButton.addEventListener('click', hideModal);
    }

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target === editDeleteModal) {
            hideModal();
        }
    });

    // Event delegation for edit and delete buttons
    if (candidateTableBody) {
        candidateTableBody.addEventListener('click', function (event) {
            const target = event.target;

            if (target.classList.contains('btn-edit')) {
                const candidateId = target.dataset.id;
                console.log('Edit button clicked for candidate ID:', candidateId);
                // In a real application, you would populate the modal with candidate data here
                showModal();
            } else if (target.classList.contains('btn-delete')) {
                const candidateId = target.dataset.id;
                console.log('Delete button clicked for candidate ID:', candidateId);
                // In a real application, you would populate the modal for delete confirmation here
                showModal(); // You might want a separate confirmation modal
            }
        });
    }
});