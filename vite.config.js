import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    build: {
        outDir,
        rollupOptions: {
            input: {
                'index': resolve(root, 'index.html'),
                'sample1': resolve(root, 'sample1', 'index.html'),
                'sample2': resolve(root, 'sample2', 'index.html'),
                'sample3': resolve(root, 'sample3', 'index.html'),
                'sample4': resolve(root, 'sample4', 'index.html'),
                'sample5': resolve(root, 'sample5', 'index.html'),
                'sample6': resolve(root, 'sample6', 'index.html'),
                'sample7': resolve(root, 'sample7', 'index.html'),
                'sample8': resolve(root, 'sample8', 'index.html'),
            },
        },
    },
});