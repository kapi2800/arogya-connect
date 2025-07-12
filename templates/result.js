document.addEventListener('DOMContentLoaded', function() {
    const printBtn = document.getElementById('printResultsBtn');
    if (printBtn) {
        printBtn.addEventListener('click', function () {
            window.print();
        });
    }
});