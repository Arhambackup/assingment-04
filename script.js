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