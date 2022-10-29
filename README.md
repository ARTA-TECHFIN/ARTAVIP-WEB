## Dev Guide

### Branching

- `develop`: All dev works here. For actively development
- `main`: Well tested and ready for UAT. Only [@Jason Ma](https://github.com/horsehcj) and [@CM Ngan](https://github.com/cmngan) will merge `dev` into it once it is ready.

### Get started

1. yarn
2. yarn dev

### Naming conversion

1. For component file, always use Pascal case. Category to more specified, e.g. PageAbout instead of AboutPage, ButtonAnimated instead of AnimatedButton

### Styling

Mainly use tailwind. For shared style, you may

1. Create a component and reuse the same style. Preferred for component with complex ui and logic.
2. Add class in `styles/global` or create a new file. Preferred for global-wide and cross-component style.

### Image

1. Try to use `next/image` for image optimization
2. Try to use svg if there is diff colors
3. If image is only for decorative, no showing extra info, alt use empty string

## Todo

1. Use `/app` for NextJs13. Since it is only in beta version, we won't use it at the moment.
