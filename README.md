# VENUE Management System

**Project Overview**
"VMS" is a React-based application designed to handle various document formats and data manipulation tasks. It features a modern user interface provided by Ant Design, along with robust tools for managing PDFs, CSVs, and Excel files. The project also emphasizes code quality through extensive testing.

**Key Features**:
- **User Interface:** 
  - **Ant Design (antd):** Provides a comprehensive set of UI components and design elements for a modern, responsive interface.

- **PDF Handling:**
  - **React PDF Viewer (`@react-pdf-viewer/core` and `@react-pdf-viewer/default-layout`):** Libraries for embedding and rendering PDF documents within the application.
  - **PDF Generation:**
    - **jsPDF (`jspdf`):** Allows for creating PDF documents programmatically.
    - **jsPDF AutoTable (`jspdf-autotable`):** Extends jsPDF with functionality to add tables to PDFs.
    - **pdfmake (`pdfmake`):** A library for creating complex PDF documents with rich text formatting and tables.

- **Data Export/Import:**
  - **CSV Handling:**
    - **PapaParse (`papaparse`):** A powerful library for parsing CSV files.
    - **React CSV (`react-csv`):** Facilitates CSV export functionality.
  - **Excel Handling:**
    - **xlsx (`xlsx`):** A library for reading and writing Excel files, supporting various Excel formats.

- **Testing:**
  - **@testing-library/react:** Provides utilities for testing React components in a user-centric way.
  - **@testing-library/jest-dom:** Adds custom matchers for asserting on DOM nodes in tests.

#### **Dependencies**
- **Ant Design:** UI framework for modern design components.
- **React PDF Viewer:** Libraries for viewing PDF files within React applications.
- **PDF Generation Libraries:** 
  - **jsPDF:** For creating and manipulating PDF documents.
  - **jsPDF AutoTable:** For adding tables to PDF documents.
  - **pdfmake:** For generating PDFs with rich formatting.
- **CSV and Excel Libraries:**
  - **PapaParse:** For CSV file parsing.
  - **React CSV:** For exporting CSV data.
  - **xlsx:** For handling Excel files.
- **Testing Libraries:**
  - **@testing-library/react:** For React component testing.
  - **@testing-library/jest-dom:** For additional DOM matchers in tests.

#### **Scripts**
- **start:** Launches the application in development mode.
- **build:** Compiles the application for production deployment.
- **test:** Executes the test suite for the application.
- **eject:** Allows customization of the build configuration beyond the default setup.

#### **Configuration**
- **ESLint:** Extends React app settings for consistent code style and linting.
- **Browserslist:** Specifies browser compatibility for production and development environments.

#### **Development Workflow**
1. **Setup and Installation:** Install dependencies using `npm install` or `yarn install`.
2. **Development:** Start the development server with `npm start` or `yarn start`.
3. **Building:** Compile the production build with `npm run build` or `yarn build`.
4. **Testing:** Run the test suite with `npm test` or `yarn test`.
5. **Ejecting:** Customize build configurations with `npm run eject` if necessary.

#### **Project Structure**
- **`src/`**: Contains the main source code, including components, hooks, and utility functions.
- **`public/`**: Includes static assets and the HTML template.
- **`tests/`**: Contains test files and configurations.
- **`package.json`**: Manages project dependencies, scripts, and configuration settings.

#### **Additional Considerations**
- **Documentation:** Ensure comprehensive documentation for components, utilities, and workflows.
- **Version Control:** Utilize Git for version control and collaboration.

---
UI/UX IDEAS:
![VenZap - Filter Management](https://github.com/user-attachments/assets/8f4fa109-f7fd-42d2-8f9b-de2c30115c1e)
![VenueGenius - Export Functionality](https://github.com/user-attachments/assets/fa510be9-8264-4b5f-ad82-f47d62fa283e)
![ExportEase - Venue Booking Export](https://github.com/user-attachments/assets/0eb032e1-6fcf-4a24-b8e0-c35b590d2dd3)
