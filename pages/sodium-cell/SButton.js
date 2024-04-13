class Button {
    constructor(name) {
        this.button = document.createElement('button');
        this.button.textContent = name;
        this.sClickedSink = new Sodium.StreamSink();
        this.sClicked = this.sClickedSink;
        this.button.addEventListener('click', (event) => {
            this.sClickedSink.send(Sodium.Unit.UNIT);
        });

        this.render();
    }

    render() {
        document.body.appendChild(this.button);
        return this;
    }
}

export default Button;
