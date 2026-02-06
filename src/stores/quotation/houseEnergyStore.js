import { defineStore } from 'pinia'

export const useHouseEnergyStore = defineStore('houseEnergy', {
    state: () => { 
        return { 
            area: 0,
            total_consume: 0 
        }
    },
    getters: {
        getArea: (state) => state.area,
        getConsume: (state) => state.total_consume,
        getAll: (state) => state,
    },
    actions: {
        setArea(area) {
            this.area = area;
        },
        setConsume(consume) {
            this.total_consume = consume;
        },
    },
})