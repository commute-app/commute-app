import { parse } from 'node-html-parser'
import type { HTMLElement } from 'node-html-parser'

interface Props {
  name: string
  [key: string]: string
}

// cositas
const Svg = ({ name, ...attributes }: Props): React.JSX.Element => {
  // @ts-ignore
  const files: Record<string, string> = import.meta.glob(
    '/src/assets/svg/**/*.svg',
    { query: '?raw', import: 'default', eager: true }
  )
  const filePath: string = `/src/assets/svg/${name}.svg`

  const svgData: string | undefined = files[filePath]
  if (svgData === undefined) {
    throw new Error(`SVG ${name} not found`)
  }

  const root: HTMLElement = parse(svgData)
  const svg: HTMLElement | null = root.querySelector('svg')

  const svgAttributes = {
    ...svg?.attributes,
    ...attributes
  }
  if (svg?.innerHTML == null) {
    throw new Error(`SVG ${name} has null innerHTML`)
  }
  return (
    <svg
      {...svgAttributes}
      dangerouslySetInnerHTML={{ __html: svg?.innerHTML }}
    />
  )
}

export default Svg
