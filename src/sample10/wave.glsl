precision mediump float;

uniform float u_time;
varying vec2 v_texCoord;

void main() {
    float wave = sin(v_texCoord.x * 10.0 + u_time) * 0.5 + 0.5;
    gl_FragColor = vec4(wave, wave, wave, 1.0);
}
