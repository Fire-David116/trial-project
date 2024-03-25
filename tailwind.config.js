/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#190F01',
        'border-color': '#C86C00',
        gradientStart: '#ff416c',
        gradientEnd: '#ff4b2b',
      },
    },

  },
  plugins: [],
  webpack: (config, { isServer }) => {
    // Add support for loading PNG files
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/images/[name].[hash].[ext]',
          },
        },
      ],
    });

    // Important: return the modified config
    return config;
  },
};
