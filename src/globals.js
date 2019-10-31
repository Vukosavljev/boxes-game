import { fabric } from 'fabric';

fabric.Object.prototype.selectable = false;
const canvas = new fabric.Canvas('canvasId');
canvas.hoverCursor = 'pointer';
canvas.selection = false;

export let ALL_SQUARES = [];
export let FIRST_TIME = true;
export const UNIT = 40;
export default canvas;
