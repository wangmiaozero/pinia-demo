import { defineStore } from "pinia";
import { commonStore } from "./common";

export const mainStore = defineStore("main",{
    state: () => {
        return {
            msg:"hello pinia",
            count:0
        }
    },
    getters:{
        getCountBuff(state){
            console.log("getter被调用");
            return `${state.msg}---${state.count}`
        },
        // 另一个Store引用：获取commonStore中moveList
        getCommonStore(){
            return commonStore().moveList
        }
    },
    actions:{
        changeState(){
            this.count+=10
            this.msg = "上海加油"
        }
    }
})