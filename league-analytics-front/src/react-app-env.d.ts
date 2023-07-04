declare module "*.mp4" {
	const src: string;
	export default src;
  }
/// <reference types="react-scripts" />

declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const src: string;
  export default src;
}


declare module "*.svg" {
  const src: string;
  export default src;
}