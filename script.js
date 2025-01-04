// // JavaScript for Interactive Navigation
// const navToggle = document.querySelectorAll('.nav-left a, .nav-right a');
// navToggle.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault(); // Prevent default behavior
//         alert(`Navigating to: ${link.textContent}`); // Placeholder for navigation action
//     });
// });

// // JavaScript for FAQ Toggle Behavior
// const faqQuestions = document.querySelectorAll('.question-box');
// faqQuestions.forEach(question => {
//     question.addEventListener('click', () => {
//         const isActive = question.classList.contains('active');
//         faqQuestions.forEach(q => q.classList.remove('active'));
//         if (!isActive) {
//             question.classList.add('active');
//         }
//     });
// });

// // JavaScript for Form Validation
// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const name = form.querySelector('input[type="text"]').value.trim();
//     const email = form.querySelector('input[type="email"]').value.trim();
//     const message = form.querySelector('textarea').value.trim();
//     const consent = form.querySelector('#consent').checked;

//     if (!name || !email || !message) {
//         alert('Please fill out all required fields.');
//         return;
//     }

//     if (!consent) {
//         alert('You must consent to the privacy policy to submit the form.');
//         return;
//     }

//     alert('Form submitted successfully!');
//     form.reset(); // Reset form fields
// });

// // JavaScript for Product Section Interactivity
// const productButtons = document.querySelectorAll('.image-container button');
// productButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         alert('Product added to cart or navigation triggered!'); // Placeholder action
//     });
// });

// // JavaScript for Dynamic Image Handling
// const images = document.querySelectorAll('.image-container img');
// images.forEach(image => {
//     image.addEventListener('mouseover', () => {
//         image.style.transform = 'scale(1.05)'; // Slight zoom on hover
//         image.style.transition = 'transform 0.3s';
//     });

//     image.addEventListener('mouseout', () => {
//         image.style.transform = 'scale(1)'; // Reset zoom
//     });
// });

// // JavaScript for Responsive Menu
// const toggleMenu = document.querySelector('.navbar-title');
// toggleMenu.addEventListener('click', () => {
//     const navLeft = document.querySelector('.nav-left');
//     const navRight = document.querySelector('.nav-right');

//     navLeft.classList.toggle('visible');
//     navRight.classList.toggle('visible');
// });

// // Optional: Adding Smooth Scrolling for Links
// const smoothLinks = document.querySelectorAll('a[href^="#"]');
// smoothLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = link.getAttribute('href');
//         const targetElement = document.querySelector(targetId);

//         if (targetElement) {
//             targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//     });
// });

