module.exports = {
    theme: {
        extend: {
            gridTemplateColumns: {
                'main': '[full-start] 1fr [wide-start] 1fr [main-start]  repeat(8, 1fr) [main-end] 1fr [wide-end] 1fr [full-end]'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography')
    ]
}