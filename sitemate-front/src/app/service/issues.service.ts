import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Issue } from '../dto/issue.dto';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  constructor(private readonly http: HttpClient) {}

  getIssue(id: string): Observable<Issue> {
    return this.http.get<Issue>(`http://localhost:3000/issues/${id}`);
  }
}
