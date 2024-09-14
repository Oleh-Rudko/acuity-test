# React TypeScript/Hasura/Apollo Client/CRUD Application(Acuity Test)

## Overview

This project is a simple CRUD application built with React, TypeScript, Hasura, Apollo Client, AgGrid, and Material-UI (MUI). It allows users to view, add, edit, and delete data through a user-friendly interface.

## Technologies Used

- **React**: A JavaScript library for building user interfaces. [link](https://reactjs.org/)
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript. [link](https://www.typescriptlang.org/)
- **Hasura**: A GraphQL engine that provides instant GraphQL APIs over new or existing Postgres databases. [link](https://hasura.io/)
- **Apollo Client**: A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. [link](https://www.apollographql.com/docs/react/)
- **AgGrid**: A feature-rich data grid for displaying and manipulating data. [link](https://www.ag-grid.com/)
- **React Router DOM**: A library for routing in React applications. [link](https://reactrouter.com/web/guides/quick-start)
- **Material-UI (MUI)**: A popular React UI framework that provides pre-built components. [link](https://mui.com/)

## Features

- Display data in a grid using AgGrid.
- Add new data through a form with validation.
- Edit existing data with a form.
- Delete data with a confirmation dialog.
- Responsive and user-friendly interface. Up to you.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v18 or later)
- **yarn**

### Installation Steps

1. **Clone the Repository**
   Open your terminal and run the following command to clone the repository:
   ```bash
   git clone git@github.com:Oleh-Rudko/acuity-test.git
   cd acuity-test
   ```
2. **Install Dependencies**
   Install the required dependencies using npm or yarn:
   ```bash
   yarn install
   ```
3. **Set Up Hasura**
   ```bash
   touch .env.local
   ```
   Add a new Environment Variable to the `.env.local` file:
   ```bash
   REACT_APP_HASURA_SECRET=hasura-secret
   ```
4. **Run the Application**
   Start the development server by running:
   ```bash
   yarn start
   ```
   Open your browser and navigate to `http://localhost:3000`.

## Tasks

- [] Create a `react-router-dom` navigation with the following routes:
  - [] `/` - Home page with a grid of data Foods.
  - [] `/add` - Add new Form to create Food.
  - [] `/edit/:id` - Edit existing Food by Form ID.
- [] Create a `AgGrid` component to display data.
  - [] Add columns: `id`, `name`, `country`, `spicy`, `notes`, `created_at`, `updated_at`, `edit | delete`.
  - [] Add a `Edit` | `Delete` button to each row in one column.
    - [] `Edit` button should navigate to `/edit/:id`.
    - [] `Delete` button should show a confirmation dialog.
  - [] Add a `Country` column with Name and Flag of the Country(should be list of countries in the src/countries.ts).
  - [] Add `Spicy` column with a `Yes` | `No` value.
- [] Create a `Mui Form` component to add and edit data.
    - [] Add a `Name` required field.
    - [] Add a `Country` required dropdown field.
    - [] Add a `Spicy` required dropdown field.
    - [] Add a `Notes` optional field.
    - [] Add a `Submit` button.
- [] Query data from Hasura using `Apollo Client`. You can see src/hooks/useFoods.ts(update types).
