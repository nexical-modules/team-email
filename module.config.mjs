
export default {
    type: 'feature',
    order: 30, // Before team-api (50)
    theme: {
        extend: {
            // No specific styles in team module currently, keeping empty as per instructions "from team module.config.mjs"
            // If we need defaults, we can add them later, but for now maintaining parity means empty.
            colors: {
                email: {
                    // Defaults to ensure it doesn't break if template uses them
                    bg: '#ffffff',
                    text: '#0e1726',
                    'text-muted': '#666666',
                    border: '#eaeaea',
                    'btn-bg': '#000000',
                    'btn-text': '#ffffff',
                    accent: '#3b82f6',
                }
            }
        }
    }
};
