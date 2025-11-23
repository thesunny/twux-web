# tx

Twui exports `tx` which is a shortcut for `twMerge` from the `tailwind-merge` library.

It's named to make it easy to import a short, easy to read reference to `twMerge` which is familiar and similar to how people use `cx` with the `classnames` library.

Named with a `t` to reflect compatibility with Tailwind.

```tsx
import { tx } from "twui";

const classNames = tx("text-white bg-color-red", "bg-color-blue");
// --> "text-white bg-color-blue"
```
