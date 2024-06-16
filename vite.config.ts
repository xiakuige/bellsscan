import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// 新增
const resolve = (p: string) => {
    return path.resolve(__dirname, p);
}

// https://vitejs.dev/config/
export default defineConfig({
    base: '/bellsscan/', // github仓库名称
    resolve: {
        alias: {
            '@': resolve('./src')
        }
    },
    plugins: [vue()],
})
