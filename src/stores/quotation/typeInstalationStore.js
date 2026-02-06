import { defineStore } from 'pinia'

export const useTypeInstalationStore = defineStore('typeInstalation', {
    state: () => { 
        return { 
            type: "",
        }
    },
    getters: {
        getType: (state) => state.type,
    },
    actions: {
        setType(type) {
            this.type = type;
        },
    },
})