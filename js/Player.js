class Player {
    constructor (name, id, color, active = false){
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.token = this.createToken(21);
        
    }

    createToken(num) {
        const tokens = [];

        for (let i = 0; i < num; i++) {
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }

   get unusedTokens(){
        return this.token.filter(token => !token.dropped);
    }

   get activeTokens(){
        return this.unusedTokens[0];
    }
}