import axios from 'axios';

export default {
    //get student particular info
    getAllFormsByStd: function(name){
        return axios.get("/api/user/"+name+"/form");
    },
    getAllGradesByStd: function(name){
        return axios.get("/api/user/"+name+"/gradebook");
    },
    getAllAttendanceByStd: function(name){
        return axios.get("/api/user/"+name+"/attendance");
    },
    getAllSupportTicketByStd: function(name){
        return axios.get("/api/user/"+name+"/support");
    },
    //Form page
    markAsSaved:function(id,data){
        return axios.put("/api/form/"+id,data);
    },
    //support page
    postSupportTicket: function(name,data){
        return axios.post("/api/support/"+name,data);
    },
    deleteSupportTicketById: function(id){
        return axios.delete("/api/support/"+id);
    }
}