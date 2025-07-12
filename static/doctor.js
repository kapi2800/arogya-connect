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
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const department = this.dataset.department;
        
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const doctorCards = document.querySelectorAll('.doctor-card');
        doctorCards.forEach(card => {
            if (department === 'all' || card.dataset.department.includes(department)) {
                card.style.display = 'block';
                card.style.opacity = '0';
                setTimeout(() => card.style.opacity = '1', 100);
            } else {
                card.style.display = 'none';
            }
        });
    });
});

function showDoctorProfile(doctorId) {
    const profiles = {
        'dr-sharma': {
            name: 'Dr. Rajesh Sharma',
            specialization: 'General Medicine & Cardiology',
            education: 'MBBS from AIIMS Delhi, MD Internal Medicine from PGI Chandigarh',
            experience: '15+ years of experience treating cardiac and general medical conditions',
            achievements: [
                'Published 25+ research papers on cardiovascular health',
                'Former Head of Cardiology at City Hospital',
                'Member of Indian Medical Association',
                'Expertise in preventive cardiology'
            ],
            languages: 'English, Hindi, Gujarati'
        },
        'dr-patel': {
            name: 'Dr. Priya Patel',
            specialization: 'General Medicine & Dermatology',
            education: 'MBBS from Grant Medical College, MD Dermatology from KEM Hospital',
            experience: '12+ years specializing in skin disorders and cosmetic procedures',
            achievements: [
                'Certified in Advanced Laser Treatments',
                'Winner of Best Dermatologist Award 2022',
                'Regular speaker at dermatology conferences',
                'Expert in pediatric dermatology'
            ],
            languages: 'English, Hindi, Marathi'
        },
        'dr-kumar': {
            name: 'Dr. Amit Kumar',
            specialization: 'Cardiology',
            education: 'MBBS from AIIMS Delhi, MD Cardiology from PGI Chandigarh',
            experience: '18+ years of experience in advanced cardiac care and interventional cardiology',
            achievements: [
                'Performed 500+ cardiac interventions',
                'Expert in minimally invasive heart surgery',
                'Published 30+ research papers on cardiology',
                'Member of Cardiological Society of India'
            ],
            languages: 'English, Hindi'
        },
        'dr-singh': {
            name: 'Dr. Neha Singh',
            specialization: 'Neurology & Pediatrics',
            education: 'MBBS from King George Medical University, MD Neurology from SGPGIMS',
            experience: '10+ years specializing in neurological disorders in children and adults',
            achievements: [
                'Expert in pediatric neurology',
                'Certified in EEG and EMG procedures',
                'Award for excellence in neurological care',
                'Regular contributor to medical journals'
            ],
            languages: 'English, Hindi, Bengali'
        },
        'dr-gupta': {
            name: 'Dr. Vikram Gupta',
            specialization: 'Orthopedics',
            education: 'MBBS from MAULANA AZAD Medical College, MS Orthopedics from AIIMS',
            experience: '14+ years in orthopedic surgery and sports medicine',
            achievements: [
                'Expert in joint replacement surgery',
                'Specialized in sports injury treatment',
                'Performed 200+ successful joint surgeries',
                'Member of Indian Orthopedic Association'
            ],
            languages: 'English, Hindi, Punjabi'
        }
    };
    
    const profile = profiles[doctorId];
    if (profile) {
        const content = `
            <h2>${profile.name}</h2>
            <p class="specialization">${profile.specialization}</p>
            <div class="profile-section">
                <h3><i class="fas fa-graduation-cap"></i> Education</h3>
                <p>${profile.education}</p>
            </div>
            <div class="profile-section">
                <h3><i class="fas fa-briefcase"></i> Experience</h3>
                <p>${profile.experience}</p>
            </div>
            <div class="profile-section">
                <h3><i class="fas fa-trophy"></i> Achievements</h3>
                <ul>
                    ${profile.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
            <div class="profile-section">
                <h3><i class="fas fa-language"></i> Languages</h3>
                <p>${profile.languages}</p>
            </div>
            <div class="profile-actions">
                <a href="/appointments" class="btn btn-primary">Book Appointment</a>
            </div>
        `;
        
        document.getElementById('doctorProfileContent').innerHTML = content;
        document.getElementById('doctorModal').style.display = 'block';
    }
}

function closeDoctorProfile() {
    document.getElementById('doctorModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('doctorModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}