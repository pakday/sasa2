# Tailwind Text Sizes and Max-Width Values

## Tailwind font-size utilities with line-height

These are Tailwind's default `font-size` utilities where `line-height` is also defined in the default theme.

```css
text-xs {
  font-size: 0.75rem; /* 12px */
  line-height: 1rem; /* 16px */
}
text-sm {
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
}
text-base {
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
}
text-lg {
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
}
text-xl {
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
}
text-2xl {
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
}
text-3xl {
  font-size: 1.875rem; /* 30px */
  line-height: 2.25rem; /* 36px */
}
text-4xl {
  font-size: 2.25rem; /* 36px */
  line-height: 2.5rem; /* 40px */
}
text-5xl {
  font-size: 3rem; /* 48px */
  line-height: 1; /* 48px (unitless line-height) */
}
text-6xl {
  font-size: 3.75rem; /* 60px */
  line-height: 1; /* 60px (unitless line-height) */
}
text-7xl {
  font-size: 4.5rem; /* 72px */
  line-height: 1; /* 72px (unitless line-height) */
}
text-8xl {
  font-size: 6rem; /* 96px */
  line-height: 1; /* 96px (unitless line-height) */
}
text-9xl {
  font-size: 8rem; /* 128px */
  line-height: 1; /* 128px (unitless line-height) */
}
```

## Tailwind `max-w-` utilities with rem values

These are the default Tailwind `max-w-` tokens whose values are specified in `rem` units.

```text
max-w-1   => 0.25rem
max-w-2   => 0.5rem
max-w-3   => 0.75rem
max-w-4   => 1rem
max-w-5   => 1.25rem
max-w-6   => 1.5rem
max-w-7   => 1.75rem
max-w-8   => 2rem
max-w-9   => 2.25rem
max-w-10  => 2.5rem
max-w-11  => 2.75rem
max-w-12  => 3rem
max-w-14  => 3.5rem
max-w-16  => 4rem
max-w-20  => 5rem
max-w-24  => 6rem
max-w-28  => 7rem
max-w-32  => 8rem
max-w-36  => 9rem
max-w-40  => 10rem
max-w-44  => 11rem
max-w-48  => 12rem
max-w-52  => 13rem
max-w-56  => 14rem
max-w-60  => 15rem
max-w-64  => 16rem
max-w-72  => 18rem
max-w-80  => 20rem
max-w-96  => 24rem
max-w-xs  => 20rem
max-w-sm  => 24rem
max-w-md  => 28rem
max-w-lg  => 32rem
max-w-xl  => 36rem
max-w-2xl => 42rem
max-w-3xl => 48rem
max-w-4xl => 56rem
max-w-5xl => 64rem
max-w-6xl => 72rem
max-w-7xl => 80rem
max-w-0.5 => 0.125rem
max-w-1.5 => 0.375rem
max-w-2.5 => 0.625rem
max-w-3.5 => 0.875rem
```

> Note: The default Tailwind `max-w` scale also includes non-`rem` values such as `none`, `full`, `min`, `max`, `fit`, and `prose`.

## Border radius classes used in this project

These are the Tailwind `rounded-` classes found in the codebase, with their default pixel equivalents.

```text
rounded-full => 9999px
rounded-sm   => 0.125rem => 2px
```

## Tailwind color alpha values used in pages

These are the standardized unique color tokens found in the project using Tailwind alpha syntax. The slash syntax is represented with a hyphen form, and the RGBA values show the resolved transparency.

### Standard Alpha Scale (5, 10, 20, 40, 60, 80)

The project uses a limited, intentional alpha scale that balances visual clarity with readability:

- **5** — hairline (critical, subtle borders/dividers)
- **10** — subtle (light borders, outlines)
- **20** — hover/surface (light UI elements, form fields)
- **40** — overlay (semi-transparent overlays)
- **60** — secondary text (less prominent text/hover states)
- **80** — primary text (main body text)

```text
sasa-black-10  => sasa-black/10  => rgba(29, 29, 29, 0.10)
sasa-black-20  => sasa-black/20  => rgba(29, 29, 29, 0.20)
sasa-black-40  => sasa-black/40  => rgba(29, 29, 29, 0.40)
sasa-black-60  => sasa-black/60  => rgba(29, 29, 29, 0.60)
sasa-black-80  => sasa-black/80  => rgba(29, 29, 29, 0.80)

sasa-brown-20  => sasa-brown/20  => rgba(46, 14, 2, 0.20)
sasa-brown-40  => sasa-brown/40  => rgba(46, 14, 2, 0.40)
sasa-brown-60  => sasa-brown/60  => rgba(46, 14, 2, 0.60)
sasa-brown-80  => sasa-brown/80  => rgba(46, 14, 2, 0.80)

sasa-white-10  => sasa-white/10  => rgba(235, 232, 216, 0.10)
sasa-white-20  => sasa-white/20  => rgba(235, 232, 216, 0.20)
sasa-white-40  => sasa-white/40  => rgba(235, 232, 216, 0.40)
sasa-white-60  => sasa-white/60  => rgba(235, 232, 216, 0.60)
sasa-white-80  => sasa-white/80  => rgba(235, 232, 216, 0.80)
```
