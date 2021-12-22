/* @jsx h */
import { h, Component, State, Host } from "@stencil/core";

@Component({
  tag: "my-counter",
  styleUrl: "index.css",
  shadow: true,
})
export class MyCounter {
  @State() count: number = 0;

  Hello2: any;

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

  async componentWillLoad() {
    this.Hello2 = (await import('./fc')).Hello;
  }

  render() {
    return (
      <Host>
        <this.Hello2 name="there again"/>
      </Host>
    );
  }
}
