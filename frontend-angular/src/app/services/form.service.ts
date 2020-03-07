import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {environment } from "src/environments/environment";
import { Form } from '../models/form';


@Injectable()
export class FormService{
    constructor(private http:HttpClient){}
    private url = `${environment.api}form`;

    public get = async(): Promise<Form[]> => {
        return this.http.get<Form[]>(this.url).toPromise()
        .then(result => {return result})
        .catch(error => {return error});
    }

    public post = async(form:Form): Promise<any> => {
        return this.http.post<Form>(this.url, form).toPromise()
        .then(result => {return result})
        .catch(error => {return error});
    } 

    public delete(id) : Promise<any>{
        return this.http.delete(`${this.url}/${id}`).toPromise()
        .then(result => {return result})
        .catch(error => {return error});
    }
}