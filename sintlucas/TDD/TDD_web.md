
# Technical Design Document for Software Developer Portfolio Website
This document provides technical details based on the provided functional design document. 
It outlines the system architecture, components, and technology stack used to build and maintain the website.

## System Architecture
The front end will be served as a single-page application (SPA) for a fluid user experience.
There will be no backend.
![architecture_simple.png](images%2Farchitecture_simple.png)

### Frontend
- **Technology:** HTML/CSS, JavaScript without any frameworks.
- **Styling:** CSS Flexbox and CSS Grid. The styling adapts to different screen sizes (mobile vs desktop).

### Deployment
- **Servers:** Deployed on Github Pages (or SaaS (Software as a Service) platform like Render.com).
- **CI/CD:** When using Render.com, continuous deployment will be implemented using their built-in GitHub integration.

## Security Considerations
- **HTTPS:** All traffic will be served over HTTPS to ensure data integrity and confidentiality.

## Testing
- **IDE:** Used to prevent syntax errors or runtime errors.
- **User Testing:** User testing will be conducted to ensure the application is user-friendly and meets user expectations.
- **Cross-Browser Testing:** The application will be tested on multiple browsers (Chrome, Firefox, Safari, Edge) to ensure compatibility.
- **Performance Testing:**: The application will be tested with Google Chromes Lighthouse to ensure fast loading times and optimal performance.
