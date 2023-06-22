import { createSlice } from "@reduxjs/toolkit";
const scheduleSlice = createSlice({
    name: 'schedule',
    initialState:{
        schedule:{type: "",minute: "", exactTime:"",monthDay:"",day:"",hour:""}
    },
    reducers:{
        addType(state,action){
            state.schedule.type=action.payload.type
        },
        addMinutes(state,action){
            state.schedule.minute=action.payload.minutes

        },
        addExactTime(state,action){
            state.schedule.exactTime=action.payload.exactTime

        },
        addDay(state,action){
            state.schedule.day=action.payload.day

        },
        addMonthDay(state,action){
            state.schedule.monthDay=action.payload.day
        },
        addHour(state,action){
            state.schedule.hour=action.payload.hour
        },
        clearAll(state){
            state.schedule.hour=''
            state.schedule.monthDay=''
            state.schedule.day=''
            state.schedule.exactTime=''
            state.schedule.minute=''
        }
    }
})
export default scheduleSlice.reducer;
export const {addMinutes,addExactTime,addDay,addMonthDay,addHour,addType,clearAll} = scheduleSlice.actions;