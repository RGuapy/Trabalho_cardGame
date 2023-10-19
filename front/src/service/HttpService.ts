import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { IResultHttp } from "src/interface/IResultHttp";


@Injectable({providedIn: 'root'})
export class HttpService{
    constructor(private http: HttpClient) {}
    
    public get (url:string):Promise<IResultHttp>{
        return new Promise (async(resolve) =>{
            
            try{
                const res = await this.http
                .get<any[]>(url,{}).toPromise()

                resolve({sucesso:true,data:res,status:200})
            }catch(error){
                resolve({sucesso:false,data:{erro:error},status:404})
            }
            
           
        })
    }


}