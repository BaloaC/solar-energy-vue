import { defineStore } from 'pinia'

export const useQuotationStore = defineStore('quotation', {
    state: () => { 
        return { 
            quotation: "",
        }
    },
    getters: {
        getQuotation: (state) => state.quotation,
    },
    actions: {
        setQuotation(quotation) {
            this.quotation = quotation;
        },
        setCountPanel(count) {
            this.quotation.quotation.solar_panels[0].count = count;
        },
        setCountConverter(count) {
            this.quotation.quotation.converters[0].count = count;
        },
        setCountBatteries(count) {
            this.quotation.quotation.batteries[0].count = count;
        },
    },
})