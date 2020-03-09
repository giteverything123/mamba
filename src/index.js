import initShaders from './init-shaders';
import translate from './translate';
import createGL from './create-gl';
import setBackGroundColor from './set-background-color';
import setSize from './set-size';
import setAttr from './set-attribute';
import setMatrix from './set-matrix';
import ortho from './ortho';
import createCanvas from './create-canvas';
import render from './render';
import perspective from './perspective';
import normalize from './normalize';
import cross from './cross';
import dot from './dot';
import lookAt from './look-at';
import mult from './mult';
import {rotateY} from './rotate';
/*
  initShaders是初始化顶点着色器和片元着色器的,并返回program,如果初始化失败,则返回-1
*/

const mamba = function() {

}
mamba.prototype.initShaders = initShaders;
mamba.prototype.translate = translate;
mamba.prototype.createGL = createGL;
mamba.prototype.setBackGroundColor = setBackGroundColor;
mamba.prototype.setSize = setSize;
mamba.prototype.setAttr = setAttr;
mamba.prototype.setMatrix = setMatrix;
mamba.prototype.ortho = ortho;
mamba.prototype.createCanvas = createCanvas;
mamba.prototype.render = render;
mamba.prototype.perspective = perspective;
mamba.prototype.normalize = normalize;
mamba.prototype.cross = cross;
mamba.prototype.dot = dot;
mamba.prototype.lookAt = lookAt;
mamba.prototype.mult = mult;
mamba.prototype.rotateY = rotateY;
export default mamba;

