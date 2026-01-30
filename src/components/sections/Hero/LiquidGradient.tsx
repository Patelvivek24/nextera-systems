"use client";

import { useEffect, useRef } from "react";

export default function LiquidGradient() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext("webgl");
        if (!gl) return;

        // Vertex Shader
        const vsSource = `
      attribute vec4 aVertexPosition;
      void main() {
        gl_Position = aVertexPosition;
      }
    `;

        // Fragment Shader - Liquid/Fluid effect
        const fsSource = `
      precision mediump float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;

      // Simple noise function
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        float time = uTime * 0.2;
        
        // Liquid distortion based on noise and time
        float n = snoise(vec2(st.x * 2.0 + time, st.y * 2.0 - time));
        
        // Mouse interaction influence
        float mouseDist = distance(st, uMouse);
        float mouseInfluence = smoothstep(0.5, 0.0, mouseDist) * 0.2;
        
        // Color Palette (Nextera Systems: Deep Blue, Cyan, Purple)
        vec3 color1 = vec3(0.169, 0.247, 0.486); // #2B3F7C (Deep Tech Blue)
        vec3 color2 = vec3(0.443, 0.722, 0.694); // #71B8B1 (Teal Cyan)
        vec3 color3 = vec3(0.075, 0.118, 0.173); // #131E2C (Midnight Navy)
        vec3 color4 = vec3(0.4, 0.0, 0.5); // Purple accent

        // Mix colors based on position and noise
        vec3 finalColor = mix(color1, color2, st.x + n * 0.5);
        finalColor = mix(finalColor, color3, st.y + n * 0.5);
        finalColor = mix(finalColor, color4, sin(time + st.x * 5.0) * 0.2 + mouseInfluence); // Add interaction

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

        // Initial Shader Program Setup
        const initShaderProgram = (gl: WebGLRenderingContext, vs: string, fs: string) => {
            const loadShader = (gl: WebGLRenderingContext, type: number, source: string) => {
                const shader = gl.createShader(type);
                if (!shader) return null;
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    console.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
                    gl.deleteShader(shader);
                    return null;
                }
                return shader;
            };

            const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vs);
            const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fs);

            if (!vertexShader || !fragmentShader) return null;

            const shaderProgram = gl.createProgram();
            if (!shaderProgram) return null;
            gl.attachShader(shaderProgram, vertexShader);
            gl.attachShader(shaderProgram, fragmentShader);
            gl.linkProgram(shaderProgram);

            if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
                console.error("Unable to initialize the shader program: " + gl.getProgramInfoLog(shaderProgram));
                return null;
            }

            return shaderProgram;
        };

        const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
        if (!shaderProgram) return;

        // Attribute & Uniform Locations
        const programInfo = {
            program: shaderProgram,
            attribLocations: {
                vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
            },
            uniformLocations: {
                uTime: gl.getUniformLocation(shaderProgram, "uTime"),
                uResolution: gl.getUniformLocation(shaderProgram, "uResolution"),
                uMouse: gl.getUniformLocation(shaderProgram, "uMouse"),
            },
        };

        // Buffer Setup
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        // Render Loop
        let startTime = performance.now();
        let mouseX = 0.5;
        let mouseY = 0.5;

        const render = () => {
            if (!gl || !canvas) return;

            // Update canvas size
            if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
                gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            }

            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.useProgram(programInfo.program);

            // Bind position buffer
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

            // Set Uniforms
            gl.uniform1f(programInfo.uniformLocations.uTime, (performance.now() - startTime) / 1000);
            gl.uniform2f(programInfo.uniformLocations.uResolution, canvas.width, canvas.height);
            gl.uniform2f(programInfo.uniformLocations.uMouse, mouseX, 1.0 - mouseY); // Flip Y for shader coords

            // Draw
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

            requestAnimationFrame(render);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = (e.clientX - rect.left) / rect.width;
            mouseY = (e.clientY - rect.top) / rect.height;
        };

        window.addEventListener("mousemove", handleMouseMove);
        const animationId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />;
}
