module.exports = function reverse (n) {
        let num = Math.abs(n).toString();
        let i = num.length - 1;
        let result = '';
        while (i >= 0) {
          result = `${result}${num[i]}`;
          i = i - 1;
        }
        return result;
      };
