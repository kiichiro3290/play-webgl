import fsSource from './wave.glsl?raw';
import vsSource from './vertex.glsl?raw';

main();

//
// start here
//
function main() {
    // WebGLコンテキストを取得
    const canvas = document.querySelector('canvas');
    const gl = canvas.getContext('webgl');

    // シェーダーの初期化やプログラムの作成など、通常のWebGLのセットアップ
    const shaderProgram = initShaderProgram(gl, fsSource, vsSource);

    // シェーダーで使用する uniform 変数のロケーションを取得
    const timeUniformLocation = gl.getUniformLocation(shaderProgram, 'u_time');

    // 時間の開始点を取得
    let startTime = performance.now();

    // 描画ループ
    function render() {
        // 現在の時間を取得（秒単位にするために1000で割る）
        let currentTime = (performance.now() - startTime) / 1000;

        // シェーダーに時間を送る
        gl.uniform1f(timeUniformLocation, currentTime);

        // ここで通常の描画処理を行う
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 6);  // 例として三角形を描画

        // 次のフレームを要求
        requestAnimationFrame(render);
    }

    // 描画を開始
    render();
}

//
// Initialize a shader program, so WebGL knows how to draw our data
//
function initShaderProgram(gl, fsSource, vsSource) {
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, fragmentShader);
  gl.attachShader(shaderProgram, vertexShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      `Unable to initialize the shader program: ${gl.getProgramInfoLog(
        shaderProgram
      )}`
    );
    return null;
  }

  return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`
    );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}