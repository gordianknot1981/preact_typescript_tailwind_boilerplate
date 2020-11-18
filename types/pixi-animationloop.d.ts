import {utils, WebGLRenderer, CanvasRenderer, Container} from 'pixi.js';


declare module PIXI {
  export class AnimationLoop extends utils.EventEmitter{
    constructor(renderer:WebGLRenderer|CanvasRenderer, stage?:Container);
    start():void;
    stop():void;
    renderer:WebGLRenderer|CanvasRenderer;
    stage:Container;
    time:number;
    realTime:number;
    delta:number;
    deltaMS:number;
    speed:number;
    maxFrame:number;
    raf:number;
    isRunning:boolean;
    stopOnVisibilityChange:boolean;
    protected _animate():void;
  }
}

declare module 'pixi-animationloop' {
  export default PIXI.AnimationLoop;
}

