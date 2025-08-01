document.addEventListener('DOMContentLoaded', () => {
    const rubInput = document.getElementById('rub');
    const usdInput = document.getElementById('usd');
    const convertBtn = document.getElementById('convert-btn');
    
    // Фиксированный курс (для примера)
    const EXCHANGE_RATE = 0.011; // 1 RUB = 0.011 USD
    
    function convertCurrency() {
        const rubles = parseFloat(rubInput.value);
        
        if (isNaN(rubles)) {
            alert("Пожалуйста, введите корректное число");
            rubInput.focus();
            return;
        }
        
        const dollars = rubles * EXCHANGE_RATE;
        usdInput.value = dollars.toFixed(2);
    }
    
    // Обработчики событий
    convertBtn.addEventListener('click', convertCurrency);
    
    rubInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            convertCurrency();
        }
    });
});