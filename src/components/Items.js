import Component from "../core/Components";

export default class Items extends Component {
  setup() {
    this.$state = { items: ["item1", "item2"] };
  }
  template() {
    const { items } = this.$state;
    return `
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <button>추가</button>
    `;
  }
  setEvent() {
    this.$target.querySelector("button").addEventListener("click", () => {
      const { items } = this.$state;
      let word = `item${items.length + 1}`;
      this.setState({ items: [...items, word] });
    });
  }
}
