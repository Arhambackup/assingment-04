// main elements
const jobListContainer = document.getElementById('job-list-container');
const totalCountEl = document.getElementById('total-count');
const interviewCountEl = document.getElementById('interview-count');
const rejectedCountEl = document.getElementById('rejected-count');
const jobStatLabel = document.getElementById('job-stat-label');

/**
 * all stats at the top and the sidebar label
 */
function updateAllStats() {
    const allCards = document.querySelectorAll('.job-card');
    const iCount = document.querySelectorAll('.job-card[data-status="interview"]').length;
    const rCount = document.querySelectorAll('.job-card[data-status="rejected"]').length;

    totalCountEl.textContent = allCards.length;
    interviewCountEl.textContent = iCount;
    rejectedCountEl.textContent = rCount;
    jobStatLabel.textContent = `${allCards.length} jobs`;
}
// All Buttons
jobListContainer.addEventListener('click', (e) => {
   
    const card = e.target.closest('.job-card');
    if (!card) return;

    const badge = card.querySelector('.status-badge');

    // 1. Delete Button
    if (e.target.closest('.btn-delete')) {
        card.classList.add('scale-0', 'opacity-0', 'transition-all', 'duration-300'); // Optional animation
        setTimeout(() => {
            card.remove();
            updateAllStats();
        }, 300);
    }

    // 2. Interview Button
    if (e.target.classList.contains('btn-interview')) {
        card.setAttribute('data-status', 'interview');
        badge.textContent = 'Interviewing';
        badge.className = 'badge status-badge badge-success text-white border-none rounded-md px-3 py-3 text-[10px] font-bold uppercase';
        updateAllStats();
    }

    // 3. Rejected Button
    if (e.target.classList.contains('btn-reject')) {
        card.setAttribute('data-status', 'rejected');
        badge.textContent = 'Rejected';
        badge.className = 'badge status-badge badge-error text-white border-none rounded-md px-3 py-3 text-[10px] font-bold uppercase';
        updateAllStats();
    }
});

/**
 * Filter Tab
 */
const filterTabs = {
    'filter-all': 'all',
    'filter-interview': 'interview',
    'filter-rejected': 'rejected'
};
// Main Matchienc

Object.keys(filterTabs).forEach(id => {
    const tabElement = document.getElementById(id);
        tabElement.addEventListener('click', (e) => {
        // Reset tab 
        document.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('tab-active', 'bg-blue-600', 'text-white');
            t.classList.add('bg-white');
        });
        
        // activate current tab all
        e.target.classList.add('tab-active', 'bg-blue-600', 'text-white');
        e.target.classList.remove('bg-white');

        // Show/Hide 
        const targetStatus = filterTabs[id];
        document.querySelectorAll('.job-card').forEach(card => {
            const cardStatus = card.getAttribute('data-status');
            if (targetStatus === 'all' || cardStatus === targetStatus) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

});