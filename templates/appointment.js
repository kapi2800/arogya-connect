document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('appointmentDate').min = today;

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

document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const requiredFields = this.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });
    
    if (!isValid) {
        alert('Please fill in all required fields.');
        return;
    }
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Booking...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        document.getElementById('success-message').style.display = 'block';
        
        this.reset();
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        document.getElementById('success-message').scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        setTimeout(() => {
            document.getElementById('success-message').style.display = 'none';
        }, 5000);
        
    }, 2000);
});

document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 10) {
        value = value.substring(0, 10);
    }
    e.target.value = value;
});

document.getElementById('department').addEventListener('change', function() {
    const doctorSelect = document.getElementById('doctor');
    const department = this.value;
    
    doctorSelect.innerHTML = '<option value="">Any Available Doctor</option>';
    
    const doctors = {
        'general': ['Dr. Rajesh Sharma', 'Dr. Priya Patel'],
        'cardiology': ['Dr. Amit Kumar'],
        'neurology': ['Dr. Neha Singh'],
        'orthopedics': ['Dr. Vikram Gupta'],
        'dermatology': ['Dr. Priya Patel'],
        'pediatrics': ['Dr. Neha Singh'],
        'psychiatry': ['Dr. Rajesh Sharma'],
        'emergency': ['Dr. Amit Kumar', 'Dr. Vikram Gupta']
    };
    
    if (doctors[department]) {
        doctors[department].forEach(doctor => {
            const option = document.createElement('option');
            option.value = doctor.toLowerCase().replace(/\s+/g, '-').replace('dr-', '');
            option.textContent = doctor;
            doctorSelect.appendChild(option);
        });
    }
});