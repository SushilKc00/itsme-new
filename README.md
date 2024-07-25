# Softexedge Turborepo Template

Welcome to the Softexedge TurboRepo documentation! In this guide, you will learn how to utilize the Vercel TurboRepo with Shadcn-UI preconfigured to efficiently develop websites and web applications for our clients.

## Introduction

The Softexedge TurboRepo is a comprehensive solution designed to simplify the development and deployment process for web projects. By adopting a monorepo architecture and integrating powerful tools like next-js and Shadcn-UI, we aim to enhance collaboration, code sharing, and deployment efficiency across our development teams.

## Objectives

Our TurboRepo serves the following key objectives:

- **Multiple Web Applications**: Develop and manage multiple web applications within a single repository. Each application, such as an admin dashboard or a client dashboard, is treated as a separate entity with its own deployment context.

- **Centralized UI Library**: Utilize the preconfigured Shadcn-UI library to maintain a centralized repository of reusable UI components. These components ensure consistency in design and user experience across all web applications.

- **Code and UI Sharing**: Facilitate seamless code and UI sharing between different web applications. This eliminates redundancy and reduces development effort by enabling teams to leverage existing components and logic.

- **Efficient Deployment**: TurboRepo streamlines the deployment process by managing all web applications within a unified environment. This reduces deployment effort and ensures consistency in deployment configurations across projects.

## What's inside?

The TurboRepo follows a structured directory layout to organize different components and services:

- `apps/web`: Contains a Next.js web application where the main development work takes place.
- `packages/ui`: Contains a React component library shared by both web and docs applications. This library is powered by shadcn/ui.
- `packages/eslint-config`: Contains ESLint configurations, including eslint-config-next and eslint-config-prettier.
- `packages/typescript-config`: Contains tsconfig.json files used throughout the monorepo.

> [!NOTE]
> The directories can have separate workspace names, such as packages/ui is named `@repo/ui` in the workspace.

## Getting Started

To get started with the Softexedge TurboRepo, follow these steps:

1. Clone the TurboRepo repository to your local machine.

   ```bash
   git clone <repo-url>
   ```

2. Install the required dependencies using Yarn.

   ```bash
   yarn install
   ```

3. Start the development server for all applications.

   ```bash
   yarn dev
   ```

4. if you want to run a specific application, you can use the following command:

   ```bash
   yarn workspace @repo/web dev
   ```

## inside the TurboRepo

The TurboRepo is powered by the following key technologies and tools:

- **Next.js**: A React framework for building web applications with server-side rendering, static site generation, and more.
- **Shadcn-UI**: A React component library for building beautiful and accessible user interfaces.
- **Yarn Workspaces**: A feature of Yarn that allows you to manage multiple packages within a single repository.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and developer productivity.
- **ESLint**: A pluggable linting tool for identifying and fixing problems in JavaScript code.
- **Prettier**: An opinionated code formatter that enforces a consistent code style across the repository.

## Some useful commands

Here are some useful commands to help you work with the TurboRepo:

- **Start Development Server**: `yarn dev
- **Build Applications**: `yarn build`
- **Lint Code**: `yarn lint`
- **Format Code**: `yarn format`
- **Add new dependency**: `yarn workspace @repo/web add <package-name>`

## Conclusion

The Softexedge TurboRepo is a powerful solution for developing web projects efficiently and collaboratively. By leveraging the monorepo architecture, powerful tools, and preconfigured libraries, our development teams can focus on building high-quality web applications while reducing redundancy and deployment effort.
