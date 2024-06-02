class PiyushKumar {
    constructor() {
        this.name = "PiyushKumar";
        this.symbol = "PK";
        this.totalSupply = 0;
        this.balances = {};
    }

    mint(receiver, value) {
        this.totalSupply += value;
        if (!this.balances[receiver]) {
            this.balances[receiver] = 0;
        }
        this.balances[receiver] += value;
    }

    burn(sender, value) {
        if (!this.balances[sender] || this.balances[sender] < value) {
            console.error("Not Sufficient balance to burn");
            return;
        }

        this.totalSupply -= value;
        this.balances[sender] -= value;
    }
}

// Example usage
const token = new PiyushKumar();
console.log("Initial token state:", token);

token.mint("0x123", 200);
console.log("Token state after minting:", token);

token.burn("0x123", 100);
console.log("Token state after burning:", token);
