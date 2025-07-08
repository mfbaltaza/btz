import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
}

const Wrapper = (props: Props) => {
  return (
		<div class="max-w-screen-xl mx-auto px-5">{props.children}</div>
  )
}

export default Wrapper