# xCloud-task-vuejs-and-TailwindCSS

This repository showcases a **Vue.js 3** project built with the **Composition API**, **TailwindCSS**, and a plugin called **Flowbite**. The project also uses **Pinia** for state management (primarily to toggle between Dark Mode and Day Mode).

## 🌟 Features

- **Vue 3 Composition API**: Modern approach to building reactive components.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **Flowbite Plugin**: Enhances TailwindCSS with prebuilt components.
- **Pinia State Management**: Demonstrates basic usage of Pinia (e.g., Dark Mode toggle).
- **Component-Based Architecture**: Fully modular and reusable component setup.
- **Dark Mode & Day Mode**: Highlighted feature with seamless switching.

## 🛠️ Technologies Used

- **Vue.js 3**: Frontend framework with Composition API.
- **TailwindCSS**: For styling and layout design.
- **Flowbite**: TailwindCSS plugin for prebuilt UI components.
- **Pinia**: State management for toggling Dark Mode and Day Mode.

  
## 📂 Project Structure

The project is centered around a single-view page and consists of the following components:

1. **Root Component**:
   - Contains demo data for Blueprints and Plugins.
   - Passes data to child components using `defineProps` and `v-model`.

2. **Child Components**:
   - **Setup**: Main component for displaying and managing data.
   - **CreateBlueprintModal**: Modal for creating new blueprints.
   - **AllBlueprintModal**: Modal for displaying all blueprints.

## 🎯 Project Highlights

1. **Dark Mode and Day Mode**:
   - Fully functional light/dark theme toggle.
   - Implemented using Pinia for state management.
   
2. **Modular Design**:
   - All components are self-contained and reusable.
   - Clear separation of concerns for easier maintenance.

3. **Minimal Prop Drilling**:
   - Data is passed efficiently using `v-model` rather than excessive prop drilling.

4. **Component Interactions**:
   - Root component manages the data and passes it down to child components.
   - Modals interact seamlessly with the main setup component.

## 🚀 How to Run the Project

## Live Preview 🌐
Experience the project live: View Demo
[**View Demo**](https://xcloud-task.netlify.app/)


## Installation
 To install and set up this Vue.js Vite project, follow these steps:

```bash
   git clone https://github.com/fahimahmedd/xCloud-task-vuejs-and-TailwindCSS.git
   cd repository-name
   npm install
   npm run dev
```

## 
Thank you for visiting this repository! Happy coding! 🎉
