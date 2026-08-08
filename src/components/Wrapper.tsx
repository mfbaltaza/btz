import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
};

const Wrapper = (props: Props) => {
  return <div class="max-w-none mx-auto">{props.children}</div>;
};

export default Wrapper;
