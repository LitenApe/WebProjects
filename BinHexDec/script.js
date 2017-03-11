var app = new Vue({
    el: '#app',
    data: {
        binary: '',
        hexadecimal: '',
        decimal: ''
    },
    methods: {
        bin: function(){
            const input = this.binary;
            this.hexadecimal = input ? this.convertNumber(input).from(2).to(16):'';
            this.decimal = input ? this.convertNumber(input).from(2).to(10):'';
        },
        hex: function(){
            const input = this.hexadecimal;
            this.binary = input ? this.convertNumber(input).from(16).to(2):'';
            this.decimal = input ? this.convertNumber(input).from(16).to(10):'';
        },
        dec: function(){
            const input = this.decimal;
            this.binary = input ? this.convertNumber(input).from(10).to(2):'';
            this.hexadecimal = input ? this.convertNumber(input).from(10).to(16):'';
        },
        convertNumber(number){
            return {
                from: function(from){
                    return {
                        to: function(to){
                            return parseInt(number, from).toString(to);
                        }
                    };
                }
            };
        }
    }
});
