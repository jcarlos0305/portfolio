import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  imageUrl: string;
  showGallery: boolean;

  constructor(
  ) { }

  ngOnInit(): void {
    this.showGallery = false;
    this.imageUrl = 'https://drive.google.com/uc?export=view&id=';
    let promise = this.getFiles("1vIqz4YKh68HsWLiOdzsAjO4XUz4iOzRD");
    promise.then(id => {
      this.imageUrl += id
      this.showGallery = true;
    });
  }

  async getFiles(folderId: string) {
    return gapi.client.drive.files.list({
        pageSize: 100,
        fields: "nextPageToken, files(id, name, mimeType, modifiedTime, size)",
        q: `'${folderId}' in parents and trashed = false`
    }).then((res) => {
      return res.result.files[0].id;
      // console.log(this.imageUrl);
        /* let files: FileInfo[] = [];
        res.result.files.forEach((file) => files.push(FileInfo.fromGoogleFile(file)));
        return files; */
    });
}
}
