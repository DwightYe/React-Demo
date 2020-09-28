import {httpGet,httpPost} from "../utils/http"
import base from "./base"

const api = {
    getChengpin(){
        return httpGet(base.ownUrl + base.chengping)
    },
    getLogin(params){
        return httpPost(base.ownUrl + base.login,params)
    }
}

export default api