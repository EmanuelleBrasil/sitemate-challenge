import { Component, Injectable } from '@angular/core';
import { IssueService } from '../service/issues.service';
import { Issue } from '../dto/issue.dto';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.scss',
})
export class IssuesComponent {
  constructor(private readonly issueService: IssueService) {}

  issue: Issue = {
    id: '1',
    title: 'BUG 1',
  };

  id: string = '';
  getIssue(id: string) {
    this.issueService.getIssue(id).subscribe((result) => (this.issue = result));
  }
}
