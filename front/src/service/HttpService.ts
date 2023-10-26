import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { IResultHttp } from "src/interface/IResultHttp";


@Injectable({providedIn: 'root'})
export class HttpService{
    constructor(private http: HttpClient) {}

    private createHeader(header?: HttpHeaders): HttpHeaders {

        if (!header) {
          header = new HttpHeaders();
        }
    
        header = header.append('Content-Type', 'application/json');
        header = header.append('Accept', 'application/json');
        header = header.append('Access-Control-Allow-Origin',"*")
    
        const token = localStorage.getItem('faind:token');
        if (token) {
          header = header.append('x-token-access', token);
        }
    
        return header;
    }
    
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


    public post(url: string, model: any, headers?: HttpHeaders): Promise<IResultHttp> {
        const header = this.createHeader(headers);
        return new Promise(async (resolve) => {
          try {
           
            const res = await this.http.post(url, model, { headers: header }).toPromise();
            resolve({ sucesso: true, data: res,status:200});        
          } catch (error) {     
            
            resolve({ sucesso: false, data:{erro:error},status:404});
          }
        });
    }
    
    public delete(url: string): Promise<IResultHttp> {
        const header = this.createHeader();
        console.log("antes")
        console.log(url)
        return new Promise(async (resolve) => {
            try {        
            const res = await this.http.delete(url, { headers: header }).toPromise();
            resolve({ sucesso: true, data: res,status:200});       
            } catch (error) {        
            resolve({ sucesso: false, data: {erro:error},status:404});
            }
        });
    }


}