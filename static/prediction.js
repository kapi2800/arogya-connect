function clearSelection() {
    const checkboxes = document.querySelectorAll('input[name="symptoms"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        checkbox.closest('.symptom-checkbox').classList.remove('selected');
    });
}

document.getElementById('symptomForm').addEventListener('submit', function(e) {
    const checkboxes = document.querySelectorAll('input[name="symptoms"]:checked');
    if (checkboxes.length === 0) {
        e.preventDefault();
        alert('Please select at least one symptom before getting a prediction.');
    }
});

document.querySelectorAll('input[name="symptoms"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.symptom-checkbox');
        if (this.checked) {
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});