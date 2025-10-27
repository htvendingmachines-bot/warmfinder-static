// main.js - simple functionality for WarmFinder
document.addEventListener('DOMContentLoaded', () => {
 const backToTop = document.getElementById('back-to-top');
 if (backToTop) {
 window.addEventListener('scroll', () => {
 backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
 });
 backToTop.addEventListener('click', () => {
 window.scrollTo({ top: 0, behavior: 'smooth' });
 });
 }
 window.filterDestinations = function() {
 const flightFilter = document.getElementById('flight-filter');
 const budgetFilter = document.getElementById('budget-filter');
 const cards = document.querySelectorAll('.card');
 cards.forEach(card => {
 const flight = card.getAttribute('data-flight');
 const price = parseFloat(card.getAttribute('data-price'));
 const flightValue = flightFilter.value;
 const budgetValue = budgetFilter.value;
 const flightOk = flightValue === 'all' || flight === flightValue;
 let budgetOk = true;
 if (budgetValue !== 'all') {
 const maxPrice = parseInt(budgetValue, 10);
 budgetOk = price <= maxPrice;
 }
 card.style.display = (flightOk && budgetOk) ? '' : 'none';
 });
 };
});
