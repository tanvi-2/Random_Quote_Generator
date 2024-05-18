const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];
  
function generateQuote() {
    const randomNum = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomNum];
}
document.getElementById('newQtBtn').addEventListener('click', generateQuote);
generateQuote();
