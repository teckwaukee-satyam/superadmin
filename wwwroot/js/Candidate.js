document.addEventListener('DOMContentLoaded', function () {
    // Get modal elements
    const addCandidateBtn = document.getElementById('add-candidate-btn');
    const modal = document.getElementById('add-candidate-modal');
    const closeBtn = document.querySelector('.close');
    const addCandidateForm = document.getElementById('add-candidate-form');
    const candidateTableBody = document.getElementById('candidate-table-body');

    // Show modal when Add Candidate button is clicked
    addCandidateBtn.addEventListener('click', function () {
        modal.classList.add('show');
    });

    // Hide modal when close button is clicked
    closeBtn.addEventListener('click', function () {
        modal.classList.remove('show');
    });

    // Hide modal when clicking outside the modal content
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Handle form submission
    addCandidateForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const location = document.getElementById('location').value;

        // Create new table row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${phone}</td>
                    <td>${location}</td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn btn-edit action-btn">Edit</button>
                            <button class="btn btn-delete action-btn">Delete</button>
                        </div>
                    </td>
                `;

        // Add row to table
        candidateTableBody.appendChild(newRow);

        // Reset form and close modal
        addCandidateForm.reset();
        modal.classList.remove('show');

        // Add event listeners to new buttons
        addEventListenersToButtons();
    });

    // Add event listeners to existing buttons
    function addEventListenersToButtons() {
        // Edit buttons
        document.querySelectorAll('.btn-edit').forEach(btn => {
            btn.addEventListener('click', function () {
                const row = this.closest('tr');
                const cells = row.querySelectorAll('td');
                alert(`Editing candidate: ${cells[0].textContent}`);
            });
        });

        // Delete buttons
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', function () {
                if (confirm('Are you sure you want to delete this candidate?')) {
                    this.closest('tr').remove();
                }
            });
        });
    }

    // Initialize event listeners
    addEventListenersToButtons();
});