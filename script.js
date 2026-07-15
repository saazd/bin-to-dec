
            function convertToDecimal() {
                const binaryInput = document.getElementById('binaryInput').value.trim();
                const resultElement = document.getElementById('result');

                if (binaryInput === '') {
                    resultElement.textContent = 'Please enter a number';
                    resultElement.style.color = '#ef4444';
                    return;
                }

                if (!/^[01]+$/.test(binaryInput)) {
                    resultElement.textContent = 'Invalid binary format';
                    resultElement.style.color = '#ef4444';
                    return;
                }

                const decimalResult = parseInt(binaryInput, 2);
                resultElement.textContent = `Decimal: ${decimalResult}`;
                resultElement.style.color = '#38bdf8';
            }