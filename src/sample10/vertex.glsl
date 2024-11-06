// 頂点シェーダー
attribute vec4 a_position;  // 頂点の座標
attribute vec2 a_texCoord;  // テクスチャ座標（頂点に対応する）

varying vec2 v_texCoord;    // フラグメントシェーダーに渡すための変数

void main() {
    // 頂点位置の設定
    gl_Position = a_position;

    // テクスチャ座標を varying 変数にコピーしてフラグメントシェーダーに渡す
    v_texCoord = a_texCoord;
}