export default class Component {
    constructor(props) {
        this.title = props.title || 'Default Title';
    }

    render() {
        const element = document.createElement('div');
        element.textContent = this.title;
        return element;
    }
}