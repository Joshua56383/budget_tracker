// Chart.js initialization
const ctx = document.getElementById('expenseChart');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Food', 'Bills', 'Transportation', 'Entertainment'],
    datasets: [{
      data: [3200, 2150, 520, 450],
      backgroundColor: ['#ffd633','#ffb347','#77dd77','#aec6cf']
    }]
  },
  options: {
    plugins: { legend: { position:'bottom' } } /* cite: 42 */
  }
});

// Modal functions
function openModal(title, amount, category, date) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalAmount').textContent = amount; /* cite: 43 */
  document.getElementById('modalCategory').textContent = category;
  document.getElementById('modalDate').textContent = date;
  document.getElementById('viewModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('viewModal').style.display = 'none'; /* cite: 44 */
}