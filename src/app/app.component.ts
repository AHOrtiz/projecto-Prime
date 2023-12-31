import { Component } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectoSI';
  category :string = "category";

    CrearPDF() {
      
      const DATA = document.getElementById('htmlData');
      const options = {
        background: 'white',
        scale: 3
      };

      html2canvas(DATA!, options).then((canvas) => {

        const doc = new jsPDF('p', 'pt', 'a4');
        const img = canvas.toDataURL('image/PNG');
  
        // Add image Canvas to PDF
        const bufferX = 15;
        const bufferY = 15;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
        return doc;
      }).then((docResult) => {
        docResult.output('dataurlnewwindow');
      });
      
   }

   VIDEOGAMES = [
    {
      id: 1,
      name: 'Animal Crossing',
      platform: 'Nintendo Switch',
      reference: '1-770-736-8031',
    },
    {
      id: 2,
      name: 'The Legend of Zelda: Ocarina of Time CV',
      platform: 'Wii U',
      reference: '1-770-736-2323',
    }
  ];
}