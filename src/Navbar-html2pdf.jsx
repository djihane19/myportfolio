import html2pdf from 'html2pdf.js';

const handleDownloadResume = async (e) => {
  e.preventDefault();
  try {
    const htmlFile = language === 'fr' ? '/port_fr.html' : '/port.html';
    const response = await fetch(htmlFile);
    const htmlContent = await response.text();

    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: `Djihane_Torchane_Resume_${language}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, logging: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    await html2pdf().set(opt).from(htmlContent).save();
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF: ' + error.message);
  }
};