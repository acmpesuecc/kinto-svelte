import { writable } from 'svelte/store';

export const globalStore = writable({
    darkMode:0
});