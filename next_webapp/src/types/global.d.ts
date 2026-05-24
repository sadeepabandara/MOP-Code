// Declare global CSS, SCSS, and asset modules to allow imports
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.module.css";
declare module "*.module.scss";
declare module "*.module.sass";
declare module "*.less";

// Asset declarations
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.webp";
declare module "*.svg" {
  const content: string;
  export default content;
}

// Leaflet CSS specific declaration
declare module "leaflet/dist/leaflet.css";

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.webp";
declare module "*.svg" {
  const content: string;
  export default content;
}

export {};
