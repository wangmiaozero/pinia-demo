import { defineStore } from "pinia"

export const commonStore = defineStore('common',{
      
    id: 'main',
    state:() =>{
        return {
            moveList:[
                '泰坦尼克号',
                '绿皮书',
                '肖申克的救赎',
                '阿甘正传',
                '星际穿越'
            ]
        }
    },
    getters:{

    },
    actions:{
        
    }
})