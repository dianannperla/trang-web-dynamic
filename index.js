export default class Component {
    constructor(props) {
        this.title = props.title || 'Untitled Component';
    }

    render() {
        const element = document.createElement('div');
        element.textContent = this.title;
        return element;
    }
}