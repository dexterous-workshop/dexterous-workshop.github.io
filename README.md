# Multimodal Representation Learning for Dexterous Manipulation Workshop

This repository contains the website for the ICML 2026 Workshop on Multimodal Representation Learning for Dexterous Manipulation.

## Getting Started

To get the project up and running locally, follow these steps:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    This will start a local development server, and you can view the application in your browser, usually at `http://localhost:5173`.

## Deployment

To deploy the workshop website to GitHub Pages, follow these steps:

1.  **Configure `vite.config.ts` (if necessary):**
    Ensure your `vite.config.ts` is configured for GitHub Pages. You might need to set the `base` option to your repository name. For example, if your repository is `username/my-repo`, you would set `base: '/my-repo/'`. Given this project's name is `dexterous-workshop.github.io`, it might not need a specific `base` if it's a project page, but it's good to check.

2.  **Build the Project:**
    ```bash
    npm run build
    ```
    This command will build the static assets into the `dist` directory.

3.  **Deploy to GitHub Pages:**
    You can use a tool like `gh-pages` to deploy. First, install it:
    ```bash
    npm install gh-pages --save-dev
    ```
    Then, add a deploy script to your `package.json`:
    ```json
    {
      "scripts": {
        "deploy": "gh-pages -d dist"
      }
    }
    ```
    Finally, run the deploy command:
    ```bash
    npm run deploy
    ```
    This will push the contents of the `dist` folder to the `gh-pages` branch of your repository. Ensure your GitHub Pages settings are configured to serve from the `gh-pages` branch.
