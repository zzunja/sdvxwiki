import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
 
const docsComponents = getDocsMDXComponents()
const MDXParagraph = docsComponents.p
 
export function useMDXComponents(components) {
  return {
    ...docsComponents,
    MDXParagraph,
    ...components
    // ... your additional components
  }
}
