# Frequently Asked Questions

### Does it handle Tailwind class merging?

Yes, Twux automatically merges conflicting Tailwind classes using `tailwind-merge`, so you can compose variants without worry.

### How does it handle React refs?

Twux components forward refs to their underlying HTML elements via React `forwardRef`, so you can treat them exactly like native elements.

> NOTE: Have to check if it handles it for function components. Forgot if I added that or not.

