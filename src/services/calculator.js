export class StringCalculator {

    static standardOperators = ['%', '÷', 'x', '-', '+'];

    static calculate(operation) {
        let nums = [];
        let operators = [];
        let num = "";

        if (operation === "")
            return "";

        for (let i = 0; i < operation.length; i++) {
            let operator = false;

            if (this.standardOperators.includes(operation[i])) {
                operators.push(operation[i]);
                operator = true;
            }

            if (!operator) {
                num += operation[i];
            }

            if (operator || i === operation.length - 1) {
                let floatNum = parseFloat(num);
                nums.push(floatNum);
                num = "";
            }
        }

        return this.calculateExpression(nums, operators).toString();
    }

    static calculateExpression(nums, operators) {

        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === '%') {
                nums[i] = nums[i] / 100;
                operators.splice(i, 1);
                i--;
            }
        }

        let result = nums[0];

        for (let i = 0; i < operators.length; i++) {
            switch (operators[i]) {
                case '÷':
                    result = result / nums[i + 1];
                    break;
                case 'x':
                    result = result * nums[i + 1];
                    break;
                case '-':
                    result = result - nums[i + 1];
                    break;
                case '+':
                    result = result + nums[i + 1];
                    break;
            }
        }

        return result;
    }
}
