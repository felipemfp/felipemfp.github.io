import Typography from 'typography'
import bootstrapTheme from "typography-theme-bootstrap"

const typography = new Typography({
    ...bootstrapTheme,
    baseFontSize: '20px'
})

export default typography